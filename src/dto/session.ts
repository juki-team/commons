import type { EntityCompanySystemSummaryListResponseDTO } from './problem.js';
import type { UserBasicResponseDTO } from './user.js';

export interface SessionBasicResponseDTO {
  id: string;
  deviceName: string;
  osName: string;
  validUntilTimestamp: number;
  creationTimestamp: number;
  updateTimestamp: number;
}

export interface UserSessionSystemSummaryListResponseDTO extends SessionBasicResponseDTO {
  userId: string;
  user: UserBasicResponseDTO;
  company: EntityCompanySystemSummaryListResponseDTO;
}
