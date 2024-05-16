import { FileAccess, FileRole, FileState, FileType } from '../types';

export const FILE_TYPE: { [key in FileType]: { value: FileType, label: string } } = {
  [FileType.FILE]: { value: FileType.FILE, label: 'file' },
  [FileType.FOLDER]: { value: FileType.FOLDER, label: 'folder' },
  [FileType.NOTE_SHEET]: { value: FileType.NOTE_SHEET, label: 'note sheet' },
  [FileType.WORKSHEET]: { value: FileType.WORKSHEET, label: 'worksheet' },
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
    description: 'the record is active, the record will be viewable for viewers and editable for editors',
  },
  [FileState.IN_DRAFT]: {
    value: FileState.IN_DRAFT,
    label: 'in draft',
    description: 'the record is not active, the record will be viewable and editable only for the owner',
  },
  [FileState.ARCHIVED]: {
    value: FileState.ARCHIVED,
    label: 'archived',
    description: 'the record will not appear for anyone, contact the administrator to see it again',
  },
};

export const FILE_ACCESS_TYPE: {
  [key in FileAccess]: {
    value: FileAccess,
    label: string,
    description: string
  }
} = {
  [FileAccess.PRIVATE]: {
    value: FileAccess.PRIVATE,
    label: 'private',
    description: 'the record will be viewable and editable only for you',
  },
  [FileAccess.RESTRICTED]: {
    value: FileAccess.RESTRICTED,
    label: 'restricted',
    description: 'the record will be viewable and editable for the owner, the record will be viewable for viewers and editable for editors',
  },
  [FileAccess.PUBLIC]: {
    value: FileAccess.PUBLIC,
    label: 'public',
    description: 'the record will be viewable and editable for the owner, the record will be viewable for anyone and editable for editors',
  },
  [FileAccess.EXPOSED]: {
    value: FileAccess.EXPOSED,
    label: 'exposed',
    description: 'the record will be viewable and editable for anyone',
  },
};
