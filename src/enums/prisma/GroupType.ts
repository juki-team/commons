export const GroupType = {
  CLASS: 'CLASS',
  TEAM: 'TEAM',
} as const;

export type GroupType = (typeof GroupType)[keyof typeof GroupType];
