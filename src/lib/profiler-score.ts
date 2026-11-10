/**
 * Career Exploration: the matching rules.
 *
 * Pure logic - no DOM, no Astro, no network - so it can be tested on its own.
 *
 * How a match is made:
 *   1. Each answer is worth 0 (No way) to 4 (Love it). For each of the six
 *      interest types, the answers to that type's activities become a score
 *      from 0 to 100.
 *   2. Every job has a three-letter code ("IRC"), with weights 3, 2 and 1.
 *   3. We centre the student's scores on their own average, so someone who
 *      loves everything does not match everything. A job's raw score is the
 *      weighted sum of the centred scores of its three letters, and its fit
 *      is that sum divided by the best sum any job could reach.
 */
import { TYPE_ORDER, type TypeId } from '../data/profiler';
import { CODE_WEIGHTS, jobFamily, type SchoolStep } from './profiler-codes';

export type Scores = Record<TypeId, number>;

/** One answer: the activity's type and a value from 0 to 4. */
export interface Answer {
  type: TypeId;
  value: number;
}

export const MAX_ANSWER = 4;

/** Each type's score from 0 to 100. A type with no answers scores 0. */
export function profileScores(answers: Answer[]): Scores {
  const sum: Scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  const count: Scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  for (const a of answers) {
    sum[a.type] += a.value;
    count[a.type] += 1;
  }
  const out = { ...sum };
  for (const t of TYPE_ORDER) {
    out[t] = count[t] ? Math.round((sum[t] / (count[t] * MAX_ANSWER)) * 100) : 0;
  }
  return out;
}

/** Types from strongest to weakest. Ties keep the R-I-A-S-E-C order. */
export function rankTypes(scores: Scores): TypeId[] {
  return [...TYPE_ORDER].sort(
    (a, b) => scores[b] - scores[a] || TYPE_ORDER.indexOf(a) - TYPE_ORDER.indexOf(b),
  );
}

/** The student's own three-letter code, like "IRS". */
export function profileCode(scores: Scores): string {
  return rankTypes(scores).slice(0, 3).join('');
}

/** True when the student gave almost the same answer everywhere. */
export function isFlat(scores: Scores): boolean {
  const values = TYPE_ORDER.map((t) => scores[t]);
  return Math.max(...values) - Math.min(...values) < 8;
}

/* ------------------------------------------------------------------ */
/* Sharing: the scores live in the page address, nowhere else          */
/* ------------------------------------------------------------------ */

/** "72-90-35-60-41-55", in R-I-A-S-E-C order. */
export function encodeScores(scores: Scores): string {
  return TYPE_ORDER.map((t) => scores[t]).join('-');
}

