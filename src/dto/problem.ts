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
}

export interface ProblemResponseDTO extends ProblemSummaryListResponseDTO {
  author: string,
  statement: ProblemStatementType,
  editorial: TextLanguageType,
  settings: ProblemSettingsType,
  sampleCases: ProblemSampleCasesType,
  ownerNickname: string,
  user: ProblemUserType,
}

export interface ProblemTestCaseResponse {
  testCaseId?: number,
  testCaseKey?: string,
  groups: number[],
  inputFileSize: number,
  outputFileSize: number,
}

export interface ProblemTestCasesResponseDTO extends Array<ProblemTestCaseResponse> {}

