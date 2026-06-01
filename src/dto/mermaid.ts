import type { MermaidBaseDocument } from '../types/index.js';
import type { EntityMembersDto, EntityMembersResponseDto } from './entity.js';
import type { UserOrganizationBasicInfoResponseDto } from './user.js';

export interface MermaidResponseDto extends Omit<MermaidBaseDocument, 'members'> {
  owner: UserOrganizationBasicInfoResponseDto;
  members: EntityMembersResponseDto;
  updatedAt: number;
  createdAt: number;
}

export interface UpsertMermaidDto extends Omit<MermaidBaseDocument, 'key' | 'members'> {
  members: EntityMembersDto;
}
