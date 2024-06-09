import {
  Judge,
  ProblemScoringMode,
  ProblemSettingsType,
  ProblemStatementType,
  ProblemStatus,
  ProblemType,
  ProblemUserType,
  TextLanguageType,
} from '../types';

export interface CreateProblemDTO {
  status: ProblemStatus,
  name: string,
  author: string,
  settings: ProblemSettingsType,
  tags: string[],
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
  ownerUserNickname: string,
  settings: {
    mode: ProblemScoringMode,
    type: ProblemType,
  }
}

export interface ProblemResponseDTO extends ProblemSummaryListResponseDTO {
  author: string,
  statement: ProblemStatementType,
  editorial: TextLanguageType,
  settings: ProblemSettingsType,
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

export interface ProblemTestCasesResponseDTO extends Array<ProblemTestCaseResponse> {
}
