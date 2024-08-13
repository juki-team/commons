import { EntityCompanySystemSummaryListResponseDTO } from './problem';
import { UserBasicResponseDTO } from './user';

export interface SessionBasicResponseDTO {
  id: string,
  deviceName: string,
  osName: string,
  validUntilTimestamp: number,
  creationTimestamp: number,
  updateTimestamp: number,
}

export interface UserSessionSystemSummaryListResponseDTO extends SessionBasicResponseDTO {
  userId: string,
  user: UserBasicResponseDTO,
  company: EntityCompanySystemSummaryListResponseDTO,
}
