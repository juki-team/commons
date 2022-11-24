import { ProgrammingLanguage } from './commons';
import { ProblemMode, ProblemSettingsPointsByGroupsType, ProblemType } from './problems';

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
  ERR0601 = 'ERR0601',
  ERR0602 = 'ERR0602',
  ERR0603 = 'ERR0603',
  // Course Errors ERR07XXX',
  ERR9900 = 'ERR9900',
  ERR9910 = 'ERR9910',
  ERR9911 = 'ERR9911',
  ERR9912 = 'ERR9912',
  ERR9913 = 'ERR9913',
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

export type RunnerNextQueueType = { type: 'queue', messageBody: string, messageGroupId: string, messageDeduplicationId: string };

export type RunCommandType = { commandLine: string, inputFilePath: string, outputFilePath: string, errorFilePath: string, logFilePath: string, folderPath: string, timeLimit: number, memoryLimit: number, lockFilePath?: string, endFilePath?: string };

export type RunnerSQSMessageBodyType = RunCommandType & { next: RunnerNextQueueType | RunnerNextRequestType };

export enum JudgingState {
  COMPILED = 'COMPILED',
  TEST_CASE_COMPLETED = 'TEST_CASE_COMPLETED',
}

export type CaseType = { caseKey: string, groups: number[] };

export type ProblemTestCaseType = { testCaseKey: string, groups: number[] };
export type ProblemSampleCaseType = { input: string, output: string };

export type JudgingProblemDataType = {
  problemId: string,
  problemType: ProblemType,
  problemTimeLimit: number,
  problemMemoryLimit: number,
  problemWithPE: boolean,
  problemMode: ProblemMode,
  problemPointsByGroups: ProblemSettingsPointsByGroupsType,
  problemSampleCases: ProblemSampleCaseType[],
  problemTestCases: ProblemTestCaseType[],
  problemEvaluatorSource: string,
}

export type JudgingTestCaseCompletedBodyType = JudgingProblemDataType & {
  runId: string,
  key: string,
  clusterChunkCases: CaseType[][],
  chunkIndex: number,
  sampleCase: boolean,
  isSampleCasesEmpty: boolean,
  language: ProgrammingLanguage,
}

export type JudgingCompiledBodyType = JudgingProblemDataType & {
  sourceFileName: string,
  runId: string,
  language: ProgrammingLanguage,
};

export type RunnerOutSQSMessageBodyType =
  (JudgingCompiledBodyType & { state: JudgingState.COMPILED, sessionId: string })
  | (JudgingTestCaseCompletedBodyType & { state: JudgingState.TEST_CASE_COMPLETED, sessionId: string });
