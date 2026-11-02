import {
  ContestRole,
  CourseRole,
  FileRole,
  ProblemRole,
  RecordId,
  SystemRole,
  TeamRole,
  UserBasicInfo,
  UserHandles,
  UserRole,
  UserSettings,
  UserStatus,
} from '../types';
import { OrganizationStyles } from './organization';
import { EntityOrganizationSummaryListResponseDto, EntityOrganizationSystemSummaryListResponseDto } from './problem';

export interface EntityOwnerSystemSummaryListResponseDto {
  id: string,
  nickname: string,
  imageUrl: string,
  organization: EntityOrganizationSummaryListResponseDto,
}

export interface UserOrganizationBasicInfoResponseDto extends UserBasicInfo {
  organization: EntityOrganizationSummaryListResponseDto,
}

export interface UserSummaryListResponseDto extends UserOrganizationBasicInfoResponseDto {
  email: string,
  familyName: string,
  givenName: string,
}

export interface UserSystemSummaryListResponseDto extends UserSummaryListResponseDto {
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
  owner: EntityOwnerSystemSummaryListResponseDto,
  organization: EntityOrganizationSystemSummaryListResponseDto,
  createdAt: number,
  updatedAt: number,
}

export interface UserBasicResponseDto extends UserSummaryListResponseDto {
  aboutMe: string,
  city: string,
  country: string,
  institution: string,
  handles: UserHandles,
}

export interface UserProfileResponseDto extends UserBasicResponseDto {
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
  organization: {
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
  sessionId: RecordId,
  organization: EntityOrganizationSummaryListResponseDto,
}

export type OrganizationPing = {
  key: string,
  contactEmail: string,
  contactCellPhoneNumber: string,
  contactTelegram: string,
  imageUrl: string,
  name: string,
  codeEditorRunEnabled: boolean,
  styles: OrganizationStyles,
}

export interface PingResponseDto {
  user: UserPing,
  organization: OrganizationPing,
}

export interface UserRankResponseDto {
  imageUrl: string,
  nickname: string,
  status: UserStatus,
  city: string,
  country: string,
  institution: string,
  problemPoints: number,
  competitionPoints: number,
  organization: EntityOrganizationSummaryListResponseDto,
}
