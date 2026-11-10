/**
 * Career Exploration: turn the state data files into the list of jobs the
 * quiz ranks.
 *
 * Takes plain arrays so the tests can feed it the generated JSON directly.
 */
import { hollandCode, isCatchAll, jobFamily, schoolStep } from './profiler-codes';
import type { Job } from './profiler-score';

export interface OccupationRow {
  soc: string;
  title: string;
  category: string;
  employment?: number;
  medianWage?: number;
  growth?: number;
  education?: string;
}

export interface StateRows {
  state: string;
  occupations: OccupationRow[];
}

/**
 * One job per SOC code, with the numbers of every state that reports it.
 * Catch-all lines ("..., All Other") are left out. The result is sorted by
 * title so the build is stable.
 */
export function buildJobs(
  states: StateRows[],
  whatFor: (soc: string, category: string) => string,
): Job[] {
  const bySoc = new Map<string, Job>();

  for (const { state, occupations } of states) {
    for (const o of occupations) {
      if (isCatchAll(o.title)) continue;
      let job = bySoc.get(o.soc);
      if (!job) {
        job = {
          soc: o.soc,
          title: o.title,
          category: o.category,
          what: whatFor(o.soc, o.category),
          school: schoolStep(o.education),
          code: hollandCode(o.soc),
          family: jobFamily(o.soc),
          states: {},
        };
        bySoc.set(o.soc, job);
      } else if (job.school === 0) {
        job.school = schoolStep(o.education);
      }
      job.states[state] = [o.employment ?? 0, o.medianWage ?? 0, o.growth ?? 0];
    }
  }

  return [...bySoc.values()].sort((a, b) => a.title.localeCompare(b.title));
}
