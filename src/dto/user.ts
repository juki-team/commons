import type { ContestRole, CourseRole, FileRole, ProblemRole, SystemRole, TeamRole, UserRole } from '../enums/index.js';
import type { RecordId, UserBasicInfo, UserHandles, UserSettings } from '../types/index.js';
import type { OrganizationStylesResponseDTO } from './organization.js';
import type { EntityOrganizationSummaryListResponseDTO, EntityOrganizationSystemSummaryListResponseDTO } from './problem.js';

export interface EntityOwnerSystemSummaryListResponseDTO {
  id: string;
  nickname: string;
  imageUrl: string;
  organization: EntityOrganizationSummaryListResponseDTO;
}

export interface UserOrganizationBasicInfoResponseDTO extends UserBasicInfo {
  organization: EntityOrganizationSummaryListResponseDTO;
}

export interface UserSummaryListResponseDTO extends UserOrganizationBasicInfoResponseDTO {
  email: string;
  familyName: string;
  givenName: string;
}

export interface UserSystemSummaryListResponseDTO extends UserSummaryListResponseDTO {
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
  owner: EntityOwnerSystemSummaryListResponseDTO;
  organization: EntityOrganizationSystemSummaryListResponseDTO;
  createdAt: number;
  updatedAt: number;
  archivedAt: number | null;
}

export interface UserBasicResponseDTO extends UserSummaryListResponseDTO {
  aboutMe: string;
  city: string;
  country: string;
  institution: string;
  handles: UserHandles;
}

export interface UserProfileResponseDTO extends UserBasicResponseDTO {
  canEditProfileData: boolean;
  canEditSettingsData: boolean;
  canEditPermissionsData: boolean;
  canUpdatePassword: boolean;
  canResetPassword: boolean;
}

export type UserPermissionsResponseDTO = {
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
  permissions: UserPermissionsResponseDTO;
  nickname: string;
  imageUrl: string;
  settings: UserSettings;
  isLogged: boolean;
  sessionId: RecordId;
  organization: EntityOrganizationSummaryListResponseDTO;
};

export type OrganizationPingResponseDTO = {
  key: string;
  contactEmail: string;
  contactCellPhoneNumber: string;
  contactTelegram: string;
  imageUrl: string;
  name: string;
  codeEditorRunEnabled: boolean;
  styles: OrganizationStylesResponseDTO;
};

export interface PingResponseDTO {
  user: UserPing;
  organization: OrganizationPingResponseDTO;
}

export interface UserRankResponseDTO {
  imageUrl: string;
  nickname: string;
  city: string;
  country: string;
  institution: string;
  problemPoints: number;
  competitionPoints: number;
  organization: EntityOrganizationSummaryListResponseDTO;
}
