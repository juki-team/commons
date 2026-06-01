import type { AssignmentClass, EntityState } from '../enums/index.js';
import type { AssignmentBasicInfo, ClassBaseDocument, ClassCycleTag } from '../types/index.js';
import type { EntityMembersDto, EntityMembersResponseDto } from './entity.js';
import type { UserOrganizationBasicInfoResponseDto, UserSummaryListResponseDto } from './user.js';

interface ClassUserResponseDto {
  isOwner: boolean;
  isManager: boolean;
  isSpectator: boolean;
  isParticipant: boolean;
  isGuest: boolean;
}

export interface ClassSummaryListResponseDto {
  key: string;
  name: string;
  description: string;
  state: EntityState;
  owner: UserOrganizationBasicInfoResponseDto;
  user: ClassUserResponseDto;
}

export interface ContestAssignmentSessionCycleClassDataResponseDto extends AssignmentBasicInfo {
  type: typeof AssignmentClass.CONTEST;
  contestKey: string;
  numberProblems: number;
}

export interface CourseAssignmentSessionCycleClassDataResponseDto extends AssignmentBasicInfo {
  type: typeof AssignmentClass.COURSE;
  courseKey: string;
  numberLessons: number;
}

export interface WorksheetAssignmentSessionCycleClassDataResponseDto extends AssignmentBasicInfo {
  type: typeof AssignmentClass.WORKSHEET;
  worksheetKey: string;
  numberPages: number;
}

export interface NoneAssignmentSessionCycleClassDataResponseDto extends AssignmentBasicInfo {
  type: typeof AssignmentClass.NONE;
}

export type AssignmentSessionCycleClassDataResponseDto =
  | ContestAssignmentSessionCycleClassDataResponseDto
  | CourseAssignmentSessionCycleClassDataResponseDto
  | WorksheetAssignmentSessionCycleClassDataResponseDto
  | NoneAssignmentSessionCycleClassDataResponseDto;

export interface SessionCycleClassDataResponseDto {
  id: string;
  index: number;
  name: string;
  assignments: {
    [key: string]: AssignmentSessionCycleClassDataResponseDto;
  };
  startsAt: number;
  endsAt: number;
  state: EntityState;
}

export interface CycleClassDataResponseDto {
  id: string;
  index: number;
  name: string;
  sessions: {
    [key: string]: SessionCycleClassDataResponseDto;
  };
  tags: ClassCycleTag[];
  startsAt: number;
  endsAt: number;
  state: EntityState;
}

export interface ClassCycleDataResponseDto extends ClassSummaryListResponseDto {
  members: EntityMembersResponseDto;
  cycle: CycleClassDataResponseDto;
  cycles: {
    [key: string]: { name: string; index: number; id: string };
  };
}

export interface ClassCyclesCycleDataResponseDto extends Omit<CycleClassDataResponseDto, 'sessions'> {
  sessions: {
    [key: string]: Omit<SessionCycleClassDataResponseDto, 'assignments'>;
  };
}

export interface ClassCyclesDataResponseDto extends ClassSummaryListResponseDto {
  members: EntityMembersResponseDto;
  cycles: {
    [key: string]: ClassCyclesCycleDataResponseDto;
  };
}

export interface AssignmentContestUpsert extends AssignmentBasicInfo {
  type: typeof AssignmentClass.CONTEST;
  contestKey: string;
}

export interface AssignmentCourseUpsert extends AssignmentBasicInfo {
  type: typeof AssignmentClass.COURSE;
  courseKey: string;
}

export interface AssignmentWorksheetUpsert extends AssignmentBasicInfo {
  type: typeof AssignmentClass.WORKSHEET;
  worksheetKey: string;
}

export interface UpsertClassDto extends Omit<ClassBaseDocument, 'members' | 'key' | 'cycles'> {
  members: EntityMembersDto;
}

export interface UpsertClassCycleDto extends Omit<ClassBaseDocument['cycles'][string], 'sessions' | 'id'> {}

export interface UpsertClassCycleSessionDto
  extends Omit<ClassBaseDocument['cycles'][string]['sessions'][string], 'assignments' | 'id'> {}

export interface UpsertClassCycleSessionAssignmentDto extends Omit<AssignmentBasicInfo, 'id'> {
  key: string;
}

export interface ClassAssignmentBaseDocument {
  userId: string;
  assignmentId: string;
  points: number;
}

export interface ClassAssignmentDataResponseDto {
  user: UserSummaryListResponseDto;
  assignmentId: string;
  points: number;
}
