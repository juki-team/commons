import type { MermaidBaseDocument } from '../types';
import type { EntityMembersDTO, EntityMembersResponseDTO } from './entity';
import type { UserCompanyBasicInfoResponseDTO } from './user';

export interface MermaidResponseDTO extends Omit<MermaidBaseDocument, 'members'> {
  owner: UserCompanyBasicInfoResponseDTO;
  members: EntityMembersResponseDTO;
  updatedAt: number;
  createdAt: number;
}

export interface UpsertMermaidDTO extends Omit<MermaidBaseDocument, 'key' | 'members'> {
  members: EntityMembersDTO;
}
