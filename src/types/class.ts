import { BodyWorksheetType } from '../types/sheet';
import { EntityMembers, EntityState } from './entity';

export enum AssignmentClass {
  NONE = 'NONE',
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
  title: string,
  content: BodyWorksheetType[],
  tags: string[],
  graded: boolean,
  visible: boolean,
}

export interface ClassCycleSessionAssignment extends AssignmentBasicInfo {
  entityId: string,
  state: EntityState,
}

export interface ClassCycleSessionAssignments {
  [key: string]: ClassCycleSessionAssignment,
}

interface ClassCycleSession {
  id: string,
  index: number,
  name: string,
  assignments: ClassCycleSessionAssignments,
  startTimestamp: number,
  endTimestamp: number,
  state: EntityState,
}

export interface ClassCycleSessions {
  [key: string]: ClassCycleSession,
}

export type ClassCycleTag = {
  key: string,
  name: string,
  color: string,
  points: number,
}

export type ClassCycle = {
  id: string,
  index: number,
  name: string,
  sessions: ClassCycleSessions,
  tags: ClassCycleTag[],
  startTimestamp: number,
  endTimestamp: number,
  state: EntityState,
}

export interface ClassCycles {
  [key: string]: ClassCycle,
}

export interface ClassBaseDocument {
  key: string,
  name: string,
  description: string,
  members: EntityMembers,
  cycles: ClassCycles,
}
