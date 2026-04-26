import type { ClassCycleSessionAssignments } from './assignment.js';
import type { EntityMembers, EntityState } from './entity.js';

interface ClassCycleSession {
  id: string;
  index: number;
  name: string;
  assignments: ClassCycleSessionAssignments;
  startTimestamp: number;
  endTimestamp: number;
  state: EntityState;
}

export interface ClassCycleSessions {
  [key: string]: ClassCycleSession;
}

export type ClassCycleTag = {
  key: string;
  name: string;
  color: string;
  points: number;
};

export type ClassCycle = {
  id: string;
  index: number;
  name: string;
  sessions: ClassCycleSessions;
  tags: ClassCycleTag[];
  startTimestamp: number;
  endTimestamp: number;
  state: EntityState;
};

export interface ClassCycles {
  [key: string]: ClassCycle;
}

export interface ClassBaseDocument {
  key: string;
  name: string;
  description: string;
  members: EntityMembers;
  cycles: ClassCycles;
}
