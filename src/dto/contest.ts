import {
  ContestBaseDocument,
  ContestClarificationType,
  ContestEventAction,
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
  key: string;
}

export interface UpsertContestDTO extends Omit<ContestBaseDocument, 'key' | 'members' | 'problems' | 'settings' | 'events'> {
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

export interface ContestProblemBasicDataResponseDTO extends Omit<ContestProblemType, 'id'> {
  name: string,
  key: string,
  judge: ProblemJudgeSummaryListResponseDTO,
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

export enum ContestProblemBlockedByType {
  UNMET_PREREQUISITES = 'UNMET_PREREQUISITES',
  MAX_ACCEPTED_SUBMISSIONS_ACHIEVED = 'MAX_ACCEPTED_SUBMISSIONS_ACHIEVED',
  START_TIME_IN_THE_FUTURE = 'START_TIME_IN_THE_FUTURE',
  END_TIME_IN_THE_PAST = 'END_TIME_IN_THE_PAST',
}

export type ContestProblemDataResponseDTO =
  ContestProblemBasicDataResponseDTO
  & ContestContestProblemDataResponseDTO
  & {
  // calculated
  blockedBy: { type: ContestProblemBlockedByType, details: Record<string, any> }[],
  totalSuccess: number,
  totalAttempts: number,
  myAttempts: number,
  myPoints: number,
  mySuccess: boolean,
  myPenalty: number,
};

export interface ContestEventResponseDTO {
  action: ContestEventAction,
  user: UserCompanyBasicInfoResponseDTO,
  timestamp: number,
  details: Record<string, any>,
}

export interface ContestDataResponseDTO extends Omit<ContestSummaryListResponseDTO, 'settings'>, Pick<ContestBaseDocument, 'settings' | 'description'> {
  problems: { [key: string]: ContestProblemDataResponseDTO },
  members: EntityMembersWithTimestampsResponseDTO,
  clarifications: ContestClarificationType[],
  state: EntityState,
  events: ContestEventResponseDTO[]
}
