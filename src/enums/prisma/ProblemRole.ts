export const ProblemRole = {
  RESTRICTED: 'RESTRICTED',
  GUEST: 'GUEST',
  REGULAR: 'REGULAR',
  CREATOR: 'CREATOR',
  MANAGER: 'MANAGER',
  MASTER: 'MASTER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
} as const;

export type ProblemRole = (typeof ProblemRole)[keyof typeof ProblemRole];
