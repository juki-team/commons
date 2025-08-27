import { CodeLanguage } from './commons';
import { DataLogType } from './submission';

export type JudgeLanguageType = {
  value: string,
  label: string,
  enabled: boolean,
  associatedLanguage: CodeLanguage
};

export interface JudgeBaseDocument {
  key: string | Judge,
  name: string,
  languages: JudgeLanguageType[],
  problemTags: string[],
  keyPrefix: string,
  isExternal: boolean,
  isSubmitSupported: boolean,
  logo: string,
  logoSize: [ number, number ],
  url: string,
  getLoginUrl: string,
  getProfileUrl: string,
  getSubmitUrl: string,
  getSubmissionUrl: string,
  getProblemUrl: string,
  getUserSubmissionsUrl: string,
  submissionsWithHighPriority: boolean,
}

export enum Judge {
  CUSTOMER = 'CUSTOMER',
  JUKI_JUDGE = 'JUKI_JUDGE',
  CODEFORCES = 'CODEFORCES',
  CODEFORCES_GYM = 'CODEFORCES_GYM',
  JV_UMSA = 'JV_UMSA',
  UVA_ONLINE_JUDGE = 'UVA_ONLINE_JUDGE',
  AT_CODER = 'AT_CODER',
  CODECHEF = 'CODECHEF',
  TOPCODER = 'TOPCODER',
  LEETCODE = 'LEETCODE',
}

export enum ProblemVerdict {
  NONE = 'NONE', // No judge
  PENDING = 'PENDING', // Pending
  HIDDEN = 'HIDDEN', // Hidden
  CE = 'CE', // Compilation Error
  RE = 'RE', // Runtime Error
  TLE = 'TLE', // Time Limit Exceded
  MLE = 'MLE', // Memory Limit Exceded
  WA = 'WA', // Wrong Answer
  PE = 'PE', // Presentation Error
  PA = 'PA', // Partial Accepted
  AC = 'AC', // Accepted
}

export enum SubmissionRunStatus {
  NONE = 'NONE',
  RECEIVED = 'RECEIVED',
  COMPILING = 'COMPILING',
  COMPILED = 'COMPILED',
  COMPILATION_ERROR = 'COMPILATION_ERROR',
  FETCHING_TEST_CASES = 'FETCHING_TEST_CASES',
  RUNNING_TEST_CASE = 'RUNNING_TEST_CASE',
  RUNNING_TEST_CASES = 'RUNNING_TEST_CASES',
  RUNNING_SAMPLE_TEST_CASES = 'RUNNING_SAMPLE_TEST_CASES',
  EXECUTED_TEST_CASE = 'EXECUTED_TEST_CASE',
  FAILED_TEST_CASE = 'FAILED_TEST_CASE',
  JUDGING_TEST_CASE = 'JUDGING_TEST_CASE',
  GRADING = 'GRADING',
  FAILED = 'FAILED',
  COMPLETED = 'COMPLETED',
}

export enum RunnerType {
  HIGH_PERFORMANCE = 'HIGH_PERFORMANCE',
  LOW_PERFORMANCE = 'LOW_PERFORMANCE',
}

export type TestCaseVerdict = DataLogType & { verdict: ProblemVerdict };
