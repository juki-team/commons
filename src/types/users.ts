import { CourseRole, Language, TeamRole, Theme, UserRole, UserStatus } from './prisma';

export interface UserBasicInfoInterface {
  nickname: string,
  imageUrl: string,
}

export interface UserBasicInterface extends UserBasicInfoInterface {
  givenName: string,
  familyName: string,
  email: string,
}

export interface UserProfileInterface extends UserBasicInterface {
  aboutMe: string,
  country: string,
  city: string,
  institution: string,
  telegramUsername: string,
}

export type UserHandlesType = { [key: string]: string };

export type UserSettingsType = {
  preferredLanguage: Language,
  preferredTheme: Theme,
}

export interface UserInterface extends UserProfileInterface {
  preferredLanguage: Language,
  preferredTheme: Theme,
  status: UserStatus,
  userRole: UserRole,
  teamRole: TeamRole,
  courseRole: CourseRole,
}

export enum Role {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  MASTER = 'MASTER',
  MANAGER = 'MANAGER',
  REGULAR = 'REGULAR',
  LIMITED = 'LIMITED',
  GUEST = 'GUEST',
  RESTRICTED = 'RESTRICTED',
}

export const ProblemRole: {
  RESTRICTED: 'RESTRICTED',
  GUEST: 'GUEST',
  REGULAR: 'REGULAR',
  MANAGER: 'MANAGER',
  MASTER: 'MASTER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
} = {
  RESTRICTED: 'RESTRICTED',
  GUEST: 'GUEST',
  REGULAR: 'REGULAR',
  MANAGER: 'MANAGER',
  MASTER: 'MASTER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
};

export type ProblemRole = (typeof ProblemRole)[keyof typeof ProblemRole]

export const ContestRole: {
  RESTRICTED: 'RESTRICTED',
  GUEST: 'GUEST',
  REGULAR: 'REGULAR',
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
} = {
  RESTRICTED: 'RESTRICTED',
  GUEST: 'GUEST',
  REGULAR: 'REGULAR',
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
};

export type ContestRole = (typeof ContestRole)[keyof typeof ContestRole]
