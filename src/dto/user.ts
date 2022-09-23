import { Language, Theme, UserStatus } from '../types';

export interface UserSummaryListResponseDTO {
  email: string,
  familyName: string,
  givenName: string,
  imageUrl: string,
  nickname: string,
  status: UserStatus,
}

export type UserHandlesType = { [key: string]: string };

export interface UserBasicResponseDTO extends UserSummaryListResponseDTO {
  aboutMe: string,
  city: string,
  country: string,
  institution: string,
  handles: UserHandlesType,
}

export interface UserProfileResponseDTO extends UserBasicResponseDTO {
  canEditProfileData: boolean,
  canEditSettingsData: boolean,
  canEditPermissionsData: boolean,
  canUpdatePassword: boolean,
  canResetPassword: boolean,
}

export type UserSettingsType = {
  preferredLanguage: Language,
  preferredTheme: Theme,
}

export interface UserPingResponseDTO extends UserBasicResponseDTO {
  settings: UserSettingsType,
  canCreateProblem: boolean,
  canCreateContest: boolean,
  canCreateUser: boolean,
  canViewUsersManagement: boolean,
  canViewSubmissionsManagement: boolean,
  sessionId: string,
}
