import { JudgeBaseDocument } from '../types';

export interface JudgeDataResponseDTO extends Omit<JudgeBaseDocument, 'getProblemUrl' | 'getUserSubmissionsUrl' | 'getSubmissionUrl' | 'getLoginUrl' | 'getProfileUrl' | 'getSubmitUrl'> {
}

export interface JudgeSummaryListResponseDTO extends Omit<JudgeBaseDocument, 'getProblemUrl' | 'getUserSubmissionsUrl' | 'getSubmissionUrl' | 'getLoginUrl' | 'getProfileUrl' | 'getSubmitUrl'> {
}

export interface JudgeSystemSummaryListResponseDTO extends JudgeSummaryListResponseDTO {
  id: string,
  creationTimestamp: number,
  updateTimestamp: number,
  getLoginUrl: string,
  getProfileUrl: string,
  getSubmitUrl: string,
  getSubmissionUrl: string,
  getProblemUrl: string,
  getUserSubmissionsUrl: string,
}
