import {
  ContestBaseDocument,
  ContestClarificationType,
  ContestProblemType,
  ContestSettings,
  ContestUserType,
  EntityState,
  ProblemSettingsType,
  ProblemStatementType,
  TextLanguageType,
} from '../types';
import { EntityMembersDTO, EntityMembersWithTimestampsResponseDTO } from './entity';
import {
  EntityCompanySummaryListResponseDTO,
  EntityCompanySystemSummaryListResponseDTO,
  ProblemJudgeSummaryListResponseDTO,
  ProblemSummaryListResponseDTO,
} from './problem';
import { EntityOwnerSystemSummaryListResponseDTO, UserCompanyBasicInfoResponseDTO } from './user';

export interface UpsertContestProblemDTO extends Omit<ContestProblemType, 'id'> {
  key: string
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
  prerequisites: { problemKey: string }[],
  maxAcceptedUsers: number,
  tags: string[],
  company: EntityCompanySummaryListResponseDTO,
}

export interface ContestContestProblemDataResponseDTO extends Omit<ProblemSummaryListResponseDTO, 'user'> {
  author: string,
  shortname: string,
  statement: ProblemStatementType,
  editorial: TextLanguageType,
  settings: ProblemSettingsType,
  ownerNickname: string,
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
  members: EntityMembersWithTimestampsResponseDTO,
  clarifications: ContestClarificationType[],
  state: EntityState,
}
