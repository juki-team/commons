import type { EntityAccess, EntityState, ProblemScoringMode, ProblemType } from '../enums/index.js';
import type {
  JudgeBaseDocument,
  ProblemBaseDocument,
  ProblemSettings,
  ProblemStatement,
  ProblemUserDto,
  TextLanguage,
} from '../types/index.js';
import type { EntityMembersDto, EntityOwnerSystemSummaryListResponseDto, EntitySharingResponseDto } from './entity.js';
import type { UserOrganizationBasicInfoResponseDto } from './user.js';

export interface ProblemJudgeSummaryListResponseDto
  extends Pick<JudgeBaseDocument, 'isExternal' | 'isSubmitSupported' | 'name' | 'key'> {
  isMain: boolean;
}

export interface ProblemBasicSummaryListResponseDto {
  judge: ProblemJudgeSummaryListResponseDto;
  key: string;
  name: string;
  shortname: string;
  tags: string[];
  settings: {
    scoringMode: ProblemScoringMode;
    type: ProblemType;
  };
  externalUrl: string;
}

export interface ProblemSummaryListResponseDto extends ProblemBasicSummaryListResponseDto {
  owner: UserOrganizationBasicInfoResponseDto;
  access: EntityAccess;
  user: ProblemUserDto;
}

export interface ProblemDataResponseDto extends ProblemSummaryListResponseDto {
  author: string;
  statement: ProblemStatement;
  editorial: TextLanguage;
  settings: ProblemSettings;
  ownerNickname: string;
  state: EntityState;
  sharing: EntitySharingResponseDto;
}

export interface ProblemJudgeSystemSummaryListResponseDto extends ProblemJudgeSummaryListResponseDto {
  name: string;
  id: string;
}

export interface ProblemSystemSummaryListResponseDto extends ProblemSummaryListResponseDto {
  state: EntityState;
  id: string;
  owner: EntityOwnerSystemSummaryListResponseDto;
  judge: ProblemJudgeSystemSummaryListResponseDto;
  createdAt: number;
  updatedAt: number;
}

export interface ProblemTestCaseResponseDto {
  testCaseKey: string;
  groups: number[];
  inputFileSize: number;
  inputFileLastModified: Date;
  outputFileSize: number;
  outputFileLastModified: Date;
}

export interface ProblemTestCasesResponseDto extends Array<ProblemTestCaseResponseDto> {}

export interface UpsertProblemDto
  extends Omit<ProblemBaseDocument, 'testCases' | 'testCasesUpdatedAt' | 'key' | 'members' | 'judgeId'> {
  members: EntityMembersDto;
}
