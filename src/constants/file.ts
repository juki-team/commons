import { EntityAccess, EntityState, FileRole, FileType } from '../types';

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

export const ENTITY_STATE: { [key in EntityState]: { value: EntityState, label: string } } = {
  [EntityState.RELEASED]: {
    value: EntityState.RELEASED,
    label: 'released',
  },
  [EntityState.ARCHIVED]: {
    value: EntityState.ARCHIVED,
    label: 'archived',
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
    description: 'the record will be visible and editable only to the owner',
  },
  [EntityAccess.RESTRICTED]: {
    value: EntityAccess.RESTRICTED,
    label: 'restricted',
    description: 'the record will be visible to viewers and the owner and editable to editors and the owner',
  },
  [EntityAccess.PUBLIC]: {
    value: EntityAccess.PUBLIC,
    label: 'public',
    description: 'the record will be visible to anyone and editable to editors and the owner',
  },
  [EntityAccess.EXPOSED]: {
    value: EntityAccess.EXPOSED,
    label: 'exposed',
    description: 'the record will be visible and editable to anyone',
  },
};
