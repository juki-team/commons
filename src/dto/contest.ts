import {
  ContestBaseDocument,
  ContestEventAction,
  ContestProblemPrerequisite,
  ContestProblem,
  ContestSettings,
  ContestTimeFlags,
  ContestUser,
  EntityState,
  ProblemSettings,
  ProblemStatement,
  TextLanguage,
} from '../types/index.js';
import { EntityMembersDto, EntityMembersWithTimestampsResponseDto } from './entity.js';
import {
  EntityOrganizationSummaryListResponseDto,
  EntityOrganizationSystemSummaryListResponseDto,
  ProblemJudgeSummaryListResponseDto,
  ProblemSummaryListResponseDto,
} from './problem.js';
import { EntityOwnerSystemSummaryListResponseDto, UserOrganizationBasicInfoResponseDto } from './user.js';

export type UpsertContestProblemPrerequisiteDto = (Omit<ContestProblemPrerequisite, 'problemId'> & {
  problemIndex: string
})[];

export interface UpsertContestProblemDto extends Omit<ContestProblem, 'id' | 'prerequisites'> {
  key: string,
  prerequisites: UpsertContestProblemPrerequisiteDto,
}

export interface UpsertContestDto extends Omit<ContestBaseDocument, 'key' | 'members' | 'problems' | 'settings' | 'events'> {
  members: EntityMembersDto,
  problems: { [key: string]: UpsertContestProblemDto },
  settings: Omit<ContestSettings, 'locked'>,
}

export interface ContestSummaryListResponseDto extends Pick<ContestBaseDocument, 'key' | 'name' | 'tags'>, ContestTimeFlags {
  user: ContestUser,
  owner: UserOrganizationBasicInfoResponseDto;
  organization: EntityOrganizationSummaryListResponseDto,
  settings: Pick<ContestSettings, 'startsAt' | 'endsAt' | 'frozenAt' | 'silencedAt' | 'penalty' | 'upsolvingEnabled'>,
  // Data Calculated
  totalContestants: number,
}

export interface ContestSystemSummaryListResponseDto extends ContestSummaryListResponseDto {
  state: EntityState,
  id: string,
  owner: EntityOwnerSystemSummaryListResponseDto,
  organization: EntityOrganizationSystemSummaryListResponseDto,
  createdAt: number,
  updatedAt: number,
}

export interface ContestProblemBasicDataResponseDto extends Omit<ContestProblem, 'id' | 'prerequisites'> {
  name: string,
  key: string,
  prerequisites: UpsertContestProblemPrerequisiteDto,
  judge: ProblemJudgeSummaryListResponseDto,
  tags: string[],
  organization: EntityOrganizationSummaryListResponseDto,
}

export interface ContestContestProblemDataResponseDto extends Omit<ProblemSummaryListResponseDto, 'user'> {
  author: string,
  shortname: string,
  statement: ProblemStatement,
  editorial: TextLanguage,
  settings: ProblemSettings,
  ownerNickname: string,
}

export enum ContestProblemBlockedByType {
  UNMET_PREREQUISITES = 'UNMET_PREREQUISITES',
  MAX_ACCEPTED_SUBMISSIONS_ACHIEVED = 'MAX_ACCEPTED_SUBMISSIONS_ACHIEVED',
  START_TIME_IN_THE_FUTURE = 'START_TIME_IN_THE_FUTURE',
  END_TIME_IN_THE_PAST = 'END_TIME_IN_THE_PAST',
}

export type ContestProblemDataResponseDto =
  ContestProblemBasicDataResponseDto
  & ContestContestProblemDataResponseDto
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

export interface ContestEventResponseDto {
  action: ContestEventAction,
  user: UserOrganizationBasicInfoResponseDto,
  timestamp: number,
  details: Record<string, any>,
}

export interface ContestDataResponseDto extends Omit<ContestSummaryListResponseDto, 'settings'>, Pick<ContestBaseDocument, 'settings' | 'description' | 'groups'> {
  problems: Record<string, ContestProblemDataResponseDto>,
  state: EntityState,
}

export interface ContestMembersResponseDto {
  members: EntityMembersWithTimestampsResponseDto,
}

export interface ContestClarificationsResponseDto {
  clarifications: ContestClarificationResponseDto[],
}

export interface ContestEventsResponseDto {
  events: ContestEventResponseDto[];
}

export type ContestClarificationResponseDto = {
  key: string,
  problemJudgeKey: string,
  question: string,
  questionUser: UserOrganizationBasicInfoResponseDto,
  askedAt: number,
  answer: string,
  answeredAt: number,
  answerUser: UserOrganizationBasicInfoResponseDto,
  public: boolean,
};
