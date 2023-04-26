import { BodySheetType, EntityAccess, EntityState } from '../types';

export enum FileState {
  ACTIVE = EntityState.ACTIVE,
  DRAFT = EntityState.DRAFT,
  ARCHIVED = EntityState.ARCHIVED,
}

export enum FileAccess {
  PRIVATE = EntityAccess.PRIVATE,
  RESTRICTED = EntityAccess.RESTRICTED,
  PUBLIC = EntityAccess.PUBLIC,
  EXPOSED = EntityAccess.EXPOSED,
}

export enum FileRole {
  RESTRICTED = 'RESTRICTED',
  GUEST = 'GUEST',
  REGULAR = 'REGULAR',
  MASTER = 'MASTER',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN'
}

export enum FileType {
  SHEET = 'sheet',
  FOLDER = 'folder',
  FILE = 'file',
}

export type FolderFileContentType = { type: FileType.FOLDER };
export type SheetFileContentType = { type: FileType.SHEET, body: BodySheetType[] };
export type FileFileContentType = { type: FileType.FILE, mime: string, }

export type FileContentType = FolderFileContentType | SheetFileContentType | FileFileContentType;

export type SummaryFileContentType = FolderFileContentType | Omit<SheetFileContentType, 'body'> | FileFileContentType;
