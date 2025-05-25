import { EntityMembers } from './entity';
import { BasicWorksheetType, BodyWorksheetType, NewPageSheetType } from './sheet';

export interface WorksheetBaseDocument {
  key: string,
  folderId: string,
  name: string,
  description: string,
  content: BodyWorksheetType[],
  isSolvable: boolean,
  automaticFeedback: boolean,
  members: EntityMembers,
}

export type WorksheetsInPages = { header: NewPageSheetType, content: BodyWorksheetType[] }[];

export type SummaryWorksheetsInPages = { header: NewPageSheetType, content: BasicWorksheetType[] }[];
