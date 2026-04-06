import type { CompanyPlan, ResourceInstance, ResourceLogger, Theme } from '../types';
import type { EmailDataResponseDTO } from './system';
import type { UserCompanyBasicInfoResponseDTO, UserPermissions } from './user';

export interface CompanyJudgeResponseDTO {
  key: string;
  name: string;
  keyPrefix: string;
}

export interface CompanyTrustedCompanyResponseDTO {
  key: string;
  name: string;
}

export interface CompanyResponseDTO extends EmailDataResponseDTO {
  name: string;
  key: string;
  hosts: string[];
  imageUrl: string;
  managerUser: UserCompanyBasicInfoResponseDTO;
  systemAdminUser: UserCompanyBasicInfoResponseDTO;
  plan: CompanyPlan;
  startTimestamp: number;
  judges: CompanyJudgeResponseDTO[];
  trustedCompanies: CompanyTrustedCompanyResponseDTO[];
  styles: CompanyStyles;
}

export interface CompanyUserPermissionsResponseDTO extends CompanyResponseDTO {
  userPermissions: UserPermissions;
  contactEmail: string;
  contactCellPhoneNumber: string;
  contactTelegram: string;
}

export interface CompanyResourceSpecificationsResponseDTO {
  logger: ResourceLogger;
  runnerInstance: ResourceInstance;
  runnerListener: {
    taskDefinition: string;
    minimum: number;
    maximum: number;
  };
  highPerformanceRunner: {
    taskDefinition: string;
    minimum: number;
    maximum: number;
  };
  lowPerformanceRunner: {
    taskDefinition: string;
    minimum: number;
    maximum: number;
  };
}

export type CompanyStyles = Record<
  Theme,
  {
    body: {
      backgroundColor: string;
      backgroundColorHighlight: string;
      textColor: string;
      textColorHighlight: string;
      textColorHighlightInset: string;
      accentColor: string;
      accentColorInset: string;
    };
    navbar: {
      textColor: string;
      backgroundColor: string;
      logoTheme: Theme;
      accentColor: string;
    };
  }
>;
