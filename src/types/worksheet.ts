import { EntityMembers } from './entity';
import { Theme } from './prisma';
import { BasicWorksheetType, BodyWorksheetType, NewPageSheetType } from './sheet';

export enum AspectRatio {
  RATIO_21_9 = '21:9',
  RATIO_20_9 = '20:9',
  RATIO_16_9 = '16:9',
  RATIO_16_10 = '16:10',
  RATIO_3_2 = '3:2',
  RATIO_4_3 = '4:3',
  RATIO_5_4 = '5:4',
  RATIO_1_1 = '1:1',
}

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
    enable: boolean,
    titleBackgroundImage: string,
    backgroundImage: string,
    fontSize: number,
    theme: Theme,
    colorTextHighlight: string,
    aspectRatio: AspectRatio,
  },
}

export type WorksheetsInPages = { header: NewPageSheetType, content: BodyWorksheetType[] }[];

export type SummaryWorksheetsInPages = { header: NewPageSheetType, content: BasicWorksheetType[] }[];
