import {
  EntityMembers,
  Judge,
  ProblemScoringMode,
  ProblemSettingsType,
  ProblemState,
  ProblemStatementType,
  ProblemTestCaseType,
  ProblemType,
  ProblemUserType,
  TextLanguageType,
} from '../types';
import { DocumentMembersResponseDTO } from './entity';
import { UserBasicInfoResponseDTO } from './user';

export interface ProblemSummaryListResponseDTO {
  judge: Judge,
  key: string,
  name: string,
  tags: string[],
  user: ProblemUserType,
  owner: UserBasicInfoResponseDTO,
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
  members: DocumentMembersResponseDTO,
}

export interface ProblemSystemResponseDTO extends ProblemResponseDTO {
  state: ProblemState,
  id: string,
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

export interface ProblemBaseDocument {
  state: ProblemState,
  name: string,
  author: string,
  settings: ProblemSettingsType,
  tags: string[],
  statement: ProblemStatementType,
  editorial: TextLanguageType,
  judge: Judge,
  key: string,
  testCases: ProblemTestCaseType[],
  testCasesUpdatedAtTimestamp: number,
  members: EntityMembers,
}

export interface UpsertProblemDTO extends Omit<ProblemBaseDocument, 'testCases' | 'testCasesUpdatedAtTimestamp' | 'state'> {
}
