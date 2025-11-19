import {
  ContestBaseDocument,
  ContestClarificationType,
  ContestEventAction,
  ContestProblemPrerequisite,
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

export type UpsertContestProblemPrerequisiteDTO = (Omit<ContestProblemPrerequisite, 'problemId'> & {
  problemIndex: string
})[];

export interface UpsertContestProblemDTO extends Omit<ContestProblemType, 'id' | 'prerequisites'> {
  key: string,
  prerequisites: UpsertContestProblemPrerequisiteDTO,
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

export interface ContestProblemBasicDataResponseDTO extends Omit<ContestProblemType, 'id' | 'prerequisites'> {
  name: string,
  key: string,
  prerequisites: UpsertContestProblemPrerequisiteDTO,
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
  myIndexAccepted: number,
};

export interface ContestEventResponseDTO {
  action: ContestEventAction,
  user: UserCompanyBasicInfoResponseDTO,
  timestamp: number,
  details: Record<string, any>,
}

export interface ContestDataResponseDTO extends Omit<ContestSummaryListResponseDTO, 'settings'>, Pick<ContestBaseDocument, 'settings' | 'description' | 'groups'> {
  problems: Record<string, ContestProblemDataResponseDTO>,
  state: EntityState,
}

export interface ContestMembersResponseDTO {
  members: EntityMembersWithTimestampsResponseDTO,
}

export interface ContestClarificationsResponseDTO {
  clarifications: ContestClarificationType[],
}

export interface ContestEventsResponseDTO {
  events: ContestEventResponseDTO[];
}
