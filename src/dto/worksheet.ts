import { BodyNoteSheetType, FileState } from '../types';
import { DocumentMembersResponseDTO, DocumentUserResponseDTO } from './entity';
import { UserBasicInfoResponseDTO } from './user';

export interface WorksheetSummaryListResponseDTO {
  name: string,
  description: string,
  state: FileState,
  key: string,
  isSolvable: boolean,
  updatedAt: Date,
  user: DocumentUserResponseDTO,
  owner: UserBasicInfoResponseDTO,
}

export interface WorksheetDataResponseDTO extends WorksheetSummaryListResponseDTO {
  content: BodyNoteSheetType[],
  members: DocumentMembersResponseDTO,
}
