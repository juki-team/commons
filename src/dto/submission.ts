import {
  CodeLanguage,
  ContestUserType,
  DataLogType,
  EntityState,
  Judge,
  ProblemScoringMode,
  ProblemType,
  ProblemVerdict,
  SubmissionRunStatus,
} from '../types';
import { EntityCompanySummaryListResponseDTO, EntityCompanySystemSummaryListResponseDTO } from './problem';
import { UserCompanyBasicInfoResponseDTO } from './user';

export interface SubmissionProblemSummaryListResponseDTO {
  isAdministrator: boolean,
  isManager: boolean,
  key: string,
  judgeKey: Judge | string,
  name: string,
  scoringMode: ProblemScoringMode,
  type: ProblemType,
  timeLimit: number,
  memoryLimit: number,
  company: EntityCompanySummaryListResponseDTO,
}

export interface SubmissionContestSummaryListResponseDTO {
  key: string, // foreign
  name: string, // foreign
  problemIndex: string,
  problemColor: string,
  company: EntityCompanySummaryListResponseDTO,
}

export interface SubmissionSummaryListResponseDTO {
  submitId: string,
  language: CodeLanguage,
  timestamp: number,
  memoryUsed: number,
  timeUsed: number,
  verdict: ProblemVerdict,
  points: number, // default: 0
  status: SubmissionRunStatus,
  problem: SubmissionProblemSummaryListResponseDTO,
  user: UserCompanyBasicInfoResponseDTO & {
    canViewSourceCode: boolean, // foreign
    // canViewOutputDiff: boolean, // foreign
  }, // foreign
  // contest data or empty string
  contest: SubmissionContestSummaryListResponseDTO | null,
  processedCases: {
    samples: {
      total: number,
      processed: number
    },
    tests: {
      total: number,
      processed: number
    }
  },
  company: EntityCompanySummaryListResponseDTO,
}

export interface SubmissionProblemSystemSummaryListResponseDTO extends SubmissionProblemSummaryListResponseDTO {
  id: string,
}

export interface SubmissionContestSystemSummaryListResponseDTO extends SubmissionContestSummaryListResponseDTO {
  id: string,
  user: ContestUserType,
}

export interface SubmissionSystemSummaryListResponseDTO extends SubmissionSummaryListResponseDTO {
  problem: SubmissionProblemSystemSummaryListResponseDTO,
  contest: SubmissionContestSystemSummaryListResponseDTO | null,
  company: EntityCompanySystemSummaryListResponseDTO,
  creationTimestamp: number,
  updateTimestamp: number,
  state: EntityState,
}

export type TestCaseResultType = DataLogType & {
  err: string
  verdict: ProblemVerdict,
  diff: string,
  croppedDiff: boolean,
  group: number,
  points: number, // Used by PARTIAL mode problems
  testCaseKey: string,
}

export type VerdictByGroupsType = {
  [key: number]: Omit<TestCaseResultType, 'err' | 'diff' | 'croppedDiff'>
};

export type CompilationResultType = DataLogType & {
  err: string,
  success: boolean,
};

export interface SubmissionDataResponseDTO extends SubmissionSummaryListResponseDTO {
  judgmentTime: number,
  sourceCode: string,
  verdictByGroups: VerdictByGroupsType,
  testCaseResults: TestCaseResultType[],
  compilationResult: CompilationResultType,
  runId: string,
}
