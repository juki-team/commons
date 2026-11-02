import { OrganizationPlan, ResourceInstance, ResourceLogger, Theme } from '../types';
import { EmailDataResponseDto } from './system';
import { UserOrganizationBasicInfoResponseDto, UserPermissions } from './user';

export interface OrganizationJudgeResponseDto {
  key: string,
  name: string,
  keyPrefix: string,
}

export interface OrganizationTrustedOrganizationResponseDto {
  key: string,
  name: string,
}

export interface OrganizationResponseDto extends EmailDataResponseDto {
  name: string,
  key: string
  hosts: string[],
  imageUrl: string,
  managerUser: UserOrganizationBasicInfoResponseDto,
  systemAdminUser: UserOrganizationBasicInfoResponseDto,
  plan: OrganizationPlan,
  startsAt: number,
  judges: OrganizationJudgeResponseDto[],
  trustedOrganizations: OrganizationTrustedOrganizationResponseDto[],
  styles: OrganizationStyles,
}

export interface OrganizationUserPermissionsResponseDto extends OrganizationResponseDto {
  userPermissions: UserPermissions,
  contactEmail: string,
  contactCellPhoneNumber: string,
  contactTelegram: string,
}

export interface OrganizationResourceSpecificationsResponseDto {
  logger: ResourceLogger,
  runnerInstance: ResourceInstance,
  runnerListener: {
    taskDefinition: string,
    minimum: number,
    maximum: number,
  },
  highPerformanceRunner: {
    taskDefinition: string,
    minimum: number,
    maximum: number,
  },
  lowPerformanceRunner: {
    taskDefinition: string,
    minimum: number,
    maximum: number,
  },
}

export type  OrganizationStyles = Record<Theme, {
  body: {
    backgroundColor: string,
    backgroundColorHighlight: string,
    textColor: string,
    textColorHighlight: string,
    textColorHighlightInset: string,
    accentColor: string,
    accentColorInset: string,
  },
  navbar: {
    textColor: string,
    backgroundColor: string,
    logoTheme: Theme,
    accentColor: string,
  },
}>;
