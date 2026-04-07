import type { FileType } from '../prisma/enums/index.js';

export enum FileMemberRole {
  VIEWER = 'VIEWER',
  EDITOR = 'EDITOR',
}

export type FolderFileContent = { type: typeof FileType.FOLDER };
export type FileFileContent = { type: typeof FileType.FILE; mime: string; key: string };

export type FileContent = FolderFileContent | FileFileContent;

export type SummaryFileContent = FolderFileContent | Omit<FileFileContent, 'key'>;

export enum FilesJukiPub {
  SHARED = 'shared', // files to share
  SHARED_EXCALIDRAW = 'shared/E', // `shared/${CollectionKey.EXCALIDRAW}`,
  TEMP = 'temp', // temporal files
  PROBLEMS = 'problems',
  CONTESTS = 'contests',
}
