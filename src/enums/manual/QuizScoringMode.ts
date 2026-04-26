export const QuizScoringMode = {
  TOTAL: 'TOTAL',
  PARTIAL: 'PARTIAL',
} as const;

export type QuizScoringMode = (typeof QuizScoringMode)[keyof typeof QuizScoringMode];
