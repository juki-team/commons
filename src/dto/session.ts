import { EntityOrganizationSystemSummaryListResponseDto } from './problem.js';
import { UserBasicResponseDto } from './user.js';

export interface SessionBasicResponseDto {
  id: string,
  deviceName: string,
  osName: string,
  expiresAt: number,
  createdAt: number,
  updatedAt: number,
}

export interface UserSessionSystemSummaryListResponseDto extends SessionBasicResponseDto {
  userId: string,
  user: UserBasicResponseDto,
  organization: EntityOrganizationSystemSummaryListResponseDto,
}
