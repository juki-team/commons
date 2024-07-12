import { CompanyPlan } from '../types';
import { EmailDataResponseDTO } from './system';
import { UserBasicInfoResponseDTO, UserPermissions } from './user';

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
  manager: UserBasicInfoResponseDTO,
  systemAdmin: UserBasicInfoResponseDTO,
  plan: CompanyPlan,
  judges: CompanyJudgeResponseDTO[],
}

export interface CompanyUserPermissionsResponseDTO extends CompanyResponseDTO {
  userPermissions: UserPermissions,
  contactEmail: string,
  contactCellPhoneNumber: string,
  contactTelegram: string,
}

export interface CompanyResourceSpecificationsResponseDTO {
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
