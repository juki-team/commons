import { CompanyPlan, ResourceInstanceType, ResourceLoggerType } from '../types';
import { EmailDataResponseDTO } from './system';
import { UserCompanyBasicInfoResponseDTO, UserPermissions } from './user';

export interface CompanyJudgeResponseDTO {
  key: string,
  name: string,
  keyPrefix: string,
}

export interface CompanyResponseDTO extends EmailDataResponseDTO {
  name: string,
  key: string
  hosts: string[],
  imageUrl: string,
  managerUser: UserCompanyBasicInfoResponseDTO,
  systemAdminUser: UserCompanyBasicInfoResponseDTO,
  plan: CompanyPlan,
  startTimestamp: number,
  judges: CompanyJudgeResponseDTO[],
}

export interface CompanyUserPermissionsResponseDTO extends CompanyResponseDTO {
  userPermissions: UserPermissions,
  contactEmail: string,
  contactCellPhoneNumber: string,
  contactTelegram: string,
}

export interface CompanyResourceSpecificationsResponseDTO {
  logger: ResourceLoggerType,
  runnerInstance: ResourceInstanceType,
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
