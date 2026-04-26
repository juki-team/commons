export const AssignmentType = {
  READING_PDF: 'READING_PDF',
  READING_WEB: 'READING_WEB',
  SOLVE_JUKI_JUDGE_PROBLEM: 'SOLVE_JUKI_JUDGE_PROBLEM',
  SOLVE_CODEFORCES_JUDGE_PROBLEM: 'SOLVE_CODEFORCES_JUDGE_PROBLEM',
} as const;

export type AssignmentType = (typeof AssignmentType)[keyof typeof AssignmentType];
