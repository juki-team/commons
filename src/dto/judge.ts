import { JudgeBaseDocument } from '../types';

export interface JudgeDataResponseDTO extends JudgeBaseDocument {
}

export interface JudgeSummaryListResponseDTO extends JudgeBaseDocument {
}

export interface JudgeSystemSummaryListResponseDTO extends JudgeSummaryListResponseDTO {
  id: string,
  creationTimestamp: number,
  updateTimestamp: number,
}
