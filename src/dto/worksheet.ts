import { BasicSheetType, BodyNoteSheetType, NewPageSheetType, WorksheetBaseDocument } from '../types';
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
  content: { header: NewPageSheetType, content: BasicSheetType[] }[],
  user: WorksheetUserResponseDTO,
  owner: UserBasicInfoResponseDTO,
}

export interface WorksheetDataResponseDTO extends Omit<WorksheetSummaryListResponseDTO, 'content'> {
  folderId: string,
  content: BodyNoteSheetType[],
  members: DocumentMembersResponseDTO,
}

export interface UpsertWorksheetDTO extends Omit<WorksheetBaseDocument, 'members' | 'key'> {
  members: DocumentMembersDTO,
}
