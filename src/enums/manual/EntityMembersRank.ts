export const EntityMembersRank = {
  NONE: 'NONE',
  CLOSE: 'CLOSE',
  OPEN: 'OPEN',
} as const;

export type EntityMembersRank = (typeof EntityMembersRank)[keyof typeof EntityMembersRank];
