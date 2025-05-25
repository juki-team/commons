import { BodyWorksheetType, SummaryWorksheetsInPages, WorksheetBaseDocument } from '../types';
import { DocumentMembersDTO, DocumentMembersResponseDTO } from './entity';
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
  isSolvable: boolean,
  content: BodyWorksheetType[],
  members: DocumentMembersResponseDTO,
}

export interface UpsertWorksheetDTO extends Omit<WorksheetBaseDocument, 'members' | 'key' | 'state'> {
  members: DocumentMembersDTO,
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
