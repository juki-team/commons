import { MermaidBaseDocument } from '../types';
import { EntityMembersDto, EntityMembersResponseDto } from './entity';
import { UserOrganizationBasicInfoResponseDto } from './user';

export interface MermaidResponseDto extends Omit<MermaidBaseDocument, 'members'> {
  owner: UserOrganizationBasicInfoResponseDto,
  members: EntityMembersResponseDto,
  updatedAt: number,
  createdAt: number,
}

export interface UpsertMermaidDto extends Omit<MermaidBaseDocument, 'key' | 'members'> {
  members: EntityMembersDto,
}
