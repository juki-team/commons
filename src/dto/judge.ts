import { JudgeBaseDocument } from '../types';

export interface JudgeDataResponseDTO extends JudgeBaseDocument {
}

export interface JudgeSystemSummaryListResponseDTO extends JudgeBaseDocument {
  id: string,
  creationTimestamp: number,
  updateTimestamp: number,
}
