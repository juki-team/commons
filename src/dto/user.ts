import {
  ContestRole,
  CourseRole,
  FileRole,
  ProblemRole,
  SystemRole,
  TeamRole,
  UserHandlesType,
  UserRole,
  UserSettingsType,
  UserStatus,
} from '../types';

export interface UserSummaryResponseDTO {
  id: string,
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
  fileRole: FileRole,
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

export interface UserProfileResponseDTO extends UserBasicResponseDTO {
  canEditProfileData: boolean,
  canEditSettingsData: boolean,
  canEditPermissionsData: boolean,
  canUpdatePassword: boolean,
  canResetPassword: boolean,
}

export type UserPermissions = {
  canCreateProblem: boolean,
  canCreateContest: boolean,
  canCreateUser: boolean,
  canCreateTeam: boolean,
  canSendEmail: boolean,
  
  canHandleUsers: boolean,
  canHandleServices: boolean,
  canHandleJudges: boolean,
  canManageJudges: boolean,
  canHandleSettings: boolean,
  canManageSettings: boolean,
  canViewSubmissionsManagement: boolean, // TODO: Check this permission
}

export type UserPingType = UserPermissions & {
  nickname: string,
  imageUrl: string,
  status: UserStatus,
  settings: UserSettingsType,
  isLogged: boolean,
  sessionId: string,
}

export type CompanyPingType = {
  key: string,
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
