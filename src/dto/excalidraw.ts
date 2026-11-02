import { ExcalidrawBaseDocument } from '../types';
import { EntityMembersDto, EntityMembersResponseDto } from './entity';
import { UserOrganizationBasicInfoResponseDto } from './user';

export interface ExcalidrawResponseDto extends Omit<ExcalidrawBaseDocument, 'members'> {
  owner: UserOrganizationBasicInfoResponseDto,
  members: EntityMembersResponseDto,
  updatedAt: number,
  createdAt: number,
}

export interface UpsertExcalidrawDto extends Omit<ExcalidrawBaseDocument, 'key' | 'members'> {
  members: EntityMembersDto,
}
