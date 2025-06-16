import { ObjectIdType, ProgrammingLanguage } from './commons';
import { PrivateHandlerEventType } from './private-handler';
import { ProblemType } from './problems';

export enum ErrorCode {
  // General errors
  ERR400 = 'ERR400',
  ERR401 = 'ERR401',
  ERR403 = 'ERR403',
  ERR404 = 'ERR404',
  ERR405 = 'ERR405',
  ERR500 = 'ERR500',
  // UI general errors
  ERR9997 = 'ERR9997', // 'aborted request'
  ERR9998 = 'ERR9998', // 'error on response'
  ERR9999 = 'ERR9999', // 'service no found'
  // User errors // 'unable update nickname yet', 'User not active'
  ERR0000 = 'ERR0000',
  ERR0010 = 'ERR0010',
  ERR0011 = 'ERR0011',
  ERR0012 = 'ERR0012',
  ERR0013 = 'ERR0013',
  ERR0014 = 'ERR0014',
  ERR0015 = 'ERR0015',
  ERR0016 = 'ERR0016',
  ERR0017 = 'ERR0017',
  ERR0018 = 'ERR0018',
  ERR0019 = 'ERR0019',
  ERR0020 = 'ERR0020',
  ERR0021 = 'ERR0021',
  ERR0022 = 'ERR0022',
  ERR0023 = 'ERR0023',
  ERR0024 = 'ERR0024',
  ERR0050 = 'ERR0050',
  ERR0051 = 'ERR0051',
  ERR0052 = 'ERR0052',
  ERR0053 = 'ERR0053',
  // Problem Errors ERR01XX',
  ERR0100 = 'ERR0100',
  ERR0110 = 'ERR0110',
  ERR0111 = 'ERR0111',
  ERR0112 = ' ERR0112',
  ERR0113 = 'ERR0113',
  ERR0114 = 'ERR0114',
  ERR0115 = 'ERR0115',
  ERR0116 = 'ERR0116',
  ERR0117 = 'ERR0117',
  ERR0118 = 'ERR0118',
  ERR0119 = 'ERR0119',
  ERR0120 = 'ERR0120',
  ERR0121 = 'ERR0121',
  ERR0122 = 'ERR0122',
  // Contest Errors ERR02XX',
  ERR0200 = 'ERR0200',
  // CRUD contest
  ERR0210 = 'ERR0210',
  ERR0211 = 'ERR0211',
  ERR0212 = 'ERR0212',
  ERR0213 = 'ERR0213',
  // permissions contest
  ERR0214 = 'ERR0214',
  ERR0215 = 'ERR0215',
  ERR0216 = 'ERR0216',
  ERR0217 = 'ERR0217',
  ERR0218 = 'ERR0218',
  ERR0219 = 'ERR0219',
  ERR0220 = 'ERR0220',
  // CRUD scoreboard
  ERR0230 = 'ERR0230',
  ERR0231 = 'ERR0231',
  ERR0232 = 'ERR0232',
  ERR0233 = 'ERR0233',
  // permissions scoreboard
  ERR0234 = 'ERR0234',
  ERR0235 = 'ERR0235',
  ERR0236 = 'ERR0236',
  ERR0237 = 'ERR0237',
  
  ERR0240 = 'ERR0240',
  ERR0241 = 'ERR0241',
  ERR0242 = 'ERR0242',
  ERR0243 = 'ERR0243',
  ERR0244 = 'ERR0244',
  ERR0245 = 'ERR0245',
  ERR0246 = 'ERR0246',
  ERR0247 = 'ERR0247',
  // Submission Errors ERR03XXX',
  ERR0300 = 'ERR0300',
  ERR0301 = 'ERR0301',
  ERR0302 = 'ERR0302',
  ERR0303 = 'ERR0303',
  ERR0310 = 'ERR0310',
  ERR0311 = 'ERR0311',
  
  ERR0321 = 'ERR0321',
  
  ERR0331 = 'ERR0331',
  // Utils Errors ERR04XX
  ERR0400 = 'ERR0400', // 'internal server error on utils services'
  ERR0410 = 'ERR0410', // 'empty image'
  ERR0420 = 'ERR0420',
  ERR0421 = 'ERR0421',
  ERR0430 = 'ERR0430',
  ERR0440 = 'ERR0440',
  // Team Errors ERR06XX
  ERR0600 = 'ERR0600',
  ERR0610 = 'ERR0610',
  ERR0611 = 'ERR0611',
  ERR0612 = 'ERR0612',
  ERR0613 = 'ERR0613',
  ERR0614 = 'ERR0614',
  ERR0615 = 'ERR0615',
  ERR0616 = 'ERR0665',
  ERR0617 = 'ERR0617',
  ERR0618 = 'ERR0618',
  ERR0619 = 'ERR0619',
  // Course Errors ERR07XXX',
  // Sheets Errors ERR08XXX',
  ERR0800 = 'ERR0800',
  ERR0810 = 'ERR0810',
  ERR0811 = 'ERR0811',
  ERR0812 = 'ERR0812',
  ERR0813 = 'ERR0813',
  ERR0814 = 'ERR0814',
  ERR0815 = 'ERR0815',
  ERR0816 = 'ERR0865',
  ERR0817 = 'ERR0817',
  ERR0818 = 'ERR0818',
  ERR0819 = 'ERR0819',
  ERR0820 = 'ERR0820',
  // Company Errors ERR99XXX',
  ERR9900 = 'ERR9900',
  ERR9910 = 'ERR9910',
  ERR9911 = 'ERR9911',
  ERR9912 = 'ERR9912',
  ERR9913 = 'ERR9913',
  ERR9914 = 'ERR9914',
  ERR9915 = 'ERR9915',
  ERR9916 = 'ERR9916',
  ERR9917 = 'ERR9917',
}

