import type { MarkdownBaseDocument } from '../types';
import type { EntityMembersDTO, EntityMembersResponseDTO } from './entity';
import type { UserCompanyBasicInfoResponseDTO } from './user';

export interface MarkdownResponseDTO extends Omit<MarkdownBaseDocument, 'members'> {
  owner: UserCompanyBasicInfoResponseDTO;
  members: EntityMembersResponseDTO;
  updatedAt: number;
  createdAt: number;
}

export interface UpsertMarkdownDTO extends Omit<MarkdownBaseDocument, 'key' | 'members'> {
  members: EntityMembersDTO;
}
