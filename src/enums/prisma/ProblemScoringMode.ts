export const ProblemScoringMode = {
  SUBTASK: 'SUBTASK',
  TOTAL: 'TOTAL',
  PARTIAL: 'PARTIAL',
} as const;

export type ProblemScoringMode = (typeof ProblemScoringMode)[keyof typeof ProblemScoringMode];
