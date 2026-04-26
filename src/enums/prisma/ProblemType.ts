export const ProblemType = {
  STANDARD: 'STANDARD',
  DYNAMIC: 'DYNAMIC',
  INTERACTIVE: 'INTERACTIVE',
} as const;

export type ProblemType = (typeof ProblemType)[keyof typeof ProblemType];
