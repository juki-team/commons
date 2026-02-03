import { UserCompanyBasicInfoResponseDTO } from './user';

export interface ExcalidrawResponseDTO {
  name: string,
  key: string,
  owner: UserCompanyBasicInfoResponseDTO,
  updatedAt: Date,
  createdAt: Date,
}
