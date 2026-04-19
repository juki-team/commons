import type { MarkdownBaseDocument } from '../types/index.js';
import type { EntityMembersDTO, EntityMembersResponseDTO } from './entity.js';
import type { UserOrganizationBasicInfoResponseDTO } from './user.js';

export interface MarkdownResponseDTO extends Omit<MarkdownBaseDocument, 'members'> {
  owner: UserOrganizationBasicInfoResponseDTO;
  members: EntityMembersResponseDTO;
  updatedAt: number;
  createdAt: number;
}

export interface UpsertMarkdownDTO extends Omit<MarkdownBaseDocument, 'key' | 'members'> {
  members: EntityMembersDTO;
}
