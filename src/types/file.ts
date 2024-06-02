import { EntityState } from './entity';

export enum FileState {
  RELEASED = EntityState.RELEASED,
  IN_DRAFT = EntityState.IN_DRAFT,
  ARCHIVED = EntityState.ARCHIVED,
}

export enum FileRole {
  RESTRICTED = 'RESTRICTED',
  GUEST = 'GUEST',
  REGULAR = 'REGULAR',
  MASTER = 'MASTER',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN'
}

export enum FileMemberRole {
  VIEWER = 'VIEWER',
  EDITOR = 'EDITOR',
}

export enum FileType {
  FOLDER = 'FOLDER',
  FILE = 'FILE',
}

export type FolderFileContentType = { type: FileType.FOLDER };
export type FileFileContentType = { type: FileType.FILE, mime: string, key: string }

export type FileContentType =
  FolderFileContentType
  | FileFileContentType;

export type SummaryFileContentType =
  FolderFileContentType
  | Omit<FileFileContentType, 'key'>;
