import {
  ContestRole,
  CourseRole,
  FileRole,
  ObjectId,
  ProblemRole,
  SystemRole,
  TeamRole,
  UserBasicInfo,
  UserHandles,
  UserRole,
  UserSettings,
  UserStatus,
} from '../types';
import { CompanyStyles } from './company';
import { EntityCompanySummaryListResponseDTO, EntityCompanySystemSummaryListResponseDTO } from './problem';

export interface EntityOwnerSystemSummaryListResponseDTO {
  id: string,
  nickname: string,
  imageUrl: string,
  company: EntityCompanySummaryListResponseDTO,
}

export interface UserCompanyBasicInfoResponseDTO extends UserBasicInfo {
  company: EntityCompanySummaryListResponseDTO,
}

export interface UserSummaryListResponseDTO extends UserCompanyBasicInfoResponseDTO {
  email: string,
  familyName: string,
  givenName: string,
}

export interface UserSystemSummaryListResponseDTO extends UserSummaryListResponseDTO {
  id: string,
  status: UserStatus,
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
  owner: EntityOwnerSystemSummaryListResponseDTO,
  company: EntityCompanySystemSummaryListResponseDTO,
  creationTimestamp: number,
  updateTimestamp: number,
}

export interface UserBasicResponseDTO extends UserSummaryListResponseDTO {
  aboutMe: string,
  city: string,
  country: string,
  institution: string,
  handles: UserHandles,
}

export interface UserProfileResponseDTO extends UserBasicResponseDTO {
  canEditProfileData: boolean,
  canEditSettingsData: boolean,
  canEditPermissionsData: boolean,
  canUpdatePassword: boolean,
  canResetPassword: boolean,
}

export type UserPermissions = {
  users: {
    create: boolean,
    manage: boolean,
    administrate: boolean,
  },
  problems: {
    create: boolean,
    manage: boolean,
  },
  submissions: {
    manage: boolean,
  },
  contests: {
    create: boolean,
    manage: boolean,
  },
  company: {
    manage: boolean,
    administrate: boolean,
  },
  services: {
    administrate: boolean,
  }
}

export type UserPing = {
  permissions: UserPermissions,
  nickname: string,
  imageUrl: string,
  settings: UserSettings,
  isLogged: boolean,
  sessionId: ObjectId,
  company: EntityCompanySummaryListResponseDTO,
}

export type CompanyPing = {
  key: string,
  contactEmail: string,
  contactCellPhoneNumber: string,
  contactTelegram: string,
  imageUrl: string,
  name: string,
  codeEditorRunEnabled: boolean,
  styles: CompanyStyles,
}

export interface PingResponseDTO {
  user: UserPing,
  company: CompanyPing,
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
  company: EntityCompanySummaryListResponseDTO,
}
