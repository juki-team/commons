import { ContestRole, ContestStatus } from '../types';

export const CONTEST_STATUS: { [key in ContestStatus]: { value: ContestStatus, label: string, description: string } } = {
  [ContestStatus.PUBLIC]: {
    value: ContestStatus.PUBLIC,
    label: 'public',
    description: 'the contest will appear in the list of contests and the users will have access according to their roles',
  },
  [ContestStatus.RESERVED]: {
    value: ContestStatus.RESERVED,
    label: 'reserved',
    description: 'the contest will not appear in the list of contests and the users will have access according to their roles',
  },
  [ContestStatus.ARCHIVED]: {
    value: ContestStatus.ARCHIVED,
    label: 'archived',
    description: 'the contest will not appear for anyone, contact the administrator to see it again',
  },
};

export const CONTEST_ROLE: { [key in ContestRole]: { value: ContestRole, label: string, level: number } } = {
  [ContestRole.RESTRICTED]: { value: ContestRole.RESTRICTED, label: 'restricted', level: 5 },
  [ContestRole.GUEST]: { value: ContestRole.GUEST, label: 'guest', level: 4 },
  [ContestRole.REGULAR]: { value: ContestRole.REGULAR, label: 'regular', level: 3 },
  [ContestRole.MANAGER]: { value: ContestRole.MANAGER, label: 'manager', level: 2 },
  [ContestRole.ADMIN]: { value: ContestRole.ADMIN, label: 'admin', level: 1 },
  [ContestRole.SUPER_ADMIN]: { value: ContestRole.SUPER_ADMIN, label: 'super admin', level: 0 },
};
