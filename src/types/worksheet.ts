import { EntityMembers } from './entity';
import { FileState } from './file';
import { BodyNoteSheetType, NewPageSheetType } from './sheet';

export interface WorksheetBaseDocument {
  key: string,
  folderId: string,
  name: string,
  description: string,
  content: BodyNoteSheetType[],
  isSolvable: boolean,
  state: FileState,
  members: EntityMembers,
}

export type WorksheetsInPages = { header: NewPageSheetType, content: BodyNoteSheetType[] }[];
