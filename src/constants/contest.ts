import { ContestRole, ContestStatus } from '../types';

export const CONTEST_STATUS: {
  [key in ContestStatus]: {
    value: ContestStatus,
    label: string,
    description: string
  }
} = {
  [ContestStatus.PUBLIC]: {
    value: ContestStatus.PUBLIC,
    label: 'public',
    description: 'the contest will appear in the contest list and the users will have access according to their roles',
  },
  [ContestStatus.RESERVED]: {
    value: ContestStatus.RESERVED,
    label: 'reserved',
    description: 'the contest will appear in the contest list only for contest members and the users will have access according to their roles',
  },
  [ContestStatus.ARCHIVED]: {
    value: ContestStatus.ARCHIVED,
    label: 'archived',
    description: 'the contest will not appear for anyone, contact the administrator to see it again',
  },
};

export const CONTEST_ROLE: { [key in ContestRole]: { value: ContestRole, label: string, level: number } } = {
  [ContestRole.RESTRICTED]: { value: ContestRole.RESTRICTED, label: 'restricted', level: 7 },
  [ContestRole.GUEST]: { value: ContestRole.GUEST, label: 'guest', level: 6 },
  [ContestRole.REGULAR]: { value: ContestRole.REGULAR, label: 'regular', level: 5 },
  [ContestRole.CREATOR]: { value: ContestRole.CREATOR, label: 'creator', level: 4 },
  [ContestRole.MANAGER]: { value: ContestRole.MANAGER, label: 'manager', level: 3 },
  [ContestRole.MASTER]: { value: ContestRole.MASTER, label: 'master', level: 2 },
  [ContestRole.ADMIN]: { value: ContestRole.ADMIN, label: 'admin', level: 1 },
  [ContestRole.SUPER_ADMIN]: { value: ContestRole.SUPER_ADMIN, label: 'super admin', level: 0 },
};
