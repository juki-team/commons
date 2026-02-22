import {
  CodeLanguage,
  ContestUser,
  DataLog,
  EntityState,
  ProblemScoringMode,
  ProblemType,
  ProblemVerdict,
  SubmissionRunStatus,
} from '../types';
import {
  EntityCompanySummaryListResponseDTO,
  EntityCompanySystemSummaryListResponseDTO,
  ProblemJudgeSummaryListResponseDTO,
} from './problem';
import { UserCompanyBasicInfoResponseDTO } from './user';

export interface SubmissionProblemSummaryListResponseDTO {
  isAdministrator: boolean,
  isManager: boolean,
  key: string,
  name: string,
  scoringMode: ProblemScoringMode,
  type: ProblemType,
  timeLimit: number,
  memoryLimit: number,
  company: EntityCompanySummaryListResponseDTO,
  judge: ProblemJudgeSummaryListResponseDTO,
}

export interface SubmissionContestSummaryListResponseDTO {
  key: string, // foreign
  name: string, // foreign
  settingsStartTimestamp: number,
  isManager: boolean,
  problemIndex: string,
  problemColor: string,
  company: EntityCompanySummaryListResponseDTO,
  isFrozen: boolean,
  isQuiet: boolean,
  isUpsolving: boolean,
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
  hiddenSubmission: boolean,
  hiddenVerdict: boolean,
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
  user: ContestUser,
}

export interface SubmissionSystemSummaryListResponseDTO extends SubmissionSummaryListResponseDTO {
  problem: SubmissionProblemSystemSummaryListResponseDTO,
  contest: SubmissionContestSystemSummaryListResponseDTO | null,
  company: EntityCompanySystemSummaryListResponseDTO,
  creationTimestamp: number,
  updateTimestamp: number,
  state: EntityState,
}

export type TestCaseResult = DataLog & {
  err: string
  verdict: ProblemVerdict,
  diff: string,
  croppedDiff: boolean,
  group: number,
  points: number, // Used by PARTIAL mode problems
  testCaseKey: string,
}

export type VerdictByGroups = {
  [key: number]: Omit<TestCaseResult, 'err' | 'diff' | 'croppedDiff'>
};

export type CompilationResult = DataLog & {
  err: string,
  success: boolean,
};

export interface SubmissionDataResponseDTO extends SubmissionSummaryListResponseDTO {
  judgmentTime: number,
  sourceCode: string,
  verdictByGroups: VerdictByGroups,
  testCaseResults: TestCaseResult[],
  compilationResult: CompilationResult,
  runId: string,
}
