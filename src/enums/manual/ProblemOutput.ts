export const ProblemOutput = {
  STANDARD: 'STANDARD',
  DYNAMIC: 'DYNAMIC',
  INTERACTIVE: 'INTERACTIVE',
} as const;

export type ProblemOutput = (typeof ProblemOutput)[keyof typeof ProblemOutput];
