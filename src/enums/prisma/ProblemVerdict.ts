export const ProblemVerdict = {
  NONE: 'NONE',
  PENDING: 'PENDING',
  HIDDEN: 'HIDDEN',
  CE: 'CE',
  RE: 'RE',
  TLE: 'TLE',
  MLE: 'MLE',
  WA: 'WA',
  PE: 'PE',
  PA: 'PA',
  AC: 'AC',
} as const;

export type ProblemVerdict = (typeof ProblemVerdict)[keyof typeof ProblemVerdict];
