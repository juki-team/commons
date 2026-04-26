export const ProblemInput = {
  STANDARD: 'STANDARD',
  INTERACTIVE: 'INTERACTIVE',
} as const;

export type ProblemInput = (typeof ProblemInput)[keyof typeof ProblemInput];
