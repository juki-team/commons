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

export interface ProblemDataResponseDTO extends ProblemSummaryListResponseDTO {
  author: string,
  statement: ProblemStatementType,
  editorial: TextLanguageType,
  settings: ProblemSettingsType,
  ownerNickname: string,
  members: DocumentMembersResponseDTO,
}

export interface ProblemDataManagerSystemResponseDTO extends ProblemDataResponseDTO {
  isManager: true,
  state: EntityState,
  id: string,
}

export interface ProblemDataSpectatorSystemResponseDTO extends ProblemDataResponseDTO {
  isManager: false,
  state: EntityState,
  id: string,
}

export type ProblemDataSystemResponseDTO = ProblemDataManagerSystemResponseDTO | ProblemDataSpectatorSystemResponseDTO;

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

export interface UpsertProblemDTO extends Omit<ProblemBaseDocument, 'testCases' | 'testCasesUpdatedAtTimestamp' | 'key' | 'members'> {
  members: DocumentMembersDTO,
}
