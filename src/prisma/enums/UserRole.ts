export const UserRole = {
  RESTRICTED: 'RESTRICTED',
  GUEST: 'GUEST',
  LIMITED: 'LIMITED',
  REGULAR: 'REGULAR',
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];
