export const EntityState = {
  RELEASED: 'RELEASED',
  ARCHIVED: 'ARCHIVED',
} as const;

export type EntityState = (typeof EntityState)[keyof typeof EntityState];
