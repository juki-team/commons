import { AssignmentClassCycle, ClassState, UserBasicInfoInterface } from '../types';
import { DocumentMembersResponseDTO } from './entity';

export interface ClassUserResponseDTO {
  isOwner: boolean,
  isManager: boolean,
  isSpectator: boolean,
  isParticipant: boolean,
  isGuest: boolean,
}

export interface ClassSummaryListResponseDTO {
  key: string,
  name: string,
  state: ClassState,
  owner: UserBasicInfoInterface,
  user: ClassUserResponseDTO,
}

interface SessionCycleClassDataResponseDTO {
  name: string,
  assignments: AssignmentClassCycle[],
  startTimestamp: number,
  endTimestamp: number,
}

interface CycleClassDataResponseDTO {
  name: string,
  sessions: SessionCycleClassDataResponseDTO[],
  startTimestamp: number,
  endTimestamp: number,
}

export interface ClassDataResponseDTO extends ClassSummaryListResponseDTO {
  members: DocumentMembersResponseDTO,
  cycles: CycleClassDataResponseDTO[],
}
