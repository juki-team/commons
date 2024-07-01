import { EntityMembers, EntityState } from './entity';
import { BodyNoteSheetType, NewPageSheetType } from './sheet';

export enum WorksheetState {
  RELEASED = EntityState.RELEASED,
  IN_DRAFT = EntityState.IN_DRAFT,
  ARCHIVED = EntityState.ARCHIVED,
}

export interface WorksheetBaseDocument {
  key: string,
  folderId: string,
  name: string,
  description: string,
  content: BodyNoteSheetType[],
  isSolvable: boolean,
  state: WorksheetState,
  members: EntityMembers,
}

export type WorksheetsInPages = { header: NewPageSheetType, content: BodyNoteSheetType[] }[];
