import type { OrganizationPlan, Theme } from '../enums/index.js';
import type { EmailDataResponseDTO } from './system.js';
import type { UserOrganizationBasicInfoResponseDTO, UserPermissionsResponseDTO } from './user.js';

export interface OrganizationJudgeResponseDTO {
  key: string;
  name: string;
  keyPrefix: string;
}

export interface OrganizationTrustedCompanyResponseDTO {
  key: string;
  name: string;
}

export interface OrganizationResponseDTO extends EmailDataResponseDTO {
  name: string;
  key: string;
  hosts: string[];
  imageUrl: string;
  managerUser: UserOrganizationBasicInfoResponseDTO;
  systemAdminUser: UserOrganizationBasicInfoResponseDTO;
  plan: OrganizationPlan;
  startTimestamp: number;
  judges: OrganizationJudgeResponseDTO[];
  trustedCompanies: OrganizationTrustedCompanyResponseDTO[];
  styles: OrganizationStylesResponseDTO;
}

export interface OrganizationUserPermissionsResponseDTO extends OrganizationResponseDTO {
  userPermissions: UserPermissionsResponseDTO;
  contactEmail: string;
  contactCellPhoneNumber: string;
  contactTelegram: string;
}

export interface OrganizationResourcesEcsSpec {
  taskDefinition: string;
  minimum: number;
  maximum: number;
}

export interface OrganizationResourcesEc2Instance {
  imageId: string;
  instanceType: string;
  userDataScript: string;
  minimum: number;
  maximum: number;
}

export interface OrganizationResourcesTelegramChannel {
  chatId: string;
  messageThreadId: string;
}

export interface OrganizationResourcesResponseDTO {
  ecs: {
    listener: OrganizationResourcesEcsSpec;
    highPerformanceRunner: OrganizationResourcesEcsSpec;
    lowPerformanceRunner: OrganizationResourcesEcsSpec;
  };
  ec2: {
    runner: OrganizationResourcesEc2Instance;
    highPerformanceRunner: OrganizationResourcesEc2Instance;
    lowPerformanceRunner: OrganizationResourcesEc2Instance;
  };
  notifications: {
    telegram: {
      enabled: boolean;
      info: OrganizationResourcesTelegramChannel;
      error: OrganizationResourcesTelegramChannel;
    };
    slack: {
      enabled: boolean;
      info: { webhookUrl: string };
      error: { webhookUrl: string };
    };
    email: {
      enabled: boolean;
      info: { address: string };
      error: { address: string };
    };
  };
}

export type OrganizationStylesResponseDTO = Record<
  'light' | 'dark',
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
