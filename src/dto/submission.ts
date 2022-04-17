import { ProblemVerdict, ProgrammingLanguage, SubmissionRunStatus, VerdictByGroupType } from '../types';

export interface SubmissionResponseDTO {
  submitId: string,
  timestamp: number,
  language: ProgrammingLanguage,
  memoryUsed: number,
  timeUsed: number,
  verdict: ProblemVerdict,
  verdictByGroups: { [key: number]: VerdictByGroupType },
  submitPoints: number,
  status: SubmissionRunStatus,
  // permissions
  canViewSourceCode: boolean,
  // User
  userImageUrl: string,
  userNickname: string,
  // contest data or empty string
  contestProblemIndex: string,
  contestId: string,
}
