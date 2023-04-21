import { UserBasicResponseDTO } from './user';

export interface SessionBasicResponseDTO {
  deviceName: string,
  validUntil: Date,
  createdAt: Date,
  updatedAt: Date,
}

export interface SessionResponseDTO extends SessionBasicResponseDTO {
  id: string,
  userId: string,
  user: UserBasicResponseDTO,
}
