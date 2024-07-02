import { CompanyPlan } from '../types';
import { EmailDataResponseDTO } from './system';
import { UserBasicInfoResponseDTO, UserPermissions } from './user';

export interface CompanyResponseDTO extends EmailDataResponseDTO {
  name: string,
  key: string
  hosts: string[],
  imageUrl: string,
  manager: UserBasicInfoResponseDTO,
  systemAdmin: UserBasicInfoResponseDTO,
  plan: CompanyPlan,
}

export interface CompanyUserPermissionsResponseDTO extends EmailDataResponseDTO {
  name: string,
  key: string
  hosts: string[],
  imageUrl: string,
  manager: UserBasicInfoResponseDTO,
  systemAdmin: UserBasicInfoResponseDTO,
  plan: CompanyPlan,
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
