import { ProblemMode, ProblemType, ProblemVerdict, ProgrammingLanguage, SubmissionRunStatus, VerdictByGroupType } from '../types';

export interface SubmissionResponseDTO {
  submitId: string,
  timestamp: number,
  language: ProgrammingLanguage,
  memoryUsed: number,
  timeUsed: number,
  verdict: ProblemVerdict,
  verdictByGroups: { [key: number]: VerdictByGroupType },
  status: SubmissionRunStatus,
  problemKey: number,
  // permissions
  canViewSourceCode: boolean, // foreign
  // problem
  problemName: string, // foreign
  problemMode: ProblemMode, // foreign
  problemType: ProblemType, // foreign
  problemTimeLimit: number, // foreign
  problemMemoryLimit: number, // foreign
  // User
  userImageUrl: string, // foreign
  userNickname: string, // foreign
  // contest data or empty string
  contestId: string,
  contestName: string, // foreign
  contestProblemIndex: string,
  submitPoints: number, // default: 0
}
