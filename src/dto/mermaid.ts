import type { MermaidBaseDocument } from '../types/index.js';
import type { EntityMembersDTO, EntityMembersResponseDTO } from './entity.js';
import type { UserOrganizationBasicInfoResponseDTO } from './user.js';

export interface MermaidResponseDTO extends Omit<MermaidBaseDocument, 'members'> {
  owner: UserOrganizationBasicInfoResponseDTO;
  members: EntityMembersResponseDTO;
  updatedAt: number;
  createdAt: number;
}

export interface UpsertMermaidDTO extends Omit<MermaidBaseDocument, 'key' | 'members'> {
  members: EntityMembersDTO;
}
