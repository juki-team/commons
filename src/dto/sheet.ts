import { SheetStatus, BodySheetType } from '../types';

export interface CreateSheetDTO {
  status: SheetStatus,
  title: string,
  description: string,
  body: BodySheetType[],
}

export interface SheetSummaryListResponseDTO {
  status: SheetStatus,
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
  status: SheetStatus,
  body: BodySheetType[],
}
