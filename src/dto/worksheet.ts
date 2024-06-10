import { BodyNoteSheetType, WorksheetBaseDocument } from '../types';
import { DocumentMembersDTO, DocumentMembersResponseDTO, DocumentUserResponseDTO } from './entity';
import { UserBasicInfoResponseDTO } from './user';

export interface WorksheetUserResponseDTO {
  isOwner: boolean,
  isManager: boolean,
  isSpectator: boolean,
}

export interface WorksheetSummaryListResponseDTO extends Omit<WorksheetBaseDocument, 'folderId' | 'content' | 'members'> {
  key: string,
  updatedAt: Date,
  user: WorksheetUserResponseDTO,
  owner: UserBasicInfoResponseDTO,
}

export interface WorksheetDataResponseDTO extends WorksheetSummaryListResponseDTO {
  folderId: string,
  content: BodyNoteSheetType[],
  members: DocumentMembersResponseDTO,
}

export interface WorksheetCreateResponseDTO extends Pick<WorksheetBaseDocument, 'key'> {
}

export interface UpsertWorksheetDTO extends Omit<WorksheetBaseDocument, 'members' | 'key'> {
  members: DocumentMembersDTO,
}
