import { EntityMembers } from './entity';
import { Theme } from './prisma';
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
  slides: {
    titleBackgroundImage: string,
    backgroundImage: string,
    fontSize: number,
    theme: Theme,
    colorTextHighlight: string,
  },
}

export type WorksheetsInPages = { header: NewPageSheetType, content: BodyWorksheetType[] }[];

export type SummaryWorksheetsInPages = { header: NewPageSheetType, content: BasicWorksheetType[] }[];
