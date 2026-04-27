import type { EntityState, ProblemScoringMode, ProblemType } from '../enums/index.js';
import type {
  JudgeBaseDocument,
  ProblemBaseDocument,
  ProblemSettings,
  ProblemStatement,
  ProblemUser,
  TextLanguage,
} from '../types/index.js';
import type { EntityMembersDTO, EntityMembersResponseDTO } from './entity.js';
import type { EntityOwnerSystemSummaryListResponseDTO, UserOrganizationBasicInfoResponseDTO } from './user.js';

export interface ProblemJudgeSummaryListResponseDTO
  extends Pick<JudgeBaseDocument, 'isExternal' | 'isSubmitSupported' | 'name' | 'key'> {
  isCustom: boolean;
  isMain: boolean;
}

export interface EntityOrganizationSummaryListResponseDTO {
  key: string;
}

export interface ProblemBasicSummaryListResponseDTO {
  organization: EntityOrganizationSummaryListResponseDTO;
  judge: ProblemJudgeSummaryListResponseDTO;
  key: string;
  name: string;
  shortname: string;
  tags: string[];
  settings: {
    scoringMode: ProblemScoringMode;
    type: ProblemType;
  };
  members: EntityMembersResponseDTO;
  externalUrl: string;
}

export interface ProblemSummaryListResponseDTO extends ProblemBasicSummaryListResponseDTO {
  user: ProblemUser;
  owner: UserOrganizationBasicInfoResponseDTO;
}

export interface ProblemDataResponseDTO extends ProblemSummaryListResponseDTO {
  author: string;
  statement: ProblemStatement;
  editorial: TextLanguage;
  settings: ProblemSettings;
  ownerNickname: string;
  state: EntityState;
}

export interface ProblemJudgeSystemSummaryListResponseDTO extends ProblemJudgeSummaryListResponseDTO {
  name: string;
  id: string;
}

export interface EntityOrganizationSystemSummaryListResponseDTO extends EntityOrganizationSummaryListResponseDTO {
  name: string;
  id: string;
}

export interface ProblemSystemSummaryListResponseDTO extends ProblemSummaryListResponseDTO {
  state: EntityState;
  id: string;
  owner: EntityOwnerSystemSummaryListResponseDTO;
  judge: ProblemJudgeSystemSummaryListResponseDTO;
  organization: EntityOrganizationSystemSummaryListResponseDTO;
  creationTimestamp: number;
  updateTimestamp: number;
}

export interface ProblemTestCaseResponse {
  testCaseKey: string;
  groups: number[];
  inputFileSize: number;
  inputFileLastModified: Date;
  outputFileSize: number;
  outputFileLastModified: Date;
}

export interface ProblemTestCasesResponseDTO extends Array<ProblemTestCaseResponse> {}

export interface UpsertProblemDTO
  extends Omit<ProblemBaseDocument, 'testCases' | 'testCasesUpdatedAtTimestamp' | 'key' | 'members' | 'judgeId'> {
  members: EntityMembersDTO;
}
