/**
 * Test for the Career Exploration quiz (src/pages/explore.astro).
 *
 * Run it with:  npm test
 *
 * It reads the generated state data, so run the pipeline first. It checks
 * that different interests lead to different, sensible jobs, and that the
 * quiz deck and the shareable results link behave.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { ACTIVITIES, TYPE_ORDER, TYPES, deckFor, QUICK_PER_TYPE } from '../src/data/profiler.ts';
import { buildJobs } from '../src/lib/profiler-jobs.ts';
import { schoolStep } from '../src/lib/profiler-codes.ts';
import {
  applyFilters,
  decodeScores,
  encodeScores,
  foldFamilies,
  isFlat,
  profileCode,
  profileScores,
  MIN_FIT,
  rankJobs,
  sortRanked,
  stateNumbers,
} from '../src/lib/profiler-score.ts';

let failures = 0;
const check = (cond, msg) => {
  if (cond) console.log(`  ok: ${msg}`);
  else {
    console.log(`  FAIL: ${msg}`);
    failures++;
  }
};

/* ---- the deck ---------------------------------------------------- */

console.log('\n=== Deck ===');
check(ACTIVITIES.length === 60, '60 activities in the full deck');
check(new Set(ACTIVITIES.map((a) => a.id)).size === 60, 'every activity id is unique');
check(
  ACTIVITIES.every((a) => a.text.en && a.text.es && a.emoji),
  'every activity has English, Spanish and an emoji',
);
check(
  ACTIVITIES.every((a, i) => i === 0 || a.type !== ACTIVITIES[i - 1].type),
  'the same type never comes up twice in a row',
);
for (const t of TYPE_ORDER) {
  const full = ACTIVITIES.filter((a) => a.type === t).length;
  const quick = deckFor('quick').filter((a) => a.type === t).length;
  check(full === 10 && quick === QUICK_PER_TYPE, `${TYPES[t].name.en}: 10 in full, ${QUICK_PER_TYPE} in quick`);
}

/* ---- scores ------------------------------------------------------ */

console.log('\n=== Scores ===');
const answer = (likes) =>
  ACTIVITIES.map((a) => ({ type: a.type, value: likes.includes(a.type) ? 4 : 0 }));

check(profileScores(answer(['I'])).I === 100 && profileScores(answer(['I'])).R === 0, 'all Love it = 100, all No way = 0');
check(profileCode(profileScores(answer(['S', 'I', 'R']))) === 'RIS', 'ties keep the R-I-A-S-E-C order');
check(isFlat(profileScores(ACTIVITIES.map((a) => ({ type: a.type, value: 2 })))), 'identical answers are flat');
check(!isFlat(profileScores(answer(['I']))), 'varied answers are not flat');

const scores = { R: 72, I: 90, A: 35, S: 60, E: 41, C: 55 };
check(
  JSON.stringify(decodeScores(encodeScores(scores))) === JSON.stringify(scores),
  'a results link decodes to the scores it was made from',
);
for (const bad of [null, '', '1-2-3', '1-2-3-4-5-x', '1-2-3-4-5-101', '1-2-3-4-5-6-7']) {
  check(decodeScores(bad) === null, `rejects bad results link ${JSON.stringify(bad)}`);
}

/* ---- jobs -------------------------------------------------------- */

console.log('\n=== Jobs ===');
const dir = new URL('../src/data/generated/', import.meta.url);
const states = readdirSync(dir)
  .filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(readFileSync(new URL(f, dir), 'utf8')));
const jobs = buildJobs(states, () => 'x');

check(jobs.length > 100, `${jobs.length} jobs`);
check(!jobs.some((j) => /all other/i.test(j.title)), 'catch-all "All Other" lines are left out');
check(jobs.every((j) => /^[RIASEC]{3}$/.test(j.code)), 'every job has a three-letter code');
check(jobs.every((j) => new Set(j.code).size === 3), 'no job repeats a letter in its code');
check(
  jobs.every((j) => Object.values(j.states).some((r) => r[1] > 0)),
  'every job has a salary in at least one state',
);
check(schoolStep("Bachelor's degree") === 3 && schoolStep('Doctoral or professional degree') === 4, 'school steps');
check(schoolStep('Postsecondary nondegree award') === 1 && schoolStep(undefined) === 0, 'school steps (edges)');

/* ---- matching ---------------------------------------------------- */

console.log('\n=== Matching ===');
const profiles = {
  'Hands-on Maker': ['R'],
  'Curious Scientist + Careful Organizer': ['I', 'C'],
  'Caring Helper + Curious Scientist': ['S', 'I'],
  'Creative Designer': ['A'],
};
const results = {};
for (const [name, likes] of Object.entries(profiles)) {
  const ranked = rankJobs(profileScores(answer(likes)), jobs);
  results[name] = ranked;
  console.log(`\n  ${name}`);
  for (const r of foldFamilies(ranked).slice(0, 8)) {
    console.log(`    ${r.job.title.padEnd(50)} ${r.job.code}  fit ${r.fit.toFixed(2)}`);
  }
}

