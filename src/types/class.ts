import { EntityMembers, EntityState } from './entity';

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
  title: string,
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

export type ClassCycle = {
  id: string,
  index: number,
  name: string,
  sessions: ClassCycleSessions,
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
