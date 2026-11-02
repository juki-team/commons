import { MermaidBaseDocument } from '../types/index.js';
import { EntityMembersDto, EntityMembersResponseDto } from './entity.js';
import { UserOrganizationBasicInfoResponseDto } from './user.js';

export interface MermaidResponseDto extends Omit<MermaidBaseDocument, 'members'> {
  owner: UserOrganizationBasicInfoResponseDto,
  members: EntityMembersResponseDto,
  updatedAt: number,
  createdAt: number,
}

export interface UpsertMermaidDto extends Omit<MermaidBaseDocument, 'key' | 'members'> {
  members: EntityMembersDto,
}
