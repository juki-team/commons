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
  description: string,
  state: ClassState,
  owner: UserBasicInfoInterface,
  user: ClassUserResponseDTO,
}

interface SessionCycleClassDataResponseDTO {
  id: string,
  index: number,
  name: string,
  assignments: {
    [key: string]: AssignmentClassCycle,
  },
  startTimestamp: number,
  endTimestamp: number,
}

interface CycleClassDataResponseDTO {
  id: string,
  index: number,
  name: string,
  sessions: {
    [key: string]: SessionCycleClassDataResponseDTO,
  },
  startTimestamp: number,
  endTimestamp: number,
}

export interface ClassDataResponseDTO extends ClassSummaryListResponseDTO {
  members: DocumentMembersResponseDTO,
  cycles: {
    [key: string]: CycleClassDataResponseDTO,
  },
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
    [key: string]: {
      index: number,
      name: string,
      startTimestamp: number,
      endTimestamp: number,
      sessions: {
        [key: string]: {
          index: string,
          name: string,
          assignments: {
            [key: string]: (ClassDataResponseDTO | AssignmentCourseUpsert | AssignmentWorksheetUpsert)
          },
          startTimestamp: number,
          endTimestamp: number,
        }
      },
    },
  },
  members: DocumentMembersDTO,
}
