import { EmailDataResponseDTO } from './system';

export interface CompanyResponseDTO extends EmailDataResponseDTO {
  name: string,
  key: string
  hosts: string[],
  imageUrl: string,
  managerUserId: string,
  managerUserNickname: string,
}

export interface CompanyResourceSpecificationsResponseDTO {
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
