import { CourseRole } from '../types';

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
