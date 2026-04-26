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
import type { EntityMembersDTO, EntityMembersWithTimestampsResponseDTO } from './entity.js';
import type {
  EntityCompanySummaryListResponseDTO,
  EntityCompanySystemSummaryListResponseDTO,
  ProblemJudgeSummaryListResponseDTO,
  ProblemSummaryListResponseDTO,
} from './problem.js';
import type { EntityOwnerSystemSummaryListResponseDTO, UserOrganizationBasicInfoResponseDTO } from './user.js';

export type UpsertContestProblemPrerequisiteDTO = (Omit<ContestProblemPrerequisite, 'problemId'> & {
  problemIndex: string;
})[];

export interface UpsertContestProblemDTO extends Omit<ContestProblem, 'id' | 'prerequisites'> {
  key: string;
  prerequisites: UpsertContestProblemPrerequisiteDTO;
}

export interface UpsertContestDTO extends Omit<ContestBaseDocument, 'key' | 'members' | 'problems' | 'settings' | 'events'> {
  members: EntityMembersDTO;
  problems: { [key: string]: UpsertContestProblemDTO };
  settings: Omit<ContestSettings, 'locked'>;
}

export interface ContestSummaryListResponseDTO extends Pick<ContestBaseDocument, 'key' | 'name' | 'tags'> {
  user: ContestUser;
  owner: UserOrganizationBasicInfoResponseDTO;
  company: EntityCompanySummaryListResponseDTO;
  settings: Pick<
    ContestSettings,
    'startTimestamp' | 'endTimestamp' | 'frozenTimestamp' | 'quietTimestamp' | 'penalty' | 'upsolvingEnabled'
  >;
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

export interface ContestSystemSummaryListResponseDTO extends ContestSummaryListResponseDTO {
  state: EntityState;
  id: string;
  owner: EntityOwnerSystemSummaryListResponseDTO;
  company: EntityCompanySystemSummaryListResponseDTO;
  creationTimestamp: number;
  updateTimestamp: number;
}

export interface ContestProblemBasicDataResponseDTO extends Omit<ContestProblem, 'id' | 'prerequisites'> {
  name: string;
  key: string;
  prerequisites: UpsertContestProblemPrerequisiteDTO;
  judge: ProblemJudgeSummaryListResponseDTO;
  tags: string[];
  company: EntityCompanySummaryListResponseDTO;
}

export interface ContestContestProblemDataResponseDTO extends Omit<ProblemSummaryListResponseDTO, 'user'> {
  author: string;
  shortname: string;
  statement: ProblemStatement;
  editorial: TextLanguage;
  settings: ProblemSettings;
  ownerNickname: string;
}

export type ContestProblemDataResponseDTO = ContestProblemBasicDataResponseDTO &
  ContestContestProblemDataResponseDTO & {
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

export interface ContestEventResponseDTO {
  action: ContestEventAction;
  user: UserOrganizationBasicInfoResponseDTO;
  timestamp: number;
  details: Record<string, unknown>;
}

export interface ContestDataResponseDTO
  extends Omit<ContestSummaryListResponseDTO, 'settings'>,
    Pick<ContestBaseDocument, 'settings' | 'description' | 'groups'> {
  problems: Record<string, ContestProblemDataResponseDTO>;
  state: EntityState;
}

export interface ContestMembersResponseDTO {
  members: EntityMembersWithTimestampsResponseDTO;
}

export interface ContestClarificationsResponseDTO {
  clarifications: ContestClarification[];
}

export interface ContestEventsResponseDTO {
  events: ContestEventResponseDTO[];
}
