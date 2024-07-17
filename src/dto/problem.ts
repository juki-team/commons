import {
  EntityState,
  Judge,
  ProblemBaseDocument,
  ProblemScoringMode,
  ProblemSettingsType,
  ProblemStatementType,
  ProblemType,
  ProblemUserType,
  TextLanguageType,
} from '../types';
import { DocumentMembersDTO, DocumentMembersResponseDTO } from './entity';
import { EntityOwnerSummaryListResponseDTO, EntityOwnerSystemSummaryListResponseDTO } from './user';

export interface ProblemJudgeSummaryListResponseDTO {
  key: Judge | string,
  name: string,
  isCustom: boolean,
}

export interface EntityCompanySummaryListResponseDTO {
  key: string,
}

export interface ProblemSummaryListResponseDTO {
  company: EntityCompanySummaryListResponseDTO,
  judge: ProblemJudgeSummaryListResponseDTO,
  key: string,
  name: string,
  tags: string[],
  user: ProblemUserType,
  owner: EntityOwnerSummaryListResponseDTO,
  settings: {
    scoringMode: ProblemScoringMode,
    type: ProblemType,
  }
}

export interface ProblemDataResponseDTO extends ProblemSummaryListResponseDTO {
  author: string,
  statement: ProblemStatementType,
  editorial: TextLanguageType,
  settings: ProblemSettingsType,
  ownerNickname: string,
  members: DocumentMembersResponseDTO,
}

export interface ProblemJudgeSystemSummaryListResponseDTO extends ProblemJudgeSummaryListResponseDTO {
  name: string,
  id: string,
}

export interface EntityCompanySystemSummaryListResponseDTO extends EntityCompanySummaryListResponseDTO {
  name: string,
  id: string,
}

export interface ProblemSystemSummaryListResponseDTO extends ProblemSummaryListResponseDTO {
  state: EntityState,
  id: string,
  owner: EntityOwnerSystemSummaryListResponseDTO,
  judge: ProblemJudgeSystemSummaryListResponseDTO,
  company: EntityCompanySystemSummaryListResponseDTO,
  creationTimestamp: number,
  updateTimestamp: number,
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

export interface UpsertProblemDTO extends Omit<ProblemBaseDocument, 'testCases' | 'testCasesUpdatedAtTimestamp' | 'key' | 'members' | 'judgeId'> {
  members: DocumentMembersDTO,
}
