import { SheetType } from '../types';

export interface CreateSheetDTO {
  title: string,
  description: string,
  body: SheetType[],
}

export interface SheetSummaryListResponseDTO {
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
  body: SheetType[],
}
