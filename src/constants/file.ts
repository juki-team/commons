import { FileRole, FileState, FileType, EntityAccess } from '../types';

export const FILE_TYPE: { [key in FileType]: { value: FileType, label: string } } = {
  [FileType.FILE]: { value: FileType.FILE, label: 'file' },
  [FileType.FOLDER]: { value: FileType.FOLDER, label: 'folder' },
};

export const FILE_ROLE: { [key in FileRole]: { value: FileRole, label: string, level: number } } = {
  [FileRole.RESTRICTED]: { value: FileRole.RESTRICTED, label: 'restricted', level: 5 },
  [FileRole.GUEST]: { value: FileRole.GUEST, label: 'guest', level: 4 },
  [FileRole.REGULAR]: { value: FileRole.REGULAR, label: 'regular', level: 3 },
  [FileRole.MASTER]: { value: FileRole.MASTER, label: 'master', level: 2 },
  [FileRole.ADMIN]: { value: FileRole.ADMIN, label: 'admin', level: 1 },
  [FileRole.SUPER_ADMIN]: { value: FileRole.SUPER_ADMIN, label: 'super admin', level: 0 },
};

export const FILE_STATE: { [key in FileState]: { value: FileState, label: string, description: string } } = {
  [FileState.RELEASED]: {
    value: FileState.RELEASED,
    label: 'released',
    description: 'the record is released',
  },
  [FileState.IN_DRAFT]: {
    value: FileState.IN_DRAFT,
    label: 'in draft',
    description: 'the record is in draft',
  },
  [FileState.ARCHIVED]: {
    value: FileState.ARCHIVED,
    label: 'archived',
    description: 'the record will not appear for anyone, contact the administrator to see it again',
  },
};

export const ENTITY_ACCESS: {
  [key in EntityAccess]: {
    value: EntityAccess,
    label: string,
    description: string
  }
} = {
  [EntityAccess.PRIVATE]: {
    value: EntityAccess.PRIVATE,
    label: 'private',
    description: 'the record will be visible and editable only for the owner',
  },
  [EntityAccess.RESTRICTED]: {
    value: EntityAccess.RESTRICTED,
    label: 'restricted',
    description: 'the record will be visible and editable for the owner, the record will be visible for viewers and editable for editors',
  },
  [EntityAccess.PUBLIC]: {
    value: EntityAccess.PUBLIC,
    label: 'public',
    description: 'the record will be visible and editable for the owner, the record will be visible for anyone and editable for editors',
  },
  [EntityAccess.EXPOSED]: {
    value: EntityAccess.EXPOSED,
    label: 'exposed',
    description: 'the record will be visible and editable for anyone',
  },
};