export type ErrorType = {
  code: ErrorCode,
  detail: string,
  message: string,
}

export type ErrorResponseType = {
  success: false,
  message: string,
  errors: ErrorType[],
}

export type ContentResponseType<T> = {
  success: true,
  message: string,
  content: T,
}

export type ContentsMetaType = {
  page: number,
  size: number,
  totalElements: number,
  sort: { [key: string]: number }[],
}

export type ContentsResponseType<T> = {
  success: true,
  message: string,
  contents: T[],
  meta: ContentsMetaType,
}

export enum LogLevel {
  FATAL = 'FATAL',
  ERROR = 'ERROR',
  WARN = 'WARN',
  INFO = 'INFO',
  DEBUG = 'DEBUG',
  TRACE = 'TRACE',
}

export enum HTTPMethod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type RunnerNextRequestType = { type: 'request', body: string, method: HTTPMethod, url: string }

export type RunnerNextQueueType = {
  type: 'queue',
  messageBody: string,
  messageGroupId: string,
  messageDeduplicationId: string
};

export type RunnerNextType = RunnerNextRequestType | RunnerNextQueueType;

export type RunCommandType = {
  commandLine: string,
  inputFilePath: string,
  outputFilePath: string,
  errorFilePath: string,
  logFilePath: string,
  folderPath: string,
  timeLimit: number,
  memoryLimit: number,
  lockFilePath?: string,
  endFilePath?: string,
  rawExecution?: boolean,
  isolated: boolean,
  next?: RunnerNextType,
};

export type RunnerSQSMessageBodyType = {
  executions: RunCommandType[],
  next?: RunnerNextType,
};

export enum JudgingState {
  RECEIVED = 'RECEIVED',
  COMPILED = 'COMPILED',
  TEST_CASE_EXECUTED = 'TEST_CASE_EXECUTED',
  TEST_CASE_EVALUATED = 'TEST_CASE_EVALUATED',
  COMPLETED = 'COMPLETED',
}

export type CaseType = { caseKey: string, groups: number[] };

export type ProblemTestCaseType = { testCaseKey: string, groups: number[] };
export type ProblemSampleCaseType = { input: string, output: string };

// export type JudgingProblemDataType = {
//   problemId: string,
//   problemKey: string,
//   problemType: ProblemType,
//   problemTimeLimit: number,
//   problemMemoryLimit: number,
//   problemWithPE: boolean,
//   problemScoringMode: ProblemScoringMode,
//   problemPointsByGroups: ProblemSettingsPointsByGroupsType,
//   problemSampleCases: ProblemSampleCaseType[],
//   problemTestCases: ProblemTestCaseType[],
//   problemEvaluatorSource: string,
// }

// export type JudgingUserDataType = {
//   userId: string,
//   userNickname: string,
// }

// export type JudgingCompanyDataType = {
//   companyId: string,
//   // companyHighPerformanceRunnerTaskDefinition: string,
//   // companyHighPerformanceRunnerMinTasks: number,
//   // companyHighPerformanceRunnerMaxTasks: number,
//   // companyLowPerformanceRunnerTaskDefinition: string,
//   // companyLowPerformanceRunnerMinTasks: number,
//   // companyLowPerformanceRunnerMaxTasks: number,
// }

// export type JudgingContestDataType = {
//   contestId: string,
// }

export type JudgingType = {
  sessionId: ObjectIdType,
  submitId: string,
  runId: string,
  timestamp: number,
  sourceFileName: string,
  isCodeEditorRun: boolean,
  language: ProgrammingLanguage,
  attempts: number,
  // Problem data
  problemTimeLimit: number,
  problemMemoryLimit: number,
  problemSampleCases: ProblemSampleCaseType[],
  problemTestCases: ProblemTestCaseType[],
  problemType: ProblemType,
}

export type JudgingTestCaseExecutedBodyType = JudgingType & {
  type: PrivateHandlerEventType.JUDGING,
  state: JudgingState.TEST_CASE_EXECUTED,
  cases: {
    key: string,
    index: number,
  }[],
  areSampleCases: boolean,
  lastCasesIndex: number,
  clusterChunkCases: CaseType[][],
  chunkIndex: number,
  isSampleCasesEmpty: boolean,
}

export type JudgingTestCaseEvaluatedBodyType = Omit<JudgingTestCaseExecutedBodyType, 'state'> & {
  state: JudgingState.TEST_CASE_EVALUATED,
}

export type JudgingCompiledBodyType = JudgingType & {
  type: PrivateHandlerEventType.JUDGING,
  state: JudgingState.COMPILED,
};

export type JudgingReceivedBodyType = JudgingType & {
  type: PrivateHandlerEventType.JUDGING,
  state: JudgingState.RECEIVED,
  source: string,
};

export type JudgingCompletedBodyType = JudgingType & {
  type: PrivateHandlerEventType.JUDGING,
  state: JudgingState.COMPLETED,
}

export type JudgingPrivateHandlerEventDTO =
  JudgingReceivedBodyType
  | JudgingCompiledBodyType
  | JudgingTestCaseExecutedBodyType
  | JudgingTestCaseEvaluatedBodyType
  | JudgingCompletedBodyType;
