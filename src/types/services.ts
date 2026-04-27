import type { CodeLanguage, ErrorCode, HTTPMethod } from '../enums/index.js';

export type ApiError = {
  code: ErrorCode;
  detail: string;
  message: string;
};

export type ErrorResponse = {
  success: false;
  message: string;
  errors: ApiError[];
};

export type ContentResponse<T> = {
  success: true;
  message: string;
  content: T;
};

export type ContentsMeta = {
  page: number;
  size: number;
  total: number;
  sort: { field: string; order: 'asc' | 'desc' }[];
  filter: Record<string, unknown>;
};

export type ContentsResponse<T> = {
  success: true;
  message: string;
  contents: T[];
  meta: ContentsMeta;
};

export type RunnerNextRequest = { type: 'request'; body: string; method: HTTPMethod; url: string };

export type RunnerNextQueue = {
  type: 'queue';
  messageBody: string;
  messageGroupId: string;
  messageDeduplicationId: string;
};

export type RunnerNext = RunnerNextRequest | RunnerNextQueue;

export type RunCommand = {
  commandLine: string;
  inputFilePath: string;
  outputFilePath: string;
  errorFilePath: string;
  logFilePath: string;
  folderPath: string;
  timeLimit: number;
  memoryLimit: number;
  lockFilePath?: string;
  endFilePath?: string;
  rawExecution: boolean;
  isolated: boolean;
  next?: RunnerNext;
};

export type RunnerSQSMessageBody = {
  executions: RunCommand[];
  next?: RunnerNext;
};

export type Case = { caseKey: string; groups: number[] };

export type ProblemTestCase = { testCaseKey: string; groups: number[] };
export type ProblemSampleCase = { input: string; output: string };

// export type JudgingProblemDataType = {
//   problemId: string,
//   problemKey: string,
//   problemType: ProblemType,
//   problemTimeLimit: number,
//   problemMemoryLimit: number,
//   problemWithPE: boolean,
//   problemScoringMode: ProblemScoringMode,
//   problemPointsByGroups: ProblemSettingsPointsByGroups,
//   problemSampleCases: ProblemSampleCase[],
//   problemTestCases: ProblemTestCase[],
//   problemEvaluatorSource: string,
// }

// export type JudgingUserDataType = {
//   userId: string,
//   userNickname: string,
// }

// export type JudgingOrganizationDataType = {
//   organizationId: string,
//   // organizationHighPerformanceRunnerTaskDefinition: string,
//   // organizationHighPerformanceRunnerMinTasks: number,
//   // organizationHighPerformanceRunnerMaxTasks: number,
//   // organizationLowPerformanceRunnerTaskDefinition: string,
//   // organizationLowPerformanceRunnerMinTasks: number,
//   // organizationLowPerformanceRunnerMaxTasks: number,
// }

// export type JudgingContestDataType = {
//   contestId: string,
// }

export type JudgingFile = { language: CodeLanguage; fullFileName: string };
