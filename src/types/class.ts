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
  index: number,
  type: AssignmentClass,
  points: number,
  startTimestamp: number,
  endTimestamp: number,
}

export interface AssignmentCourseType extends AssignmentBasicInfo {
  type: AssignmentClass.COURSE,
  courseId: string,
}

export interface AssignmentWorksheetType extends AssignmentBasicInfo {
  type: AssignmentClass.WORKSHEET,
  worksheetId: string,
}

export interface AssignmentContestType extends AssignmentBasicInfo {
  type: AssignmentClass.CONTEST,
  contestId: string,
}

export type AssignmentClassCycle = AssignmentCourseType | AssignmentWorksheetType | AssignmentContestType;

export interface AssignmentClassCycles {
  [key: string]: AssignmentClassCycle,
}

export enum ClassCycleSessionState {
  ARCHIVED = EntityState.ARCHIVED,
  RELEASED = EntityState.RELEASED,
}

interface SessionClassCycle {
  id: string,
  index: number,
  name: string,
  assignments: AssignmentClassCycles,
  startTimestamp: number,
  endTimestamp: number,
  state: ClassCycleSessionState,
}

export interface SessionClassCycles {
  [key: string]: SessionClassCycle,
}

export enum ClassCycleState {
  ARCHIVED = EntityState.ARCHIVED,
  RELEASED = EntityState.RELEASED,
}

export type ClassCycle = {
  id: string,
  index: number,
  name: string,
  sessions: SessionClassCycles,
  startTimestamp: number,
  endTimestamp: number,
  state: ClassCycleState,
}

export interface ClassCycles {
  [key: string]: ClassCycle,
}

export interface ClassBaseDocument {
  key: string,
  name: string,
  description: string,
  state: ClassState,
  members: EntityMembers,
  cycles: ClassCycles,
}
