import type { EntityState, FileType } from '../enums/index.js';

export interface FileBasic {
  name: string;
  description: string;
  state: EntityState;
}

export type FolderFileContent = { type: typeof FileType.FOLDER };
export type FileFileContent = { type: typeof FileType.FILE; mime: string; key: string };

export type FileContent = FolderFileContent | FileFileContent;

export type SummaryFileContent = FolderFileContent | Omit<FileFileContent, 'key'>;
