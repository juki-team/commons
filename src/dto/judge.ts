import type { JudgeBaseDocument } from '../types/index.js';

export interface JudgeDataResponseDto
  extends Omit<JudgeBaseDocument, 'getProblemUrl' | 'getUserSubmissionsUrl' | 'getLoginUrl' | 'getSubmitUrl'> {}

export interface JudgeSummaryListResponseDto
  extends Omit<
    JudgeBaseDocument,
    'getProblemUrl' | 'getUserSubmissionsUrl' | 'getSubmissionUrl' | 'getLoginUrl' | 'getProfileUrl' | 'getSubmitUrl'
  > {}

export interface JudgeSystemSummaryListResponseDto extends JudgeSummaryListResponseDto {
  id: string;
  createdAt: number;
  updatedAt: number;
  getLoginUrl: string;
  getProfileUrl: string;
  getSubmitUrl: string;
  getSubmissionUrl: string;
  getProblemUrl: string;
  getUserSubmissionsUrl: string;
}
