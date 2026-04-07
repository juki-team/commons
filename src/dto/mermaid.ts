import type { MermaidBaseDocument } from '../types/index.js';
import type { EntityMembersDTO, EntityMembersResponseDTO } from './entity.js';
import type { UserCompanyBasicInfoResponseDTO } from './user.js';

export interface MermaidResponseDTO extends Omit<MermaidBaseDocument, 'members'> {
  owner: UserCompanyBasicInfoResponseDTO;
  members: EntityMembersResponseDTO;
  updatedAt: number;
  createdAt: number;
}

export interface UpsertMermaidDTO extends Omit<MermaidBaseDocument, 'key' | 'members'> {
  members: EntityMembersDTO;
}
