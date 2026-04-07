import type { ExcalidrawBaseDocument } from '../types/index.js';
import type { EntityMembersDTO, EntityMembersResponseDTO } from './entity.js';
import type { UserCompanyBasicInfoResponseDTO } from './user.js';

export interface ExcalidrawResponseDTO extends Omit<ExcalidrawBaseDocument, 'members'> {
  owner: UserCompanyBasicInfoResponseDTO;
  members: EntityMembersResponseDTO;
  updatedAt: number;
  createdAt: number;
}

export interface UpsertExcalidrawDTO extends Omit<ExcalidrawBaseDocument, 'key' | 'members'> {
  members: EntityMembersDTO;
}
