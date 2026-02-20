import { CollectionKey } from './entity';
import { Role } from './users';

export type FileRole =
  Role.RESTRICTED
  | Role.GUEST
  | Role.REGULAR
  | Role.MASTER
  | Role.ADMIN
  | Role.SUPER_ADMIN;

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

export enum FilesJukiPub {
  SHARED = 'shared', // files to share
  SHARED_EXCALIDRAW = `shared/${CollectionKey.EXCALIDRAW}`,
  TEMP = 'temp', // temporal files
  PROBLEMS = 'problems',
  CONTESTS = 'contests',
}
