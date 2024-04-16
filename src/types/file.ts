import { BodyNoteSheetType, EntityAccess, EntityState, UserBasicInterface } from '../types';

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

export enum FileMemberRole {
  VIEWER = 'VIEWER',
  EDITOR = 'EDITOR',
}

export enum FileType {
  FOLDER = 'FOLDER',
  NOTE_SHEET = 'NOTE_SHEET',
  WORKSHEET = 'WORKSHEET',
  FILE = 'FILE',
}

export type FolderFileContentType = { type: FileType.FOLDER };
export type NoteSheetFileContentType = { type: FileType.NOTE_SHEET, body: BodyNoteSheetType[], isSolvable: boolean };
export type WorksheetFileContentType = { type: FileType.WORKSHEET, body: [] };
export type FileFileContentType = { type: FileType.FILE, mime: string, key: string }

export type FileContentType =
  FolderFileContentType
  | NoteSheetFileContentType
  | WorksheetFileContentType
  | FileFileContentType;

export type SummaryFileContentType =
  FolderFileContentType
  | Omit<NoteSheetFileContentType, 'body' | 'isSolvable'>
  | Omit<WorksheetFileContentType, 'body'>
  | Omit<FileFileContentType, 'key'>;

export type FileUserResponseType = {
  isEditor: boolean,
  isViewer: boolean,
  isOwner: boolean,
}

export type FileMembersResponseType = {
  editors: { [key: string]: UserBasicInterface },
  viewers: { [key: string]: UserBasicInterface },
}
