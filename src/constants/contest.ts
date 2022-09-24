import { ContestRole, ContestStatus } from '../types';

export const CONTEST_STATUS: { [key in ContestStatus]: { value: ContestStatus, label: string } } = {
  [ContestStatus.PUBLIC]: { value: ContestStatus.PUBLIC, label: 'public' },
  [ContestStatus.RESERVED]: { value: ContestStatus.RESERVED, label: 'reserved' },
  [ContestStatus.ARCHIVED]: { value: ContestStatus.ARCHIVED, label: 'archived' },
};

export const CONTEST_ROLE: { [key in ContestRole]: { value: ContestRole, label: string, level: number } } = {
  [ContestRole.RESTRICTED]: { value: ContestRole.RESTRICTED, label: 'restricted', level: 5 },
  [ContestRole.GUEST]: { value: ContestRole.GUEST, label: 'guest', level: 4 },
  [ContestRole.REGULAR]: { value: ContestRole.REGULAR, label: 'regular', level: 3 },
  [ContestRole.MANAGER]: { value: ContestRole.MANAGER, label: 'manager', level: 2 },
  [ContestRole.ADMIN]: { value: ContestRole.ADMIN, label: 'admin', level: 1 },
  [ContestRole.SUPER_ADMIN]: { value: ContestRole.SUPER_ADMIN, label: 'super admin', level: 0 },
};
