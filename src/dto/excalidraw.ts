import type { ExcalidrawBaseDocument } from '../types/index.js';
import type { EntityMembersDto, EntityMembersResponseDto } from './entity.js';
import type { UserOrganizationBasicInfoResponseDto } from './user.js';

export interface ExcalidrawResponseDto extends Omit<ExcalidrawBaseDocument, 'members'> {
  owner: UserOrganizationBasicInfoResponseDto;
  members: EntityMembersResponseDto;
  updatedAt: number;
  createdAt: number;
}

export interface UpsertExcalidrawDto extends Omit<ExcalidrawBaseDocument, 'key' | 'members'> {
  members: EntityMembersDto;
}
