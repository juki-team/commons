import type {
  CodeLanguage,
  EntityState,
  ProblemScoringMode,
  ProblemType,
  ProblemVerdict,
  SubmissionRunStatus,
} from '../enums/index.js';
import type { ContestUser, DataLog } from '../types/index.js';
import type { EntityOrganizationSummaryListResponseDto, EntityOrganizationSystemSummaryListResponseDto } from './entity.js';
import type { ProblemJudgeSummaryListResponseDto } from './problem.js';
import type { UserOrganizationBasicInfoResponseDto } from './user.js';

export interface SubmissionProblemSummaryListResponseDto {
  isAdministrator: boolean;
  isManager: boolean;
  key: string;
  name: string;
  scoringMode: ProblemScoringMode;
  type: ProblemType;
  timeLimit: number;
  memoryLimit: number;
  organization: EntityOrganizationSummaryListResponseDto;
  judge: ProblemJudgeSummaryListResponseDto;
}

export interface SubmissionContestSummaryListResponseDto {
  key: string; // foreign
  name: string; // foreign
  settingsStartsAt: number;
  isManager: boolean;
  problemIndex: string;
  problemColor: string;
  organization: EntityOrganizationSummaryListResponseDto;
  isFrozen: boolean;
  isQuiet: boolean;
  isUpsolving: boolean;
}

export interface SubmissionSummaryListResponseDto {
  submitId: string;
  language: CodeLanguage;
  timestamp: number;
  memoryUsed: number;
  timeUsed: number;
  verdict: ProblemVerdict;
  points: number; // default: 0
  status: SubmissionRunStatus;
  problem: SubmissionProblemSummaryListResponseDto;
  user: UserOrganizationBasicInfoResponseDto & {
    canViewSourceCode: boolean; // foreign
    // canViewOutputDiff: boolean, // foreign
  }; // foreign
  // contest data or empty string
  contest: SubmissionContestSummaryListResponseDto | null;
  hiddenSubmission: boolean;
  hiddenVerdict: boolean;
  processedCases: {
    samples: {
      total: number;
      processed: number;
    };
    tests: {
      total: number;
      processed: number;
    };
  };
  organization: EntityOrganizationSummaryListResponseDto;
}

export interface SubmissionProblemSystemSummaryListResponseDto extends SubmissionProblemSummaryListResponseDto {
  id: string;
}

export interface SubmissionContestSystemSummaryListResponseDto extends SubmissionContestSummaryListResponseDto {
  id: string;
  user: ContestUser;
}

export interface SubmissionSystemSummaryListResponseDto extends SubmissionSummaryListResponseDto {
  problem: SubmissionProblemSystemSummaryListResponseDto;
  contest: SubmissionContestSystemSummaryListResponseDto | null;
  organization: EntityOrganizationSystemSummaryListResponseDto;
  createdAt: number;
  updatedAt: number;
  state: EntityState;
}

export type TestCaseResult = DataLog & {
  err: string;
  verdict: ProblemVerdict;
  diff: string;
  croppedDiff: boolean;
  group: number;
  points: number; // Used by PARTIAL mode problems
  testCaseKey: string;
};

export type VerdictByGroups = {
  [key: number]: Omit<TestCaseResult, 'err' | 'diff' | 'croppedDiff'>;
};

export type CompilationResult = DataLog & {
  err: string;
  success: boolean;
};

export interface SubmissionDataResponseDto extends SubmissionSummaryListResponseDto {
  judgmentTime: number;
  sourceCode: string;
  verdictByGroups: VerdictByGroups;
  testCaseResults: TestCaseResult[];
  compilationResult: CompilationResult;
  runId: string;
}
