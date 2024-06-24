import { EntityMembers, EntityState } from './entity';

export enum ClassState {
  RELEASED = EntityState.RELEASED,
  ARCHIVED = EntityState.ARCHIVED,
}

enum AssignmentClass {
  COURSE = 'COURSE',
  WORKSHEET = 'WORKSHEET',
}

interface AssignmentCourse {
  id: string,
  type: AssignmentClass,
  points: number,
  startTimestamp: number,
  endTimestamp: number,
}

interface AssignmentCourseType extends AssignmentCourse {
  type: AssignmentClass.COURSE,
  courseId: string,
}

interface AssignmentWorksheetType extends AssignmentCourse {
  type: AssignmentClass.WORKSHEET,
  worksheetId: string,
}

export type AssignmentClassCycle = AssignmentCourseType | AssignmentWorksheetType;

interface SessionClassCycle {
  name: string,
  assignments: AssignmentClassCycle[],
  startTimestamp: number,
  endTimestamp: number,
}

type ClassCycle = {
  name: string,
  sessions: SessionClassCycle[],
  startTimestamp: number,
  endTimestamp: number,
}

export interface ClassBaseDocument {
  key: string,
  name: string,
  state: ClassState,
  members: EntityMembers,
  cycles: ClassCycle[],
}
