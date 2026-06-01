import type { BodyWorksheet, SummaryWorksheetsInPages, WorksheetBaseDocument } from '../types/index.js';
import type { EntityMembersDto, EntityMembersResponseDto } from './entity.js';
import type { UserOrganizationBasicInfoResponseDto } from './user.js';

export interface WorksheetUserResponseDto {
  isOwner: boolean;
  isManager: boolean;
  isSpectator: boolean;
}

export interface WorksheetSummaryListResponseDto extends Pick<WorksheetBaseDocument, 'key' | 'name' | 'description'> {
  updatedAt: number;
  content: SummaryWorksheetsInPages;
  user: WorksheetUserResponseDto;
  owner: UserOrganizationBasicInfoResponseDto;
}

export interface WorksheetDataResponseDto extends Omit<WorksheetSummaryListResponseDto, 'content'> {
  folderId: string;
  content: BodyWorksheet[];
  members: EntityMembersResponseDto;
  quiz: WorksheetBaseDocument['quiz'];
  slides: WorksheetBaseDocument['slides'];
}

export interface UpsertWorksheetDto extends Omit<WorksheetBaseDocument, 'members' | 'key' | 'state'> {
  members: EntityMembersDto;
}

export interface WorksheetsProgressByUsersResponseDto {
  [key: string]: {
    [key: string]: {
      pages: { totalPoints: number; points: number; percent: number; worksheetPercent: number }[];
      percent: number;
      points: number;
      totalPoints: number;
    };
  };
}
