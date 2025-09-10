import { EntityMembers } from './entity';
import { Theme } from './prisma';
import { BasicWorksheetType, BodyWorksheetType, NewPageSheetType } from './sheet';

export interface WorksheetBaseDocument {
  key: string,
  folderId: string,
  name: string,
  description: string,
  content: BodyWorksheetType[],
  members: EntityMembers,
  quiz: {
    enable: boolean,
    automaticFeedback: boolean,
  },
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
