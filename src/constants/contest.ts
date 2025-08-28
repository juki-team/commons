import { ContestRole, ContestStatus, Role } from '../types';

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
  [Role.RESTRICTED]: { value: Role.RESTRICTED, label: 'restricted', level: 7 },
  [Role.GUEST]: { value: Role.GUEST, label: 'guest', level: 6 },
  [Role.REGULAR]: { value: Role.REGULAR, label: 'regular', level: 5 },
  [Role.CREATOR]: { value: Role.CREATOR, label: 'creator', level: 4 },
  [Role.MANAGER]: { value: Role.MANAGER, label: 'manager', level: 3 },
  [Role.MASTER]: { value: Role.MASTER, label: 'master', level: 2 },
  [Role.ADMIN]: { value: Role.ADMIN, label: 'admin', level: 1 },
  [Role.SUPER_ADMIN]: { value: Role.SUPER_ADMIN, label: 'super admin', level: 0 },
};
