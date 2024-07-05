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

export interface UserBasicInfoResponseDTO {
  nickname: string,
  imageUrl: string,
  companyKey: string,
}

export interface UserSummaryResponseDTO extends UserBasicInfoResponseDTO {
  email: string,
  familyName: string,
  givenName: string,
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
  canCreateContest: boolean,
  canCreateUser: boolean,
  canHandleUsers: boolean,
  canViewSubmissionsManagement: boolean, // TODO: Check this permission
  problem: {
    create: boolean,
  },
  system: {
    handleCompany: boolean,
    handleServices: boolean,
    handleSettings: boolean,
  },
}

export type UserPingType = {
  permissions: UserPermissions,
  nickname: string,
  imageUrl: string,
  status: UserStatus,
  settings: UserSettingsType,
  isLogged: boolean,
  sessionId: string,
}

export type CompanyPingType = {
  key: string,
  contactEmail: string,
  contactCellPhoneNumber: string,
  contactTelegram: string,
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
