import type { MarkdownBaseDocument } from '../types/index.js';
import type { EntityMembersDto, EntityMembersResponseDto } from './entity.js';
import type { UserOrganizationBasicInfoResponseDto } from './user.js';

export interface MarkdownResponseDto extends Omit<MarkdownBaseDocument, 'members'> {
  owner: UserOrganizationBasicInfoResponseDto;
  members: EntityMembersResponseDto;
  updatedAt: number;
  createdAt: number;
}

export interface UpsertMarkdownDto extends Omit<MarkdownBaseDocument, 'key' | 'members'> {
  members: EntityMembersDto;
}
