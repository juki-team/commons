import type { ProblemScoringMode, ProblemType } from '../prisma/enums';
import type {
  EntityState,
  JudgeBaseDocument,
  ProblemBaseDocument,
  ProblemSettings,
  ProblemStatement,
  ProblemUser,
  TextLanguage,
} from '../types';
import type { EntityMembersDTO, EntityMembersResponseDTO } from './entity';
import type { EntityOwnerSystemSummaryListResponseDTO, UserCompanyBasicInfoResponseDTO } from './user';

export interface ProblemJudgeSummaryListResponseDTO
  extends Pick<JudgeBaseDocument, 'isExternal' | 'isSubmitSupported' | 'name' | 'key'> {
  isCustom: boolean;
  isMain: boolean;
}

export interface EntityCompanySummaryListResponseDTO {
  key: string;
}

export interface ProblemBasicSummaryListResponseDTO {
  company: EntityCompanySummaryListResponseDTO;
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
  owner: UserCompanyBasicInfoResponseDTO;
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

export interface EntityCompanySystemSummaryListResponseDTO extends EntityCompanySummaryListResponseDTO {
  name: string;
  id: string;
}

export interface ProblemSystemSummaryListResponseDTO extends ProblemSummaryListResponseDTO {
  state: EntityState;
  id: string;
  owner: EntityOwnerSystemSummaryListResponseDTO;
  judge: ProblemJudgeSystemSummaryListResponseDTO;
  company: EntityCompanySystemSummaryListResponseDTO;
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
