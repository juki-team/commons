import { EntityMembersResponseDTO } from './entity';
import { UserCompanyBasicInfoResponseDTO } from './user';

export interface MermaidResponseDTO {
  name: string,
  key: string,
  owner: UserCompanyBasicInfoResponseDTO,
  members: EntityMembersResponseDTO,
  updatedAt: number,
  createdAt: number,
}
