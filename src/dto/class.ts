import {
  AssignmentBasicInfo,
  AssignmentClass,
  AssignmentClassCycle,
  ClassBaseDocument,
  ClassState,
  UserBasicInfoInterface,
} from '../types';
import { DocumentMembersDTO, DocumentMembersResponseDTO } from './entity';

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

export interface AssignmentContestUpsert extends AssignmentBasicInfo {
  type: AssignmentClass.CONTEST,
  contestKey: string,
}

export interface AssignmentCourseUpsert extends AssignmentBasicInfo {
  type: AssignmentClass.COURSE,
  courseKey: string,
}

export interface AssignmentWorksheetUpsert extends AssignmentBasicInfo {
  type: AssignmentClass.WORKSHEET,
  worksheetKey: string,
}

export interface UpsertClassDTO extends Omit<ClassBaseDocument, 'members' | 'key' | 'cycles'> {
  cycles: {
    name: string,
    sessions: {
      name: string,
      assignments: (ClassDataResponseDTO | AssignmentCourseUpsert | AssignmentWorksheetUpsert)[],
      startTimestamp: number,
      endTimestamp: number,
    }[],
    startTimestamp: number,
    endTimestamp: number,
  }[],
  members: DocumentMembersDTO,
}
