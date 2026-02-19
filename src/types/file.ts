import { CollectionKey } from './entity';

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

export enum FilesJukiPub {
  SHARED = 'shared', // files to share
  SHARED_EXCALIDRAW = `shared/${CollectionKey.EXCALIDRAW}`,
  TEMP = 'temp', // temporal files
  PROBLEMS = 'problems',
  CONTESTS = 'contests',
}
