import {
  Judge,
  ProblemSampleCasesType,
  ProblemSettingsType,
  ProblemStatementType,
  ProblemStatus,
  ProblemUserType,
  TextLanguageType,
} from '../types';

export interface CreateProblemDTO {
  status: ProblemStatus,
  name: string,
  author: string,
  settings: ProblemSettingsType,
  tags: string[],
  sampleCases: ProblemSampleCasesType,
  statement: ProblemStatementType,
  editorial: TextLanguageType,
}

export interface ProblemSummaryListResponseDTO {
  judge: Judge,
  key: string,
  name: string,
  tags: string[],
  status: ProblemStatus,
  user: ProblemUserType,
}

export interface ProblemResponseDTO extends ProblemSummaryListResponseDTO {
  author: string,
  statement: ProblemStatementType,
  editorial: TextLanguageType,
  settings: ProblemSettingsType,
  sampleCases: ProblemSampleCasesType,
  ownerNickname: string,
}

export interface ProblemTestCaseResponse {
  testCaseKey: string,
  groups: number[],
  inputFileSize: number,
  inputFileLastModified: Date,
  outputFileSize: number,
  outputFileLastModified: Date,
}

export interface ProblemTestCasesResponseDTO extends Array<ProblemTestCaseResponse> {}
