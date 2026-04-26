export const AssignmentClassType = {
  NONE: 'NONE',
  COURSE: 'COURSE',
  WORKSHEET: 'WORKSHEET',
  CONTEST: 'CONTEST',
} as const;

export type AssignmentClassType = (typeof AssignmentClassType)[keyof typeof AssignmentClassType];
