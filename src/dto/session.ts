import type { EntityOrganizationSystemSummaryListResponseDTO } from './problem.js';
import type { UserBasicResponseDTO } from './user.js';

export interface SessionBasicResponseDTO {
  id: string;
  deviceName: string;
  osName: string;
  expiresAt: number;
  createdAt: number;
  updatedAt: number;
}

export interface UserSessionSystemSummaryListResponseDTO extends SessionBasicResponseDTO {
  userId: string;
  user: UserBasicResponseDTO;
  organization: EntityOrganizationSystemSummaryListResponseDTO;
}
