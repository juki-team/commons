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

export type FolderFileContent = { type: FileType.FOLDER };
export type FileFileContent = { type: FileType.FILE, mime: string, key: string }

export type FileContent =
  FolderFileContent
  | FileFileContent;

export type SummaryFileContent =
  FolderFileContent
  | Omit<FileFileContent, 'key'>;

export enum FilesJukiPub {
  SHARED = 'shared', // files to share
  SHARED_EXCALIDRAW = `shared/${CollectionKey.EXCALIDRAW}`,
  TEMP = 'temp', // temporal files
  PROBLEMS = 'problems',
  CONTESTS = 'contests',
}
