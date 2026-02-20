import { ExcalidrawBaseDocument } from '../types';
import { EntityMembersResponseDTO } from './entity';
import { UserCompanyBasicInfoResponseDTO } from './user';

export interface ExcalidrawResponseDTO extends Omit<ExcalidrawBaseDocument, 'members'> {
  owner: UserCompanyBasicInfoResponseDTO,
  members: EntityMembersResponseDTO,
  updatedAt: number,
  createdAt: number,
}
