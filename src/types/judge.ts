import type { CodeLanguage, Judge, ProblemVerdict } from '../enums/index.js';
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

export type TestCaseVerdict = DataLog & { verdict: ProblemVerdict };
