import {
  ContestRole,
  CourseRole,
  ProblemRole,
  SystemRole,
  TeamRole,
  UserHandlesType,
  UserRole,
  UserSettingsType,
  UserStatus,
} from '../types';

export interface UserSummaryResponseDTO {
  email: string,
  familyName: string,
  givenName: string,
  imageUrl: string,
  nickname: string,
  status: UserStatus,
}

export interface UserManagementResponseDTO extends UserSummaryResponseDTO {
  city: string,
  country: string,
  institution: string,
  systemRole: SystemRole,
  userRole: UserRole,
  contestRole: ContestRole,
  problemRole: ProblemRole,
  teamRole: TeamRole,
  courseRole: CourseRole,
  canEditPermissionsData: boolean,
  canResetPassword: boolean,
}

export interface UserBasicResponseDTO extends UserSummaryResponseDTO {
  aboutMe: string,
  city: string,
  country: string,
  institution: string,
  handles: UserHandlesType,
}

export interface UserManagementSessionResponseDTO {
  id: string,
  userId: string,
  validUntil: Date,
  createdAt: Date,
  updatedAt: Date,
  user: UserBasicResponseDTO,
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
  canViewFilesManagement: boolean,
  canViewECSManagement: boolean,
  canViewSQSManagement: boolean,
  canViewEmailManagement: boolean,
  
  sessionId: string,
}

export interface UserRankResponseDTO {
  imageUrl: string,
  nickname: string,
  status: UserStatus,
  city: string,
  country: string,
  institution: string,
  problemPoints: number,
  contestPoints: number,
}
