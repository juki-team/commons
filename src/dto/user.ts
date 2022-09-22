import { UserStatus } from '../types';

export interface UserSummaryListResponseDTO {
  aboutMe: string,
  city: string,
  country: string,
  email: string,
  familyName: string,
  givenName: string,
  imageUrl: string,
  institution: string,
  nickname: string,
  status: UserStatus,
}

export interface UserResponseDTO {
  givenName: string,
  familyName: string,
  nickname: string,
  email: string,
  status: UserStatus,
  imageUrl: string,
  aboutMe: string,
  institution: string,
  country: string,
  city: string,
  handles: { [key: string]: string },
  // proceded
  canEditProfileData: boolean,
  canEditSettingsData: boolean,
  canEditPermissionsData: boolean,
  canUpdatePassword: boolean,
  canResetPassword: boolean,
}
