import { BodySheetType, FileStatus } from '../types';

export interface CreateSheetDTO {
  status: FileStatus,
  title: string,
  description: string,
  body: BodySheetType[],
}

export interface SheetSummaryListResponseDTO {
  status: FileStatus,
  key: string,
  updatedAt: Date,
  title: string,
  description: string,
  ownerUserNickname: string,
  user: {
    isEditor: boolean,
  },
}

export interface SheetResponseDTO extends SheetSummaryListResponseDTO {
  status: FileStatus,
  body: BodySheetType[],
}
