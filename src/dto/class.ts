import { AssignmentBasicInfo, AssignmentClass, ClassBaseDocument, ClassState, UserBasicInfoInterface } from '../types';
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

export interface ContestAssignmentSessionCycleClassDataResponseDTO extends AssignmentBasicInfo {
  type: AssignmentClass.CONTEST,
  contestKey: string,
}

export interface CourseAssignmentSessionCycleClassDataResponseDTO extends AssignmentBasicInfo {
  type: AssignmentClass.COURSE,
  courseKey: string,
}

export interface WorksheetAssignmentSessionCycleClassDataResponseDTO extends AssignmentBasicInfo {
  type: AssignmentClass.WORKSHEET,
  worksheetKey: string,
}

export type AssignmentSessionCycleClassDataResponseDTO =
  ContestAssignmentSessionCycleClassDataResponseDTO
  | CourseAssignmentSessionCycleClassDataResponseDTO
  | WorksheetAssignmentSessionCycleClassDataResponseDTO;

export interface SessionCycleClassDataResponseDTO {
  id: string,
  index: number,
  name: string,
  assignments: {
    [key: string]: AssignmentSessionCycleClassDataResponseDTO,
  },
  startTimestamp: number,
  endTimestamp: number,
}

export interface CycleClassDataResponseDTO {
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

interface CycleClassCycleResponseDTO {
  id: string,
  index: number,
  name: string,
  sessions: {
    [key: string]: Omit<SessionCycleClassDataResponseDTO, 'assignments'>,
  },
  startTimestamp: number,
  endTimestamp: number,
}

export interface ClassCycleResponseDTO extends ClassSummaryListResponseDTO {
  members: DocumentMembersResponseDTO,
  cycles: {
    [key: string]: CycleClassCycleResponseDTO,
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
          index: number,
          name: string,
          assignments: {
            [key: string]: (AssignmentContestUpsert | AssignmentCourseUpsert | AssignmentWorksheetUpsert)
          },
          startTimestamp: number,
          endTimestamp: number,
        }
      },
    },
  },
  members: DocumentMembersDTO,
}
