import { CourseRole, CourseStatus } from '../types';

export const COURSE_STATUS: { [key in CourseStatus]: { value: CourseStatus, label: string, description: string } } = {
  [CourseStatus.RELEASED]: {
    value: CourseStatus.RELEASED,
    label: 'released',
    description: 'the course can now be taken',
  },
  [CourseStatus.IN_REVIEW]: {
    value: CourseStatus.IN_REVIEW,
    label: 'in review',
    description: 'the course is under review',
  },
  [CourseStatus.IN_DRAFT]: {
    value: CourseStatus.IN_DRAFT,
    label: 'in draft',
    description: 'the course is in draft',
  },
  [CourseStatus.ARCHIVED]: {
    value: CourseStatus.ARCHIVED,
    label: 'archived',
    description: 'the course will not appear for anyone, contact the administrator to see it again',
  },
};

export const COURSE_ROLE: { [key in CourseRole]: { value: CourseRole, label: string, level: number } } = {
  [CourseRole.RESTRICTED]: { value: CourseRole.RESTRICTED, label: 'restricted', level: 8 },
  [CourseRole.GUEST]: { value: CourseRole.GUEST, label: 'guest', level: 7 },
  [CourseRole.REGULAR]: { value: CourseRole.REGULAR, label: 'regular', level: 6 },
  [CourseRole.CREATOR]: { value: CourseRole.CREATOR, label: 'creator', level: 5 },
  [CourseRole.SUPER_CREATOR]: { value: CourseRole.SUPER_CREATOR, label: 'super creator', level: 4 },
  [CourseRole.MANAGER]: { value: CourseRole.MANAGER, label: 'manager', level: 3 },
  [CourseRole.MASTER]: { value: CourseRole.MASTER, label: 'super admin', level: 2 },
  [CourseRole.ADMIN]: { value: CourseRole.ADMIN, label: 'admin', level: 1 },
  [CourseRole.SUPER_ADMIN]: { value: CourseRole.SUPER_ADMIN, label: 'super admin', level: 0 },
};
