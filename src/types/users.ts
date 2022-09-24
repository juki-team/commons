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
