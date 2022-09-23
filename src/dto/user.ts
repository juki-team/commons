import { Language, Theme, UserStatus } from '../types';

export interface UserSummaryListResponseDTO {
  email: string,
  familyName: string,
  givenName: string,
  imageUrl: string,
  nickname: string,
  status: UserStatus,
}

export interface UserBasicResponseDTO extends UserSummaryListResponseDTO {
  aboutMe: string,
  city: string,
  country: string,
  institution: string,
  handles: { [key: string]: string },
}

export interface UserProfileResponseDTO extends UserBasicResponseDTO {
  canEditProfileData: boolean,
  canEditSettingsData: boolean,
  canEditPermissionsData: boolean,
  canUpdatePassword: boolean,
  canResetPassword: boolean,
}

export interface UserPingResponseDTO extends UserBasicResponseDTO {
  settings: {
    preferredLanguage: Language,
    preferredTheme: Theme,
  },
  canCreateProblem: boolean,
  canCreateContest: boolean,
  canCreateUser: boolean,
  canViewUsersManagement: boolean,
  canViewSubmissionsManagement: boolean,
}
