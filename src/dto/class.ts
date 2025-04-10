import { AssignmentBasicInfo, AssignmentClass, ClassBaseDocument, EntityState } from '../types';
import { EntityMembersDTO, EntityMembersResponseDTO } from './entity';
import { UserCompanyBasicInfoResponseDTO, UserSummaryListResponseDTO } from './user';

interface ClassUserResponseDTO {
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
  state: EntityState,
  owner: UserCompanyBasicInfoResponseDTO,
  user: ClassUserResponseDTO,
}

export interface ContestAssignmentSessionCycleClassDataResponseDTO extends AssignmentBasicInfo {
  type: AssignmentClass.CONTEST,
  contestKey: string,
  numberProblems: number,
}

export interface CourseAssignmentSessionCycleClassDataResponseDTO extends AssignmentBasicInfo {
  type: AssignmentClass.COURSE,
  courseKey: string,
  numberLessons: number,
}

export interface WorksheetAssignmentSessionCycleClassDataResponseDTO extends AssignmentBasicInfo {
  type: AssignmentClass.WORKSHEET,
  worksheetKey: string,
  numberPages: number,
}

export interface NoneAssignmentSessionCycleClassDataResponseDTO extends AssignmentBasicInfo {
  type: AssignmentClass.NONE,
}

export type AssignmentSessionCycleClassDataResponseDTO =
  ContestAssignmentSessionCycleClassDataResponseDTO
  | CourseAssignmentSessionCycleClassDataResponseDTO
  | WorksheetAssignmentSessionCycleClassDataResponseDTO
  | NoneAssignmentSessionCycleClassDataResponseDTO;

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

interface CycleClassDataResponseDTO {
  id: string,
  index: number,
  name: string,
  sessions: {
    [key: string]: SessionCycleClassDataResponseDTO,
  },
  tags: string[],
  startTimestamp: number,
  endTimestamp: number,
}

export interface ClassCycleDataResponseDTO extends ClassSummaryListResponseDTO {
  members: EntityMembersResponseDTO,
  cycle: CycleClassDataResponseDTO,
  cycles: {
    [key: string]: { name: string, index: number, id: string },
  },
}

export interface ClassCyclesCycleDataResponseDTO extends Omit<CycleClassDataResponseDTO, 'sessions'> {
  sessions: {
    [key: string]: Omit<SessionCycleClassDataResponseDTO, 'assignments'>,
  },
}

export interface ClassCyclesDataResponseDTO extends ClassSummaryListResponseDTO {
  members: EntityMembersResponseDTO,
  cycles: {
    [key: string]: ClassCyclesCycleDataResponseDTO,
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
  members: EntityMembersDTO,
}

export interface UpsertClassCycleDTO extends Omit<ClassBaseDocument['cycles'][string], 'sessions' | 'id'> {
}

export interface UpsertClassCycleSessionDTO extends Omit<ClassBaseDocument['cycles'][string]['sessions'][string], 'assignments' | 'id'> {
}

export interface UpsertClassCycleSessionAssignmentDTO extends AssignmentBasicInfo {
  key: string,
}

export interface ClassAssignmentBaseDocument {
  userId: string,
  assignmentId: string,
  points: number,
  comments: {
    userId: string,
    content: string,
    timestamp: number,
  }[],
}

export interface ClassAssignmentDataResponseDTO {
  user: UserSummaryListResponseDTO,
  assignmentId: string,
  points: number,
}
