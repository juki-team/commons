export const TeamStatus = {
  ACTIVE: 'ACTIVE',
  REPORTED: 'REPORTED',
  ARCHIVED: 'ARCHIVED',
} as const;

export type TeamStatus = (typeof TeamStatus)[keyof typeof TeamStatus];
