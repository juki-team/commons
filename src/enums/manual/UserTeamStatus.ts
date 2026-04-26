export const UserTeamStatus = {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
} as const;

export type UserTeamStatus = (typeof UserTeamStatus)[keyof typeof UserTeamStatus];
