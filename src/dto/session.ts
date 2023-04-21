import { UserBasicResponseDTO } from './user';

export interface SessionBasicResponseDTO {
  id: string,
  deviceName: string,
  osName: string,
  validUntil: Date,
  createdAt: Date,
  updatedAt: Date,
}

export interface SessionResponseDTO extends SessionBasicResponseDTO {
  userId: string,
  user: UserBasicResponseDTO,
}
