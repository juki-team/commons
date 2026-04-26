export const EntityStatus = {
  PUBLIC: 'PUBLIC',
  RESERVED: 'RESERVED',
  PRIVATE: 'PRIVATE',
  ARCHIVED: 'ARCHIVED',
} as const;

export type EntityStatus = (typeof EntityStatus)[keyof typeof EntityStatus];
