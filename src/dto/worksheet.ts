import { BodyNoteSheetType, WorksheetBaseDocument } from '../types';
import { DocumentMembersDTO, DocumentMembersResponseDTO, DocumentUserResponseDTO } from './entity';
import { UserBasicInfoResponseDTO } from './user';

export interface WorksheetSummaryListResponseDTO extends Omit<WorksheetBaseDocument, 'folderId' | 'content' | 'members'> {
  key: string,
  updatedAt: Date,
  user: DocumentUserResponseDTO,
  owner: UserBasicInfoResponseDTO,
}

export interface WorksheetDataResponseDTO extends WorksheetSummaryListResponseDTO {
  content: BodyNoteSheetType[],
  members: DocumentMembersResponseDTO,
}

export interface PostWorksheetDTO extends Omit<WorksheetBaseDocument, 'members'> {
  members: DocumentMembersDTO,
}

export interface PutWorksheetDTO extends PostWorksheetDTO {
  key: string,
}

export interface UpsertWorksheetDTO extends PostWorksheetDTO, PutWorksheetDTO {
}
