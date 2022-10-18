import { SystemRole } from '../types';

export const SYSTEM_ROLE: { [key in SystemRole]: { value: SystemRole, label: string, level: number } } = {
  [SystemRole.GUEST]: { value: SystemRole.GUEST, label: 'guest', level: 5 },
  [SystemRole.REGULAR]: { value: SystemRole.REGULAR, label: 'regular', level: 4 },
  [SystemRole.MANAGER]: { value: SystemRole.MANAGER, label: 'manager', level: 3 },
  [SystemRole.MASTER]: { value: SystemRole.MASTER, label: 'master', level: 2 },
  [SystemRole.ADMIN]: { value: SystemRole.ADMIN, label: 'admin', level: 1 },
  [SystemRole.SUPER_ADMIN]: { value: SystemRole.SUPER_ADMIN, label: 'super admin', level: 0 },
};
