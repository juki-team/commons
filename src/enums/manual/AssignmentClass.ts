export const AssignmentClass = {
  NONE: 'NONE',
  COURSE: 'COURSE',
  WORKSHEET: 'WORKSHEET',
  CONTEST: 'CONTEST',
} as const;

export type AssignmentClass = (typeof AssignmentClass)[keyof typeof AssignmentClass];
