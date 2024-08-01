import { EntityCompanySummaryListResponseDTO } from './problem';
import { UserBasicResponseDTO } from './user';

export interface SessionBasicResponseDTO {
  id: string,
  deviceName: string,
  osName: string,
  validUntil: Date,
  createdAt: Date,
  updatedAt: Date,
}

export interface UserSessionResponseDTO extends SessionBasicResponseDTO {
  userId: string,
  user: UserBasicResponseDTO,
  company: EntityCompanySummaryListResponseDTO,
}
