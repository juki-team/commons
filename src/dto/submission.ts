import {
  DataLogType,
  Judge,
  ProblemMode,
  ProblemType,
  ProblemVerdict,
  ProgrammingLanguage,
  SubmissionRunStatus,
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
  canViewOutputDiff: boolean, // foreign
  // problem
  isProblemEditor: boolean,
  problemKey: string,
  problemJudge: Judge,
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
  contestProblemColor: string,
  processedCases: {
    samples: {
      total: number,
      processed: number
    },
    tests: {
      total: number,
      processed: number
    }
  }
}

export type TestCaseResultType = DataLogType & {
  err: string
  verdict: ProblemVerdict,
  diff: string,
  group: number,
  points: number, // Used by PARTIAL mode problems
  testCaseKey: string,
}

export type VerdictByGroupsType = {
  [key: number]: TestCaseResultType
};

export type CompilationResultType = DataLogType & {
  err: string,
  success: boolean,
};

export interface SubmitResponseDTO extends SubmissionResponseDTO {
  judgmentTime: number,
  sourceCode: string,
  verdictByGroups: VerdictByGroupsType,
  testCaseResults: TestCaseResultType[],
  compilationResult: CompilationResultType,
}
