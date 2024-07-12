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
import { UserBasicInfoResponseDTO } from './user';

export interface ProblemSummaryListResponseDTO {
  companyKey: string,
  judge: {
    key: Judge | string,
    name: string,
  }
  key: string,
  name: string,
  tags: string[],
  user: ProblemUserType,
  owner: UserBasicInfoResponseDTO,
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

export interface ProblemSystemSummaryListResponseDTO extends ProblemSummaryListResponseDTO {
  state: EntityState,
  id: string,
  ownerUserId: string,
  judgeName: string,
  judgeId: string,
  companyName: string,
  companyId: string,
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
