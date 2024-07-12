import { ContestBaseDocument, ContestClarificationType, ContestSettings, ContestUserType } from '../types';
import { EntityMembersDTO, EntityMembersResponseDTO } from './entity';
import { ProblemDataResponseDTO } from './problem';

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
  problems: UpsertContestProblemDTO[],
  settings: Omit<ContestSettings, 'locked'>,
}

export interface ContestSummaryListResponseDTO extends Pick<ContestBaseDocument, 'key' | 'name' | 'tags'> {
  user: ContestUserType,
  settings: Pick<ContestSettings, 'startTimestamp' | 'endTimestamp' | 'frozenTimestamp' | 'quietTimestamp' | 'penalty'>,
  // Data Calculated
  totalContestants: number,
  isLive: boolean,
  isPast: boolean,
  isFuture: boolean,
  isEndless: boolean,
  isFrozenTime: boolean,
  isQuietTime: boolean,
}

export type ContestProblemDataResponseDTO = ProblemDataResponseDTO & {
  index: string,
  points: number,
  color: string,
  startTimestamp: number,
  endTimestamp: number,
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
