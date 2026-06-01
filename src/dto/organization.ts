import type { OrganizationPlan, Theme } from '../enums/index.js';
import type { UserOrganizationBasicInfoResponseDto, UserPermissionsResponseDto } from './user.js';

export interface EmailDataResponseDto {
  emailTemplate: string;
  contactEmails: string[];
  mainEmail: string;
}

export interface OrganizationJudgeResponseDto {
  key: string;
  name: string;
  keyPrefix: string;
}

export interface OrganizationTrustedOrganizationResponseDto {
  key: string;
  name: string;
}

export interface OrganizationResponseDto extends EmailDataResponseDto {
  name: string;
  key: string;
  hosts: string[];
  imageUrl: string;
  managerUser: UserOrganizationBasicInfoResponseDto;
  systemAdminUser: UserOrganizationBasicInfoResponseDto;
  plan: OrganizationPlan;
  startsAt: number;
  judges: OrganizationJudgeResponseDto[];
  trustedOrganizations: OrganizationTrustedOrganizationResponseDto[];
  styles: OrganizationStylesResponseDto;
}

export interface OrganizationUserPermissionsResponseDto extends OrganizationResponseDto {
  userPermissions: UserPermissionsResponseDto;
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

export interface OrganizationResourcesResponseDto {
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

export type OrganizationStylesResponseDto = Record<
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
