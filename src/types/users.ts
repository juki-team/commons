import { CourseRole, Language, TeamRole, Theme, UserRole, UserStatus } from './prisma';

export interface UserBasicInterface {
  givenName: string,
  familyName: string,
  nickname: string,
  imageUrl: string,
  email: string,
}

export interface UserProfileInterface extends UserBasicInterface {
  aboutMe: string,
  country: string,
  city: string,
  institution: string,
  telegramUsername: string,
}

export interface UserInterface extends UserProfileInterface {
  preferredLanguage: Language,
  preferredTheme: Theme,
  status: UserStatus,
  userRole: UserRole,
  teamRole: TeamRole,
  courseRole: CourseRole,
}
