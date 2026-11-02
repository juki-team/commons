import { MarkdownBaseDocument } from '../types';
import { EntityMembersDto, EntityMembersResponseDto } from './entity';
import { UserOrganizationBasicInfoResponseDto } from './user';

export interface MarkdownResponseDto extends Omit<MarkdownBaseDocument, 'members'> {
  owner: UserOrganizationBasicInfoResponseDto;
  members: EntityMembersResponseDto;
  updatedAt: number;
  createdAt: number;
}

export interface UpsertMarkdownDto extends Omit<MarkdownBaseDocument, 'key' | 'members'> {
  members: EntityMembersDto;
}
