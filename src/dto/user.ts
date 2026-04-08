import type { ContestRole, CourseRole, FileRole, ProblemRole, SystemRole, TeamRole, UserRole } from '../prisma/enums/index.js';
import type { RecordId, UserBasicInfo, UserHandles, UserSettings } from '../types/index.js';
import type { CompanyStylesResponseDTO } from './company.js';
import type { EntityCompanySummaryListResponseDTO, EntityCompanySystemSummaryListResponseDTO } from './problem.js';

export interface EntityOwnerSystemSummaryListResponseDTO {
  id: string;
  nickname: string;
  imageUrl: string;
  company: EntityCompanySummaryListResponseDTO;
}

export interface UserCompanyBasicInfoResponseDTO extends UserBasicInfo {
  company: EntityCompanySummaryListResponseDTO;
}

export interface UserSummaryListResponseDTO extends UserCompanyBasicInfoResponseDTO {
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
  company: EntityCompanySystemSummaryListResponseDTO;
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
  company: {
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
  company: EntityCompanySummaryListResponseDTO;
};

export type CompanyPingResponseDTO = {
  key: string;
  contactEmail: string;
  contactCellPhoneNumber: string;
  contactTelegram: string;
  imageUrl: string;
  name: string;
  codeEditorRunEnabled: boolean;
  styles: CompanyStylesResponseDTO;
};

export interface PingResponseDTO {
  user: UserPing;
  company: CompanyPingResponseDTO;
}

export interface UserRankResponseDTO {
  imageUrl: string;
  nickname: string;
  city: string;
  country: string;
  institution: string;
  problemPoints: number;
  competitionPoints: number;
  company: EntityCompanySummaryListResponseDTO;
}
