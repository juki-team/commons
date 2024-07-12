import { ContestBaseDocument, ContestClarificationType, ContestSettings, ContestUserType } from '../types';
import { EntityMembersDTO, EntityMembersResponseDTO } from './entity';
import { ProblemDataResponseDTO } from './problem';
import { UserBasicInfoResponseDTO } from './user';

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
  owner: UserBasicInfoResponseDTO;
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

export interface ContestProblemBasicDataResponseDTO {
  name: string,
  key: string,
  judgeKey: string,
  index: string,
  points: number,
  color: string,
  startTimestamp: number,
  endTimestamp: number,
}

export type ContestProblemDataResponseDTO = ContestProblemBasicDataResponseDTO & ProblemDataResponseDTO & {
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
