import type { EntityAccess, EntityState, ProblemScoringMode, ProblemType } from '../enums/index.js';
import type {
  JudgeBaseDocument,
  ProblemBaseDocument,
  ProblemSettings,
  ProblemStatement,
  ProblemUserDTO,
  TextLanguage,
} from '../types/index.js';
import type { EntityMembersDTO, EntitySharingResponseDTO } from './entity.js';
import type { EntityOwnerSystemSummaryListResponseDTO, UserOrganizationBasicInfoResponseDTO } from './user.js';

export interface ProblemJudgeSummaryListResponseDTO
  extends Pick<JudgeBaseDocument, 'isExternal' | 'isSubmitSupported' | 'name' | 'key'> {
  isMain: boolean;
}

export interface EntityOrganizationSummaryListResponseDTO {
  key: string;
}

export interface ProblemBasicSummaryListResponseDTO {
  judge: ProblemJudgeSummaryListResponseDTO;
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

export interface ProblemSummaryListResponseDTO extends ProblemBasicSummaryListResponseDTO {
  owner: UserOrganizationBasicInfoResponseDTO;
  access: EntityAccess;
  user: ProblemUserDTO;
}

export interface ProblemDataResponseDTO extends ProblemSummaryListResponseDTO {
  author: string;
  statement: ProblemStatement;
  editorial: TextLanguage;
  settings: ProblemSettings;
  ownerNickname: string;
  state: EntityState;
  sharing: EntitySharingResponseDTO;
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
  createdAt: number;
  updatedAt: number;
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
  extends Omit<ProblemBaseDocument, 'testCases' | 'testCasesUpdatedAt' | 'key' | 'members' | 'judgeId'> {
  members: EntityMembersDTO;
}
