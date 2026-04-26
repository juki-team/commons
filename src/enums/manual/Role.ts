export const Role = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  MASTER: 'MASTER',
  MANAGER: 'MANAGER',
  CREATOR: 'CREATOR',
  REGULAR: 'REGULAR',
  LIMITED: 'LIMITED',
  GUEST: 'GUEST',
  RESTRICTED: 'RESTRICTED',
} as const;

export type Role = (typeof Role)[keyof typeof Role];
