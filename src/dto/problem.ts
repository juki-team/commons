import {
  EntityAccess,
  EntityState,
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
  key: string,
  name: string,
  isCustom: boolean,
  isExternal: boolean,
  isMain: boolean,
}

export interface EntityCompanySummaryListResponseDTO {
  key: string,
}

export interface ProblemBasicSummaryListResponseDTO {
  company: EntityCompanySummaryListResponseDTO,
  judge: ProblemJudgeSummaryListResponseDTO,
  key: string,
  name: string,
  tags: string[],
  settings: {
    scoringMode: ProblemScoringMode,
    type: ProblemType,
  },
  members: {
    access: EntityAccess,
  }
}

export interface ProblemSummaryListResponseDTO extends ProblemBasicSummaryListResponseDTO {
  user: ProblemUserType,
  owner: EntityOwnerSummaryListResponseDTO,
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
