import { EntityMembers, EntityState } from './entity';

export enum ClassState {
  RELEASED = EntityState.RELEASED,
  ARCHIVED = EntityState.ARCHIVED,
}

export enum AssignmentClass {
  COURSE = 'COURSE',
  WORKSHEET = 'WORKSHEET',
  CONTEST = 'CONTEST',
}

export interface AssignmentBasicInfo {
  id: string,
  type: AssignmentClass,
  points: number,
  startTimestamp: number,
  endTimestamp: number,
}

interface AssignmentCourseType extends AssignmentBasicInfo {
  type: AssignmentClass.COURSE,
  courseId: string,
}

interface AssignmentWorksheetType extends AssignmentBasicInfo {
  type: AssignmentClass.WORKSHEET,
  worksheetId: string,
}

interface AssignmentContestType extends AssignmentBasicInfo {
  type: AssignmentClass.CONTEST,
  contestId: string,
}

export type AssignmentClassCycle = AssignmentCourseType | AssignmentWorksheetType | AssignmentContestType;

interface SessionClassCycle {
  id: string,
  name: string,
  assignments: AssignmentClassCycle[],
  startTimestamp: number,
  endTimestamp: number,
}

type ClassCycle = {
  id: string,
  name: string,
  sessions: SessionClassCycle[],
  startTimestamp: number,
  endTimestamp: number,
}

export interface ClassBaseDocument {
  key: string,
  name: string,
  description: string,
  state: ClassState,
  members: EntityMembers,
  cycles: ClassCycle[],
}