export function decodeScores(text: string | null | undefined): Scores | null {
  if (!text) return null;
  const parts = text.split('-');
  if (parts.length !== TYPE_ORDER.length) return null;
  const out = {} as Scores;
  for (let i = 0; i < parts.length; i++) {
    if (!/^\d{1,3}$/.test(parts[i])) return null;
    const n = Number(parts[i]);
    if (n > 100) return null;
    out[TYPE_ORDER[i]] = n;
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* Jobs                                                                */
/* ------------------------------------------------------------------ */

/** state code -> [people, median wage, growth percent] */
export type StateNumbers = Record<string, [number, number, number]>;

export interface Job {
  soc: string;
  title: string;
  category: string;
  /** One line about what the job is. */
  what: string;
  school: SchoolStep;
  /** Three interest letters, strongest first. */
  code: string;
  family: string;
  states: StateNumbers;
}

export interface Ranked {
  job: Job;
  /** 0 to 1: how close the job is to the best job possible for this student. */
  fit: number;
  /** Letters of the job's code that are also among the student's top three. */
  shared: TypeId[];
  /** Titles of other jobs in the same family that were hidden behind this one. */
  related: string[];
}

/**
 * Score every job for a student. Jobs come back best fit first; ties go to
 * the job with more people in it, so that the order is stable.
 */
export function rankJobs(scores: Scores, jobs: Job[]): Ranked[] {
  const mean = TYPE_ORDER.reduce((s, t) => s + scores[t], 0) / TYPE_ORDER.length;
  const centred = (t: TypeId) => (scores[t] - mean) / 100;

  const best = rankTypes(scores).map(centred);
  const ideal = CODE_WEIGHTS.reduce((s, w, i) => s + w * best[i], 0);
  const top = new Set(rankTypes(scores).slice(0, 3));

  const total = (j: Job) => Object.values(j.states).reduce((s, r) => s + r[0], 0);

  return jobs
    .map((job) => {
      const letters = job.code.split('') as TypeId[];
      const raw = letters.reduce((s, l, i) => s + CODE_WEIGHTS[i] * centred(l), 0);
      return {
        job,
        fit: ideal > 0.0001 ? Math.min(1, Math.max(0, raw / ideal)) : 0,
        shared: letters.filter((l) => top.has(l)),
        related: [],
      };
    })
    .sort((a, b) => b.fit - a.fit || total(b.job) - total(a.job));
}

/** Jobs that fit worse than this are not matches, and are not shown. */
export const MIN_FIT = 0.2;

export type Tier = 'great' | 'good' | 'maybe';

export function fitTier(fit: number): Tier {
  if (fit >= 0.7) return 'great';
  if (fit >= 0.4) return 'good';
  return 'maybe';
}

/* ------------------------------------------------------------------ */
/* Filters, sorting, families                                          */
/* ------------------------------------------------------------------ */

export interface Filters {
  /** School steps to keep. Empty keeps everything. */
  school: Set<number>;
  /** Category ids to keep. Empty keeps everything. */
  categories: Set<string>;
}

export function applyFilters(list: Ranked[], f: Filters): Ranked[] {
  return list.filter(
    (r) =>
      (f.school.size === 0 || f.school.has(r.job.school)) &&
      (f.categories.size === 0 || f.categories.has(r.job.category)),
  );
}

export type SortKey = 'fit' | 'pay' | 'growth';

/** Where the numbers for a given state come from. See {@link stateNumbers}. */
export interface Numbers {
  people: number;
  wage: number;
  growth: number;
}

/**
 * The numbers shown for a job.
 *
 * "all" adds up the people in the three states and averages the pay and
 * growth. A state that reports no pay for a job is skipped rather than
 * averaged in as zero; if the chosen state has no pay at all for the job,
 * the other states fill in so the card is never blank.
 */
export function stateNumbers(states: StateNumbers, state: string): Numbers {
  const all = Object.entries(states);
  const chosen = state === 'all' ? all : all.filter(([code]) => code === state);
  const rows = chosen.length && chosen.some(([, r]) => r[1] > 0) ? chosen : all;
  if (rows.length === 0) return { people: 0, wage: 0, growth: 0 };

  const paid = rows.filter(([, r]) => r[1] > 0);
  const use = paid.length ? paid : rows;
  return {
    people: rows.reduce((s, [, r]) => s + r[0], 0),
    wage: Math.round(use.reduce((s, [, r]) => s + r[1], 0) / use.length),
    growth: rows.reduce((s, [, r]) => s + r[2], 0) / rows.length,
  };
}

/** Sort a list. "fit" keeps the order it came in, which is already by fit. */
export function sortRanked(list: Ranked[], key: SortKey, state: string): Ranked[] {
  if (key === 'fit') return list;
  const pick = (r: Ranked) => {
    const n = stateNumbers(r.job.states, state);
    return key === 'pay' ? n.wage : n.growth;
  };
  return [...list].sort((a, b) => pick(b) - pick(a) || b.fit - a.fit);
}

/**
 * Keep the first job of each family, in list order, and name the others
 * under it. Run this after filtering and sorting, so the job that stays is
 * the one the student would have seen first anyway.
 */
export function foldFamilies(list: Ranked[]): Ranked[] {
  const head = new Map<string, Ranked>();
  const out: Ranked[] = [];
  for (const r of list) {
    const key = r.job.family || jobFamily(r.job.soc);
    const first = head.get(key);
    if (first) {
      first.related.push(r.job.title);
    } else {
      const copy = { ...r, related: [] as string[] };
      head.set(key, copy);
      out.push(copy);
    }
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* Formatting                                                          */
/* ------------------------------------------------------------------ */

export function money(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-US');
}

export type GrowthLabel = 'exploding' | 'fast' | 'growing' | 'steady' | 'shrinking';

export function growthLabel(growth: number): GrowthLabel {
  if (growth >= 20) return 'exploding';
  if (growth >= 8) return 'fast';
  if (growth >= 2) return 'growing';
  if (growth >= 0) return 'steady';
  return 'shrinking';
}
