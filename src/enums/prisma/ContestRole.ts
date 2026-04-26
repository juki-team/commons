export const ContestRole = {
  RESTRICTED: 'RESTRICTED',
  GUEST: 'GUEST',
  REGULAR: 'REGULAR',
  CREATOR: 'CREATOR',
  MANAGER: 'MANAGER',
  MASTER: 'MASTER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
} as const;

export type ContestRole = (typeof ContestRole)[keyof typeof ContestRole];
