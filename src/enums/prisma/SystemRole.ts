export const SystemRole = {
  GUEST: 'GUEST',
  REGULAR: 'REGULAR',
  MANAGER: 'MANAGER',
  MASTER: 'MASTER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
} as const;

export type SystemRole = (typeof SystemRole)[keyof typeof SystemRole];
