import { AssignmentBasicInfo, AssignmentClass, ClassBaseDocument, ClassState, UserBasicInfoInterface } from '../types';
import { EntityMembersDTO, EntityMembersResponseDTO } from './entity';

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
  state: ClassState,
  owner: UserBasicInfoInterface,
  user: ClassUserResponseDTO,
}

export interface ContestAssignmentSessionCycleClassDataResponseDTO extends AssignmentBasicInfo {
  type: AssignmentClass.CONTEST,
  contestKey: string,
  title: string,
  numberProblems: number,
}

export interface CourseAssignmentSessionCycleClassDataResponseDTO extends AssignmentBasicInfo {
  type: AssignmentClass.COURSE,
  courseKey: string,
  title: string,
  numberLessons: number,
}

export interface WorksheetAssignmentSessionCycleClassDataResponseDTO extends AssignmentBasicInfo {
  type: AssignmentClass.WORKSHEET,
  worksheetKey: string,
  title: string,
  numberPages: number,
}

export type AssignmentSessionCycleClassDataResponseDTO =
  ContestAssignmentSessionCycleClassDataResponseDTO
  | CourseAssignmentSessionCycleClassDataResponseDTO
  | WorksheetAssignmentSessionCycleClassDataResponseDTO;

interface SessionCycleClassDataResponseDTO {
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

interface ClassCyclesCycleDataResponseDTO extends Omit<CycleClassDataResponseDTO, 'sessions'> {
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
