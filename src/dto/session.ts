import { UserBasicResponseDTO } from './user';

export interface SessionBasicResponseDTO {
  deviceName: string,
  osName: string,
  validUntil: Date,
  createdAt: Date,
  updatedAt: Date,
}

export interface SessionResponseDTO extends SessionBasicResponseDTO {
  id: string,
  userId: string,
  user: UserBasicResponseDTO,
}
