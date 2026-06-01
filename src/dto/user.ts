import type { ContestRole, CourseRole, FileRole, ProblemRole, SystemRole, TeamRole, UserRole } from '../enums/index.js';
import type { RecordId, UserBasicInfo, UserHandles, UserSettings } from '../types/index.js';
import type {
  EntityOrganizationSummaryListResponseDto,
  EntityOrganizationSystemSummaryListResponseDto,
  EntityOwnerSystemSummaryListResponseDto,
} from './entity.js';
import type { OrganizationStylesResponseDto } from './organization.js';

export interface UserOrganizationBasicInfoResponseDto extends UserBasicInfo {
  organization: EntityOrganizationSummaryListResponseDto;
}

export interface UserSummaryListResponseDto extends UserOrganizationBasicInfoResponseDto {
  email: string;
  familyName: string;
  givenName: string;
}

export interface UserSystemSummaryListResponseDto extends UserSummaryListResponseDto {
  id: string;
  city: string;
  country: string;
  institution: string;
  systemRole: SystemRole;
  userRole: UserRole;
  contestRole: ContestRole;
  problemRole: ProblemRole;
  fileRole: FileRole;
  teamRole: TeamRole;
  courseRole: CourseRole;
  canResetPassword: boolean;
  owner: EntityOwnerSystemSummaryListResponseDto;
  organization: EntityOrganizationSystemSummaryListResponseDto;
  createdAt: number;
  updatedAt: number;
  archivedAt: number | null;
}

export interface UserBasicResponseDto extends UserSummaryListResponseDto {
  aboutMe: string;
  city: string;
  country: string;
  institution: string;
  handles: UserHandles;
}

export interface UserProfileResponseDto extends UserBasicResponseDto {
  canEditProfileData: boolean;
  canEditSettingsData: boolean;
  canEditPermissionsData: boolean;
  canUpdatePassword: boolean;
  canResetPassword: boolean;
}

export type UserPermissionsResponseDto = {
  users: {
    create: boolean;
    manage: boolean;
    administrate: boolean;
  };
  problems: {
    create: boolean;
    manage: boolean;
  };
  submissions: {
    manage: boolean;
  };
  contests: {
    create: boolean;
    manage: boolean;
  };
  organization: {
    manage: boolean;
    administrate: boolean;
  };
  services: {
    administrate: boolean;
  };
};

export type UserPing = {
  permissions: UserPermissionsResponseDto;
  nickname: string;
  imageUrl: string;
  settings: UserSettings;
  isLogged: boolean;
  sessionId: RecordId;
  organization: EntityOrganizationSummaryListResponseDto;
};

export type OrganizationPingResponseDto = {
  key: string;
  contactEmail: string;
  contactCellPhoneNumber: string;
  contactTelegram: string;
  imageUrl: string;
  name: string;
  codeEditorRunEnabled: boolean;
  styles: OrganizationStylesResponseDto;
};

export interface PingResponseDto {
  user: UserPing;
  organization: OrganizationPingResponseDto;
}

export interface UserRankResponseDto {
  imageUrl: string;
  nickname: string;
  city: string;
  country: string;
  institution: string;
  problemPoints: number;
  competitionPoints: number;
  organization: EntityOrganizationSummaryListResponseDto;
}
