import type { ContestEventAction, ContestProblemBlockedByType, EntityState } from '../enums/index.js';
import type {
  ContestBaseDocument,
  ContestClarification,
  ContestProblem,
  ContestProblemPrerequisite,
  ContestSettings,
  ContestUser,
  ProblemSettings,
  ProblemStatement,
  TextLanguage,
} from '../types/index.js';
import type {
  EntityMembersDto,
  EntityMembersWithTimestampsResponseDto,
  EntityOrganizationSummaryListResponseDto,
  EntityOrganizationSystemSummaryListResponseDto,
  EntityOwnerSystemSummaryListResponseDto,
} from './entity.js';
import type { ProblemJudgeSummaryListResponseDto, ProblemSummaryListResponseDto } from './problem.js';
import type { UserOrganizationBasicInfoResponseDto } from './user.js';

export type UpsertContestProblemPrerequisiteDto = (Omit<ContestProblemPrerequisite, 'problemId'> & {
  problemIndex: string;
})[];

export interface UpsertContestProblemDto extends Omit<ContestProblem, 'id' | 'prerequisites'> {
  key: string;
  prerequisites: UpsertContestProblemPrerequisiteDto;
}

export interface UpsertContestDto extends Omit<ContestBaseDocument, 'key' | 'members' | 'problems' | 'settings' | 'events'> {
  members: EntityMembersDto;
  problems: { [key: string]: UpsertContestProblemDto };
  settings: Omit<ContestSettings, 'locked'>;
}

export interface ContestSummaryListResponseDto extends Pick<ContestBaseDocument, 'key' | 'name' | 'tags'> {
  user: ContestUser;
  owner: UserOrganizationBasicInfoResponseDto;
  organization: EntityOrganizationSummaryListResponseDto;
  settings: Pick<ContestSettings, 'startsAt' | 'endsAt' | 'frozenAt' | 'silencedAt' | 'penalty' | 'upsolvingEnabled'>;
  // Data Calculated
  totalContestants: number;
  isLive: boolean;
  isPast: boolean;
  isFuture: boolean;
  isEndless: boolean;
  isGlobal: boolean;
  isFrozenTime: boolean;
  isQuietTime: boolean;
}

export interface ContestSystemSummaryListResponseDto extends ContestSummaryListResponseDto {
  state: EntityState;
  id: string;
  owner: EntityOwnerSystemSummaryListResponseDto;
  organization: EntityOrganizationSystemSummaryListResponseDto;
  createdAt: number;
  updatedAt: number;
}

export interface ContestProblemBasicDataResponseDto extends Omit<ContestProblem, 'id' | 'prerequisites'> {
  name: string;
  key: string;
  prerequisites: UpsertContestProblemPrerequisiteDto;
  judge: ProblemJudgeSummaryListResponseDto;
  tags: string[];
  organization: EntityOrganizationSummaryListResponseDto;
}

export interface ContestContestProblemDataResponseDto extends Omit<ProblemSummaryListResponseDto, 'user'> {
  author: string;
  shortname: string;
  statement: ProblemStatement;
  editorial: TextLanguage;
  settings: ProblemSettings;
  ownerNickname: string;
}

export type ContestProblemDataResponseDto = ContestProblemBasicDataResponseDto &
  ContestContestProblemDataResponseDto & {
    // calculated
    blockedBy: { type: ContestProblemBlockedByType; details: Record<string, unknown> }[];
    totalSuccess: number;
    totalAttempts: number;
    myAttempts: number;
    myPoints: number;
    mySuccess: boolean;
    myPenalty: number;
    myIndexAccepted: number;
  };

export interface ContestEventResponseDto {
  action: ContestEventAction;
  user: UserOrganizationBasicInfoResponseDto;
  timestamp: number;
  details: Record<string, unknown>;
}

export interface ContestDataResponseDto
  extends Omit<ContestSummaryListResponseDto, 'settings'>,
    Pick<ContestBaseDocument, 'settings' | 'description' | 'groups'> {
  problems: Record<string, ContestProblemDataResponseDto>;
  state: EntityState;
}

export interface ContestMembersResponseDto {
  members: EntityMembersWithTimestampsResponseDto;
}

export interface ContestClarificationsResponseDto {
  clarifications: ContestClarification[];
}

export interface ContestEventsResponseDto {
  events: ContestEventResponseDto[];
}
