import { FileAccessType, FileRole, FileState } from '../types';

export const FILE_ROLE: { [key in FileRole]: { value: FileRole, label: string, level: number } } = {
  [FileRole.RESTRICTED]: { value: FileRole.RESTRICTED, label: 'restricted', level: 5 },
  [FileRole.GUEST]: { value: FileRole.GUEST, label: 'guest', level: 4 },
  [FileRole.REGULAR]: { value: FileRole.REGULAR, label: 'regular', level: 3 },
  [FileRole.MASTER]: { value: FileRole.MASTER, label: 'master', level: 2 },
  [FileRole.ADMIN]: { value: FileRole.ADMIN, label: 'admin', level: 1 },
  [FileRole.SUPER_ADMIN]: { value: FileRole.SUPER_ADMIN, label: 'super admin', level: 0 },
};

export const FILE_STATE: { [key in FileState]: { value: FileState, label: string, description: string } } = {
  [FileState.ACTIVE]: {
    value: FileState.ACTIVE,
    label: 'active',
    description: 'the record is active, the record will be viewable for viewers and editable for editors',
  },
  [FileState.DRAFT]: {
    value: FileState.DRAFT,
    label: 'draft',
    description: 'the record is not active, the record will be viewable and editable only for the owner',
  },
  [FileState.ARCHIVED]: {
    value: FileState.ARCHIVED,
    label: 'archived',
    description: 'the record will not appear for anyone, contact the administrator to see it again',
  },
};

export const FILE_ACCESS_TYPE: {
  [key in FileAccessType]: {
    value: FileAccessType,
    label: string,
    description: string
  }
} = {
  [FileAccessType.PRIVATE]: {
    value: FileAccessType.PRIVATE,
    label: 'private',
    description: 'the record will be viewable and editable only for you',
  },
  [FileAccessType.RESTRICTED]: {
    value: FileAccessType.RESTRICTED,
    label: 'private',
    description: 'the record will be viewable and editable for the owner, the record will be viewable for viewers and editable for editors',
  },
  [FileAccessType.PUBLIC]: {
    value: FileAccessType.PUBLIC,
    label: 'public',
    description: 'the record will be viewable and editable for the owner, the record will be viewable for anyone',
  },
  [FileAccessType.EXPOSED]: {
    value: FileAccessType.EXPOSED,
    label: 'exposed',
    description: 'the record will be viewable and editable for the owner, the record will be viewable and editable for anyone',
  },
};
