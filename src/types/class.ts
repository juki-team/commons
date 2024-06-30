import { EntityMembers, EntityState } from './entity';

export enum ClassCycleSessionAssignmentState {
  ARCHIVED = EntityState.ARCHIVED,
  RELEASED = EntityState.RELEASED,
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

export interface ClassCycleSessionAssignment extends AssignmentBasicInfo {
  entityId: string,
  state: ClassCycleSessionAssignmentState,
}

export interface ClassCycleSessionAssignments {
  [key: string]: ClassCycleSessionAssignment,
}

export enum ClassCycleSessionState {
  ARCHIVED = EntityState.ARCHIVED,
  RELEASED = EntityState.RELEASED,
}

interface ClassCycleSession {
  id: string,
  index: number,
  name: string,
  assignments: ClassCycleSessionAssignments,
  startTimestamp: number,
  endTimestamp: number,
  state: ClassCycleSessionState,
}

export interface ClassCycleSessions {
  [key: string]: ClassCycleSession,
}

export enum ClassCycleState {
  ARCHIVED = EntityState.ARCHIVED,
  RELEASED = EntityState.RELEASED,
}

export type ClassCycle = {
  id: string,
  index: number,
  name: string,
  sessions: ClassCycleSessions,
  startTimestamp: number,
  endTimestamp: number,
  state: ClassCycleState,
}

export interface ClassCycles {
  [key: string]: ClassCycle,
}

export enum ClassState {
  RELEASED = EntityState.RELEASED,
  ARCHIVED = EntityState.ARCHIVED,
}

export interface ClassBaseDocument {
  key: string,
  name: string,
  description: string,
  state: ClassState,
  members: EntityMembers,
  cycles: ClassCycles,
}