const top = (name, n = 10) => results[name].slice(0, n).map((r) => r.job);
const mostly = (list, letter) => list.filter((j) => j.code.slice(0, 2).includes(letter)).length;

check(mostly(top('Hands-on Maker'), 'R') >= 9, 'Hands-on Maker gets mostly Realistic jobs');
check(
  top('Hands-on Maker').some((j) => j.category === '49-0000' || j.category === '51-0000'),
  'Hands-on Maker sees repair or production jobs',
);
check(
  top('Caring Helper + Curious Scientist').filter((j) => j.category === '29-0000').length >= 8,
  'Caring Helper + Curious Scientist gets mostly healthcare jobs',
);
check(
  top('Creative Designer').some((j) => /architect|designer/i.test(j.title)),
  'Creative Designer sees an architect or designer',
);
check(
  top('Curious Scientist + Careful Organizer').some((j) => j.category === '15-0000'),
  'Curious Scientist + Careful Organizer sees computer or math jobs',
);
check(
  top('Hands-on Maker', 8).map((j) => j.soc).join() !== top('Caring Helper + Curious Scientist', 8).map((j) => j.soc).join(),
  'different interests give different lists',
);

const ranked = results['Hands-on Maker'];
check(ranked.every((r, i) => i === 0 || r.fit <= ranked[i - 1].fit), 'jobs are sorted best fit first');
check(ranked.every((r) => r.fit >= 0 && r.fit <= 1), 'fit stays between 0 and 1');
check(ranked[0].fit > 0.9, 'the best job is a near-perfect fit');

const loveEverything = rankJobs(profileScores(ACTIVITIES.map((a) => ({ type: a.type, value: 4 }))), jobs);
check(loveEverything.every((r) => r.fit === 0), 'loving everything makes no job stand out');

// A realistic student: likes some things a lot, others a bit, none of it extreme.
const mixed = rankJobs(
  profileScores(
    ACTIVITIES.map((a) => ({ type: a.type, value: { I: 3, C: 3, S: 2, R: 1, A: 1, E: 0 }[a.type] })),
  ),
  jobs,
);
const shown = mixed.filter((r) => r.fit >= MIN_FIT);
check(shown.length >= 20 && shown.length < jobs.length, `a mixed profile matches ${shown.length} of ${jobs.length} jobs`);
check(shown.slice(0, 10).every((r) => r.shared.length >= 2), "the top ten each share two or more of the student's top three types");
check(shown[0].job.code[0] === 'I' || shown[0].job.code[0] === 'C', "the best match starts with one of the student's top two types");

/* ---- filters, sorting, families ---------------------------------- */

console.log('\n=== Filters, sorting, families ===');
const sci = results['Caring Helper + Curious Scientist'];
const noFilter = { school: new Set(), categories: new Set() };

const twoYear = applyFilters(sci, { ...noFilter, school: new Set([2]) });
check(twoYear.length > 0 && twoYear.every((r) => r.job.school === 2), 'school filter keeps only that step');
const tech = applyFilters(sci, { ...noFilter, categories: new Set(['15-0000', '17-0000']) });
check(tech.length > 0 && tech.every((r) => ['15-0000', '17-0000'].includes(r.job.category)), 'field filter keeps only those fields');
check(applyFilters(sci, noFilter).length === sci.length, 'no filter keeps everything');

const byPay = sortRanked(sci, 'pay', 'nj');
const pays = byPay.map((r) => stateNumbers(r.job.states, 'nj').wage);
check(pays.every((p, i) => i === 0 || p <= pays[i - 1]), 'sorting by pay puts the best paid first');

const folded = foldFamilies(sci);
const doctors = folded.filter((r) => r.job.family === 'physicians');
check(doctors.length === 1, 'all physician specialties fold into one card');
check(doctors[0].related.length >= 5, `the physician card lists ${doctors[0].related.length} related specialties`);
check(new Set(folded.map((r) => r.job.family)).size === folded.length, 'one card per family');
check(foldFamilies(sci).length === folded.length && sci.every((r) => r.related.length === 0), 'folding does not change the input');

/* ---- state numbers ----------------------------------------------- */

console.log('\n=== State numbers ===');
const nurse = jobs.find((j) => j.soc === '29-1141');
const nj = stateNumbers(nurse.states, 'nj');
const pa = stateNumbers(nurse.states, 'pa');
const all = stateNumbers(nurse.states, 'all');
check(nj.wage > 0 && nj.wage !== pa.wage, 'New Jersey and Pennsylvania nurse pay differ');
check(all.people === Object.values(nurse.states).reduce((s, r) => s + r[0], 0), '"all" adds up the people in every state');
check(
  stateNumbers({ nj: [10, 0, 1], ny: [20, 80000, 3] }, 'nj').wage === 80000,
  'a state with no pay falls back to the others',
);
check(
  stateNumbers({ nj: [10, 0, 1], ny: [20, 80000, 3], pa: [5, 60000, 2] }, 'all').wage === 70000,
  '"all" skips a state that reports no pay instead of averaging in zero',
);

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) failed.`);
process.exit(failures === 0 ? 0 : 1);
