import { MermaidBaseDocument } from '../types';
import { EntityMembersDTO, EntityMembersResponseDTO } from './entity';
import { UserCompanyBasicInfoResponseDTO } from './user';

export interface MermaidResponseDTO extends Omit<MermaidBaseDocument, 'members'> {
  owner: UserCompanyBasicInfoResponseDTO,
  members: EntityMembersResponseDTO,
  updatedAt: number,
  createdAt: number,
}

export interface UpsertMermaidDTO extends Omit<MermaidBaseDocument, 'key' | 'members'> {
  members: EntityMembersDTO,
}
