import {
  AssignmentSessionCycleClassDataResponseDTO,
  ContestAssignmentSessionCycleClassDataResponseDTO,
  CourseAssignmentSessionCycleClassDataResponseDTO,
  WorksheetAssignmentSessionCycleClassDataResponseDTO,
} from '../dto';
import { AssignmentClass } from '../types';

export const isWorksheetAssignment = (assignment: AssignmentSessionCycleClassDataResponseDTO): assignment is WorksheetAssignmentSessionCycleClassDataResponseDTO => {
  return assignment.type === AssignmentClass.WORKSHEET;
};

export const isCourseAssignment = (assignment: AssignmentSessionCycleClassDataResponseDTO): assignment is CourseAssignmentSessionCycleClassDataResponseDTO => {
  return assignment.type === AssignmentClass.COURSE;
};

export const isContestAssignment = (assignment: AssignmentSessionCycleClassDataResponseDTO): assignment is ContestAssignmentSessionCycleClassDataResponseDTO => {
  return assignment.type === AssignmentClass.CONTEST;
};
