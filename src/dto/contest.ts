import { ContestBaseDocument, ContestClarificationType, ContestSettingsBasicType, ContestUserType } from '../types';
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

export interface UpsertContestDTO extends Omit<ContestBaseDocument, 'key' | 'members' | 'problems'> {
  members: EntityMembersDTO,
  problems: UpsertContestProblemDTO[],
}

export interface ContestSummaryListResponseDTO {
  name: string,
  key: string,
  user: ContestUserType,
  settings: {
    startTimestamp: number,
    endTimestamp: number,
    // To get the contest template
    frozenTimestamp: number,
    quietTimestamp: number,
    penalty: number,
  },
  tags: string[],
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

export interface ContestDataResponseDTO extends ContestSummaryListResponseDTO {
  description: string,
  settings: ContestSettingsBasicType & { scoreboardLocked: boolean, },
  problems: { [key: string]: ContestProblemDataResponseDTO },
  members: EntityMembersResponseDTO,
  clarifications: ContestClarificationType[]
}
