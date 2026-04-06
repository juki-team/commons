import type { EntityMembers } from './entity';
import type { Theme } from './prisma';
import type { BasicWorksheet, BodyWorksheet, NewPageSheet } from './sheet';

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
  key: string;
  folderId: string;
  name: string;
  description: string;
  content: BodyWorksheet[];
  members: EntityMembers;
  quiz: {
    enable: boolean;
    automaticFeedback: boolean;
  };
  slides: {
    enable: boolean;
    titleBackgroundImage: string;
    backgroundImage: string;
    fontSize: number;
    theme: Theme;
    colorTextHighlight: string;
    aspectRatio: AspectRatio;
  };
}

export type WorksheetsInPages = { header: NewPageSheet; content: BodyWorksheet[] }[];

export type SummaryWorksheetsInPages = { header: NewPageSheet; content: BasicWorksheet[] }[];
