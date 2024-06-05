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
  folderId: string,
  content: BodyNoteSheetType[],
  members: DocumentMembersResponseDTO,
}

export interface UpsertWorksheetDTO extends Omit<WorksheetBaseDocument, 'members' | 'key'> {
  members: DocumentMembersDTO,
}
