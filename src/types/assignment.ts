import type { AssignmentClass, EntityState } from '../enums/index.js';
import type { BodyWorksheet } from './worksheet.js';

export interface AssignmentBasicInfo {
  id: string;
  index: number;
  type: AssignmentClass;
  points: number;
  startTimestamp: number;
  endTimestamp: number;
  title: string;
  content: BodyWorksheet[];
  tags: string[];
  graded: boolean;
  visible: boolean;
}

export interface ClassCycleSessionAssignment extends AssignmentBasicInfo {
  entityId: string;
  state: EntityState;
}

export interface ClassCycleSessionAssignments {
  [key: string]: ClassCycleSessionAssignment;
}
