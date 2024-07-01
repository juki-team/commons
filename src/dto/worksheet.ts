import { BodyNoteSheetType, SummaryWorksheetsInPages, WorksheetBaseDocument } from '../types';
import { DocumentMembersDTO, DocumentMembersResponseDTO } from './entity';
import { UserBasicInfoResponseDTO } from './user';

export interface WorksheetUserResponseDTO {
  isOwner: boolean,
  isManager: boolean,
  isSpectator: boolean,
}


export interface WorksheetSummaryListResponseDTO extends Omit<WorksheetBaseDocument, 'folderId' | 'content' | 'members' | 'isSolvable'> {
  key: string,
  updatedAt: Date,
  content: SummaryWorksheetsInPages,
  user: WorksheetUserResponseDTO,
  owner: UserBasicInfoResponseDTO,
}

export interface WorksheetDataResponseDTO extends Omit<WorksheetSummaryListResponseDTO, 'content'> {
  folderId: string,
  isSolvable: boolean,
  content: BodyNoteSheetType[],
  members: DocumentMembersResponseDTO,
}

export interface UpsertWorksheetDTO extends Omit<WorksheetBaseDocument, 'members' | 'key'> {
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
