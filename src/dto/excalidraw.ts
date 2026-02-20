import { ExcalidrawBaseDocument, MermaidBaseDocument } from '../types';
import { EntityMembersDTO, EntityMembersResponseDTO } from './entity';
import { UserCompanyBasicInfoResponseDTO } from './user';

export interface ExcalidrawResponseDTO extends Omit<ExcalidrawBaseDocument, 'members'> {
  owner: UserCompanyBasicInfoResponseDTO,
  members: EntityMembersResponseDTO,
  updatedAt: number,
  createdAt: number,
}

export interface UpsertExcalidrawDTO extends Omit<MermaidBaseDocument, 'key' | 'members'> {
  members: EntityMembersDTO,
}
