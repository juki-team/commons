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

export type UserPingType = {
  nickname: string,
  imageUrl: string,
  status: UserStatus,
  settings: UserSettingsType,
  isLogged: boolean,
  
  canCreateProblem: boolean,
  canCreateContest: boolean,
  canCreateUser: boolean,
  canCreatePublicSheet: boolean,
  canCreatePrivateSheet: boolean,
  
  canViewUsersManagement: boolean,
  canViewSubmissionsManagement: boolean,
  canViewFilesManagement: boolean,
  canViewJudgersManagement: boolean,
  canViewEmailManagement: boolean,
  
  sessionId: string,
}

export type CompanyPingType = {
  emailContact: string,
  imageUrl: string,
  name: string,
}

export interface PingResponseDTO {
  user: UserPingType,
  company: CompanyPingType,
}

export interface UserRankResponseDTO {
  imageUrl: string,
  nickname: string,
  status: UserStatus,
  city: string,
  country: string,
  institution: string,
  problemPoints: number,
  competitionPoints: number,
}
