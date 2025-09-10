import { BodyWorksheetType, SummaryWorksheetsInPages, WorksheetBaseDocument } from '../types';
import { EntityMembersDTO, EntityMembersResponseDTO } from './entity';
import { UserCompanyBasicInfoResponseDTO } from './user';

export interface WorksheetUserResponseDTO {
  isOwner: boolean,
  isManager: boolean,
  isSpectator: boolean,
}

export interface WorksheetSummaryListResponseDTO extends Pick<WorksheetBaseDocument, 'key' | 'name' | 'description'> {
  updatedAt: Date,
  content: SummaryWorksheetsInPages,
  user: WorksheetUserResponseDTO,
  owner: UserCompanyBasicInfoResponseDTO,
}

export interface WorksheetDataResponseDTO extends Omit<WorksheetSummaryListResponseDTO, 'content'> {
  folderId: string,
  content: BodyWorksheetType[],
  members: EntityMembersResponseDTO,
  quiz: WorksheetBaseDocument['quiz'],
  slides: WorksheetBaseDocument['slides'],
}

export interface UpsertWorksheetDTO extends Omit<WorksheetBaseDocument, 'members' | 'key' | 'state'> {
  members: EntityMembersDTO,
}

export interface WorksheetsProgressByUsersResponseDTO {
  [key: string]: {
    [key: string]: {
      pages: { totalPoints: number, points: number, percent: number, worksheetPercent: number }[],
      percent: number,
      points: number,
      totalPoints: number,
    }
  };
}
