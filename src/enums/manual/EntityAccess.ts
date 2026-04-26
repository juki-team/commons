export const EntityAccess = {
  PRIVATE: 'PRIVATE',
  RESTRICTED: 'RESTRICTED',
  PUBLIC: 'PUBLIC',
  EXPOSED: 'EXPOSED',
} as const;

export type EntityAccess = (typeof EntityAccess)[keyof typeof EntityAccess];
