import { EntityMembers, EntityState } from './entity';
import { BasicSheetType, BodyNoteSheetType, NewPageSheetType } from './sheet';

export interface WorksheetBaseDocument {
  key: string,
  folderId: string,
  name: string,
  description: string,
  content: BodyNoteSheetType[],
  isSolvable: boolean,
  state: EntityState,
  members: EntityMembers,
}

export type WorksheetsInPages = { header: NewPageSheetType, content: BodyNoteSheetType[] }[];

export type SummaryWorksheetsInPages = { header: NewPageSheetType, content: BasicSheetType[] }[];
