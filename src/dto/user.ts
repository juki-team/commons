import { CourseRole, TeamRole, UserHandlesType, UserRole, UserSettingsType, UserStatus } from '../types';

export interface UserSummaryListResponseDTO {
  email: string,
  familyName: string,
  givenName: string,
  imageUrl: string,
  nickname: string,
  status: UserStatus,
}

export interface UserManagementResponseDTO extends UserSummaryListResponseDTO {
  city: string,
  country: string,
  institution: string,
  userRole: UserRole,
  teamRole: TeamRole,
  courseRole: CourseRole,
}

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

export interface UserPingResponseDTO extends UserBasicResponseDTO {
  settings: UserSettingsType,
  canCreateProblem: boolean,
  canCreateContest: boolean,
  canCreateUser: boolean,
  canViewUsersManagement: boolean,
  canViewSubmissionsManagement: boolean,
  sessionId: string,
}
