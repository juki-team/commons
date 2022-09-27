import {
  ContestClarificationType,
  ContestMembersResponseType,
  ContestProblemBasicType,
  ContestProblemType,
  ContestSettingsBasicType,
  ContestStatus,
  ContestUserType,
  CreateContestMembersBasicType,
} from '../types';

export interface CreateContestDTO {
  key: string,
  name: string,
  description: string,
  settings: ContestSettingsBasicType,
  problems: { [key: string]: ContestProblemBasicType },
  members: CreateContestMembersBasicType,
  tags: string[],
  status: ContestStatus,
}

export interface ContestSummaryListResponseDTO {
  status: ContestStatus,
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
  isFrozenTime: boolean,
  isQuietTime: boolean,
}

export interface ContestResponseDTO extends ContestSummaryListResponseDTO {
  description: string,
  settings: ContestSettingsBasicType & { scoreboardLocked: boolean, },
  problems: { [key: string]: ContestProblemType },
  user: ContestUserType,
  members: ContestMembersResponseType,
  clarifications: ContestClarificationType[]
}
