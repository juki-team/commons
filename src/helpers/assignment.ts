import type {
  AssignmentSessionCycleClassDataResponseDto,
  ContestAssignmentSessionCycleClassDataResponseDto,
  CourseAssignmentSessionCycleClassDataResponseDto,
  WorksheetAssignmentSessionCycleClassDataResponseDto,
} from '../dto/index.js';
import { AssignmentClass } from '../enums/index.js';

export const isWorksheetAssignment = (
  assignment: AssignmentSessionCycleClassDataResponseDto,
): assignment is WorksheetAssignmentSessionCycleClassDataResponseDto => {
  return assignment.type === AssignmentClass.WORKSHEET;
};

export const isCourseAssignment = (
  assignment: AssignmentSessionCycleClassDataResponseDto,
): assignment is CourseAssignmentSessionCycleClassDataResponseDto => {
  return assignment.type === AssignmentClass.COURSE;
};

export const isContestAssignment = (
  assignment: AssignmentSessionCycleClassDataResponseDto,
): assignment is ContestAssignmentSessionCycleClassDataResponseDto => {
  return assignment.type === AssignmentClass.CONTEST;
};
