import { MarkdownBaseDocument } from '../types/index.js';
import { EntityMembersDto, EntityMembersResponseDto } from './entity.js';
import { UserOrganizationBasicInfoResponseDto } from './user.js';

export interface MarkdownResponseDto extends Omit<MarkdownBaseDocument, 'members'> {
  owner: UserOrganizationBasicInfoResponseDto;
  members: EntityMembersResponseDto;
  updatedAt: number;
  createdAt: number;
}

export interface UpsertMarkdownDto extends Omit<MarkdownBaseDocument, 'key' | 'members'> {
  members: EntityMembersDto;
}
