export const CourseRole = {
  RESTRICTED: 'RESTRICTED',
  GUEST: 'GUEST',
  REGULAR: 'REGULAR',
  CREATOR: 'CREATOR',
  SUPER_CREATOR: 'SUPER_CREATOR',
  MANAGER: 'MANAGER',
  MASTER: 'MASTER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
} as const;

export type CourseRole = (typeof CourseRole)[keyof typeof CourseRole];
