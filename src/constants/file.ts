import { FileRole, FileStatus } from '../types';

export const FILE_ROLE: { [key in FileRole]: { value: FileRole, label: string, level: number } } = {
  [FileRole.RESTRICTED]: { value: FileRole.RESTRICTED, label: 'restricted', level: 5 },
  [FileRole.GUEST]: { value: FileRole.GUEST, label: 'guest', level: 4 },
  [FileRole.REGULAR]: { value: FileRole.REGULAR, label: 'regular', level: 3 },
  [FileRole.MASTER]: { value: FileRole.MASTER, label: 'master', level: 2 },
  [FileRole.ADMIN]: { value: FileRole.ADMIN, label: 'admin', level: 1 },
  [FileRole.SUPER_ADMIN]: { value: FileRole.SUPER_ADMIN, label: 'super admin', level: 0 },
};

export const FILE_STATUS: { [key in FileStatus]: { value: FileStatus, label: string, description: string } } = {
  [FileStatus.ARCHIVED]: {
    value: FileStatus.ARCHIVED,
    label: 'archived',
    description: 'the record will not appear for anyone, contact the administrator to see it again',
  },
  [FileStatus.PRIVATE]: {
    value: FileStatus.PRIVATE,
    label: 'reserved',
    description: 'the record will be viewable and editable for you and users who have access according to their roles',
  },
  [FileStatus.RESERVED]: {
    value: FileStatus.RESERVED,
    label: 'reserved',
    description: 'the record will be viewable for viewers and editable for editors, the record will be viewable and editable' +
      ' for users who have access according to their roles',
  },
  [FileStatus.PUBLIC]: {
    value: FileStatus.PUBLIC,
    label: 'public',
    description: 'the record will be viewable and editable for everyone',
  },
};
