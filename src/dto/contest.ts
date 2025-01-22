import {
  ContestBaseDocument,
  ContestClarificationType,
  ContestSettings,
  ContestUserType,
  EntityState,
  ProblemSettingsType,
  ProblemStatementType,
  TextLanguageType,
} from '../types';
import { DocumentMembersResponseDTO, EntityMembersDTO, EntityMembersResponseDTO } from './entity';
import {
  EntityCompanySummaryListResponseDTO,
  EntityCompanySystemSummaryListResponseDTO,
  ProblemJudgeSummaryListResponseDTO,
  ProblemSummaryListResponseDTO,
} from './problem';
import { EntityOwnerSystemSummaryListResponseDTO, UserCompanyBasicInfoResponseDTO } from './user';

export interface UpsertContestProblemDTO {
  key: string
  index: string,
  points: number,
  color: string,
  startTimestamp: number,
  endTimestamp: number,
}

export interface UpsertContestDTO extends Omit<ContestBaseDocument, 'key' | 'members' | 'problems' | 'settings'> {
  members: EntityMembersDTO,
  problems: { [key: string]: UpsertContestProblemDTO },
  settings: Omit<ContestSettings, 'locked'>,
}

export interface ContestSummaryListResponseDTO extends Pick<ContestBaseDocument, 'key' | 'name' | 'tags'> {
  user: ContestUserType,
  owner: UserCompanyBasicInfoResponseDTO;
  company: EntityCompanySummaryListResponseDTO,
  settings: Pick<ContestSettings, 'startTimestamp' | 'endTimestamp' | 'frozenTimestamp' | 'quietTimestamp' | 'penalty'>,
  // Data Calculated
  totalContestants: number,
  isLive: boolean,
  isPast: boolean,
  isFuture: boolean,
  isEndless: boolean,
  isGlobal: boolean,
  isFrozenTime: boolean,
  isQuietTime: boolean,
}

export interface ContestSystemSummaryListResponseDTO extends ContestSummaryListResponseDTO {
  state: EntityState,
  id: string,
  owner: EntityOwnerSystemSummaryListResponseDTO,
  company: EntityCompanySystemSummaryListResponseDTO,
  creationTimestamp: number,
  updateTimestamp: number,
}

export interface ContestProblemBasicDataResponseDTO {
  name: string,
  key: string,
  judge: ProblemJudgeSummaryListResponseDTO,
  index: string,
  points: number,
  color: string,
  startTimestamp: number,
  endTimestamp: number,
  url: string,
}

export interface ContestContestProblemDataResponseDTO extends Omit<ProblemSummaryListResponseDTO, 'user'> {
  author: string,
  statement: ProblemStatementType,
  editorial: TextLanguageType,
  settings: ProblemSettingsType,
  ownerNickname: string,
  members: DocumentMembersResponseDTO,
}

export type ContestProblemDataResponseDTO =
  ContestProblemBasicDataResponseDTO
  & ContestContestProblemDataResponseDTO
  & {
  // calculated
  totalSuccess: number,
  totalAttempts: number, // successRate: number,
  myAttempts: number,
  myPoints: number,
  mySuccess: boolean,
  myPenalty: number,
};

export interface ContestDataResponseDTO extends Omit<ContestSummaryListResponseDTO, 'settings'>, Pick<ContestBaseDocument, 'settings' | 'description'> {
  problems: { [key: string]: ContestProblemDataResponseDTO },
  members: EntityMembersResponseDTO,
  clarifications: ContestClarificationType[],
}
