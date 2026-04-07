import type { ProblemVerdict } from '../prisma/enums/index.js';
import type { CodeLanguage } from './commons.js';
import type { DataLog } from './submission.js';

export type JudgeLanguage = {
  value: string;
  label: string;
  enabled: boolean;
  associatedLanguage: CodeLanguage;
};

export interface JudgeBaseDocument {
  key: string | Judge;
  name: string;
  languages: JudgeLanguage[];
  problemTags: string[];
  keyPrefix: string;
  isExternal: boolean;
  isSubmitSupported: boolean;
  logo: string;
  logoSize: [number, number];
  url: string;
  getLoginUrl: string;
  getProfileUrl: string; // getProfileUrl: (userNickname: string) => ''
  getSubmitUrl: string;
  getSubmissionUrl: string; // getSubmissionUrl: (problemKey: string, submissionId: string, username: string, submissionRunId: string) => ''
  getProblemUrl: string;
  getUserSubmissionsUrl: string;
  submissionsWithHighPriority: boolean;
}

export enum Judge {
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

export enum RunnerType {
  HIGH_PERFORMANCE = 'HIGH_PERFORMANCE',
  LOW_PERFORMANCE = 'LOW_PERFORMANCE',
}

export type TestCaseVerdict = DataLog & { verdict: ProblemVerdict };
