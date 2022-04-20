import {
  ProblemMode,
  ProblemType,
  ProblemVerdict,
  ProgrammingLanguage,
  SubmissionRunStatus,
  TestCaseRunResultByGroupType,
  TestCaseRunResultType, CompilationRunResultType,
} from '../types';

export interface SubmissionResponseDTO {
  submitId: string,
  language: ProgrammingLanguage,
  timestamp: number,
  memoryUsed: number,
  timeUsed: number,
  verdict: ProblemVerdict,
  points: number, // default: 0
  status: SubmissionRunStatus,
  // permissions
  canViewSourceCode: boolean, // foreign
  // problem
  problemKey: number,
  problemName: string, // foreign
  problemMode: ProblemMode, // foreign
  problemType: ProblemType, // foreign
  problemTimeLimit: number, // foreign
  problemMemoryLimit: number, // foreign
  // User
  userNickname: string, // foreign
  userImageUrl: string, // foreign
  // contest data or empty string
  contestKey: string,
  contestName: string, // foreign
  contestProblemIndex: string,
}

export interface SubmitResponseDTO extends SubmissionResponseDTO{
  sourceCode: string,
  verdictByGroups: { [key: number]: TestCaseRunResultByGroupType },
  testCaseResults: TestCaseRunResultType[],
  compilationResult: CompilationRunResultType,
}
