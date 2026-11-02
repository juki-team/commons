import {
  EntityState,
  JudgeBaseDocument,
  ProblemBaseDocument,
  ProblemScoringMode,
  ProblemSettings,
  ProblemStatement,
  ProblemType,
  ProblemUser,
  TextLanguage,
} from '../types/index.js';
import { EntityMembersDto, EntityMembersResponseDto } from './entity.js';
import { EntityOwnerSystemSummaryListResponseDto, UserOrganizationBasicInfoResponseDto } from './user.js';

export interface ProblemJudgeSummaryListResponseDto extends Pick<JudgeBaseDocument, 'isExternal' | 'isSubmitSupported' | 'name' | 'key'> {
  isCustom: boolean,
  isMain: boolean,
}

export interface EntityOrganizationSummaryListResponseDto {
  key: string,
}

export interface ProblemBasicSummaryListResponseDto {
  organization: EntityOrganizationSummaryListResponseDto,
  judge: ProblemJudgeSummaryListResponseDto,
  key: string,
  name: string,
  shortname: string,
  tags: string[],
  settings: {
    scoringMode: ProblemScoringMode,
    type: ProblemType,
  },
  members: EntityMembersResponseDto,
  externalUrl: string,
}

export interface ProblemSummaryListResponseDto extends ProblemBasicSummaryListResponseDto {
  user: ProblemUser,
  owner: UserOrganizationBasicInfoResponseDto,
}

export interface ProblemDataResponseDto extends ProblemSummaryListResponseDto {
  author: string,
  statement: ProblemStatement,
  editorial: TextLanguage,
  settings: ProblemSettings,
  ownerNickname: string,
  state: EntityState,
}

export interface ProblemJudgeSystemSummaryListResponseDto extends ProblemJudgeSummaryListResponseDto {
  name: string,
  id: string,
}

export interface EntityOrganizationSystemSummaryListResponseDto extends EntityOrganizationSummaryListResponseDto {
  name: string,
  id: string,
}

export interface ProblemSystemSummaryListResponseDto extends ProblemSummaryListResponseDto {
  state: EntityState,
  id: string,
  owner: EntityOwnerSystemSummaryListResponseDto,
  judge: ProblemJudgeSystemSummaryListResponseDto,
  organization: EntityOrganizationSystemSummaryListResponseDto,
  createdAt: number,
  updatedAt: number,
}

export interface ProblemTestCaseResponse {
  testCaseKey: string,
  groups: number[],
  inputFileSize: number,
  inputFileLastModified: Date,
  outputFileSize: number,
  outputFileLastModified: Date,
}

export interface ProblemTestCasesResponseDto extends Array<ProblemTestCaseResponse> {
}

export interface UpsertProblemDto extends Omit<ProblemBaseDocument, 'testCases' | 'testCasesUpdatedAt' | 'key' | 'members' | 'judgeId'> {
  members: EntityMembersDto,
}
