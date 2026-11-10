/**
 * Career Exploration: what kind of person each job suits.
 *
 * The O*NET Interest Profiler gives every job a three-letter interest code
 * (like "IRC": Investigative first, then Realistic, then Conventional). We do
 * not download that table. Instead each job gets a code from this list, which
 * is our own estimate based on the kind of work. Rules are matched by SOC
 * code prefix, first match wins, so specific jobs come before their group.
 *
 * Pure data and logic - no Astro, no data files - so the tests can use it.
 */
const CODE_RULES: [prefix: string, code: string][] = [
  // Management
  ['11-3021', 'ECI'],
  ['11-9041', 'ERI'],
  ['11-9121', 'EIC'],

  // Computer and mathematical
  ['15-1232', 'CSR'],
  ['15-1231', 'RIC'],
  ['15-1242', 'CIR'],
  ['15-1244', 'CIR'],
  ['15-1254', 'ICA'],
  ['15-1255', 'AIC'],
  ['15-1', 'ICR'],
  ['15-2011', 'CIE'],
  ['15-2021', 'IAC'],
  ['15-2031', 'ICE'],
  ['15-2', 'ICR'],

  // Architecture and engineering
  ['17-1011', 'AIR'],
  ['17-1012', 'AIR'],
  ['17-1022', 'RIC'],
  ['17-1', 'ICR'],
  ['17-2011', 'IRE'],
  ['17-2031', 'IRS'],
  ['17-2051', 'IRE'],
  ['17-2081', 'IRE'],
  ['17-2112', 'IEC'],
  ['17-2', 'IRC'],
  ['17-301', 'RCI'],
  ['17-3031', 'RCI'],
  ['17-3', 'RIC'],

  // Life, physical and related science
  ['19-1041', 'ISC'],
  ['19-1042', 'IRS'],
  ['19-1023', 'IRS'],
  ['19-1012', 'IRC'],
  ['19-1013', 'IRC'],
  ['19-1022', 'IRC'],
  ['19-1031', 'IRE'],
  ['19-1', 'IRA'],
  ['19-2012', 'IAR'],
  ['19-2', 'IRC'],
  ['19-4092', 'IRC'],
  ['19-4', 'RIC'],
  ['19-5', 'RCI'],

  // Healthcare
  ['29-1051', 'ICS'],
  ['29-1141', 'SIC'],
  ['29-115', 'SIE'],
  ['29-116', 'SIE'],
  ['29-117', 'SIE'],
  ['29-1031', 'SIC'],
  ['29-1071', 'SIR'],
  ['29-1125', 'SAE'],
  ['29-1127', 'SIA'],
  ['29-112', 'SIR'],
  ['29-1131', 'IRS'],
  ['29-1011', 'SIR'],
  ['29-1181', 'SIR'],
  ['29-1291', 'SIR'],
  ['29-1292', 'SRC'],
  ['29-1222', 'IRC'],
  ['29-1223', 'ISA'],
  ['29-1224', 'IRS'],
  ['29-124', 'IRS'],
  ['29-102', 'ISR'],
  ['29-1', 'ISR'],
  ['29-2010', 'IRC'],
  ['29-2036', 'IRC'],
  ['29-2052', 'CSR'],
  ['29-2072', 'CSE'],
  ['29-2081', 'ECR'],
  ['29-2092', 'SRE'],
  ['29-2042', 'SRI'],
  ['29-2043', 'SRI'],
  ['29-2056', 'RSI'],
  ['29-2053', 'SRC'],
  ['29-2061', 'SRC'],
  ['29-2', 'RSC'],
  ['29-9021', 'CIE'],
  ['29-9091', 'SRE'],
  ['29-9092', 'SIA'],
  ['29-9', 'SRC'],

  // Office support
  ['43-9111', 'CIR'],

  // Installation, maintenance and repair
  ['49-2', 'RIC'],
  ['49-3', 'RIC'],
  ['49-9062', 'RIC'],
  ['49-9069', 'RIC'],
  ['49-9', 'RCI'],

  // Production
  ['51-', 'RCI'],
];

/** The code used when a job matches no rule - every job gets some code. */
const FALLBACK_CODE = 'IRC';

/** Three interest letters, strongest first: "IRC". */
export function hollandCode(soc: string): string {
  return CODE_RULES.find(([prefix]) => soc.startsWith(prefix))?.[1] ?? FALLBACK_CODE;
}

/** How much each of a job's three letters counts: first 3, second 2, third 1. */
export const CODE_WEIGHTS = [3, 2, 1] as const;

/**
 * Catch-all lines like "Computer Occupations, All Other" say nothing about
 * what the work is, so they cannot be matched to anyone.
 */
export function isCatchAll(title: string): boolean {
  return /all other/i.test(title);
}

/**
 * Jobs that are one job with many specialties (a cardiologist and a
 * dermatologist both want a medical degree and a love of science). The
 * results show only the best-fitting one of a family, with the rest listed
 * underneath, so a list of twelve is not twelve kinds of doctor.
 */
export function jobFamily(soc: string): string {
  const n = Number(soc.slice(3));
  if (soc.startsWith('29-12') && n >= 1212 && n <= 1229) return 'physicians';
  if (soc.startsWith('29-12') && n >= 1242 && n <= 1249) return 'surgeons';
  if (soc.startsWith('29-10') && (n === 1021 || n === 1029)) return 'dentists';
  if (soc.startsWith('17-30') && n >= 3011 && n <= 3019) return 'drafters';
  return soc;
}

/**
 * How far a person usually studies for a job, in four steps:
 *   1 high school plus training or a certificate
 *   2 two-year degree
 *   3 four-year degree
 *   4 master's degree or higher
 * 0 means the data did not say.
 */
export type SchoolStep = 0 | 1 | 2 | 3 | 4;

export function schoolStep(education: string | undefined): SchoolStep {
  const e = (education ?? '').toLowerCase();
  if (!e) return 0;
  if (e.includes('doctoral') || e.includes('master')) return 4;
  if (e.includes('bachelor')) return 3;
  if (e.includes('associate')) return 2;
  return 1;
}
