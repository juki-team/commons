import { EntityMembersResponseDTO } from './entity';
import { UserCompanyBasicInfoResponseDTO } from './user';

export interface ExcalidrawResponseDTO {
  name: string,
  key: string,
  owner: UserCompanyBasicInfoResponseDTO,
  members: EntityMembersResponseDTO,
  updatedAt: number,
  createdAt: number,
}
