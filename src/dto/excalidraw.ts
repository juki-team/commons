import type { ExcalidrawBaseDocument } from '../types/index.js';
import type { EntityMembersDTO, EntityMembersResponseDTO } from './entity.js';
import type { UserOrganizationBasicInfoResponseDTO } from './user.js';

export interface ExcalidrawResponseDTO extends Omit<ExcalidrawBaseDocument, 'members'> {
  owner: UserOrganizationBasicInfoResponseDTO;
  members: EntityMembersResponseDTO;
  updatedAt: number;
  createdAt: number;
}

export interface UpsertExcalidrawDTO extends Omit<ExcalidrawBaseDocument, 'key' | 'members'> {
  members: EntityMembersDTO;
}
