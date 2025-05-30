import {
  ContestRole,
  CourseRole,
  FileRole,
  ObjectIdType,
  ProblemRole,
  SystemRole,
  TeamRole,
  UserBasicInfoInterface,
  UserHandlesType,
  UserRole,
  UserSettingsType,
  UserStatus,
} from '../types';
import { EntityCompanySummaryListResponseDTO, EntityCompanySystemSummaryListResponseDTO } from './problem';

export interface EntityOwnerSystemSummaryListResponseDTO {
  id: string,
  nickname: string,
  imageUrl: string,
  company: EntityCompanySummaryListResponseDTO,
}

export interface UserCompanyBasicInfoResponseDTO extends UserBasicInfoInterface {
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

export type UserPingType = {
  permissions: UserPermissions,
  nickname: string,
  imageUrl: string,
  settings: UserSettingsType,
  isLogged: boolean,
  sessionId: ObjectIdType,
}

export type CompanyPingType = {
  key: string,
  contactEmail: string,
  contactCellPhoneNumber: string,
  contactTelegram: string,
  imageUrl: string,
  name: string,
  codeEditorRunEnabled: boolean,
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
