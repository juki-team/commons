import { ContestStatus, Judge, ProgrammingLanguage, UserBasicInfoInterface } from '../types';
import { ProblemResponseDTO } from './problem';

export type PointsByGroupsType = { [key: number]: { points: number, partial: number } };

export type ByProgrammingLanguageType = { [key: string]: { language: ProgrammingLanguage, timeLimit: number, memoryLimit: number } };

export type ContestProblemBasicType = {
  key: string,
  judge: Judge,
  index: string,
  points: number,
  color: string,
  startTimestamp: number,
  endTimestamp: number,
}

export type ContestProblemType = ProblemResponseDTO & ContestProblemBasicType & {
  totalSuccess: number,
  totalAttempts: number, // successRate: number,
  myAttempts: number,
  myPoints: number,
  mySuccess: boolean,
  myPenalty: number,
};

export type ContestSettingsBasicType = {
  clarifications: boolean,
  numberJudgeValidations: number,
  languages: ProgrammingLanguage[],
  penalty: number,
  timeToSolve: number,
  startTimestamp: number,
  frozenTimestamp: number,
  quietTimestamp: number,
  endTimestamp: number,
}

export type ContestUserData = {
  userId: string,
  lastVisit: Date | null,
  joinedAt: Date,
}

export type ContestMembersBasicType = {
  administrators: { [key: string]: ContestUserData },
  judges: { [key: string]: ContestUserData },
  guests: { [key: string]: ContestUserData },
  spectators: { [key: string]: ContestUserData },
}

export type CreateContestMembersBasicType = {
  administrators: string[]
  judges: string[],
  guests: string[],
  spectators: string[],
}

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

export type ContestUserType = {
  isAdmin: boolean,
  isJudge: boolean,
  isContestant: boolean,
  isGuest: boolean,
  isSpectator: boolean,
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

export type ContestMembersType = ContestMembersBasicType & { contestants: { [key: string]: ContestUserData } };

export type ContestClarificationType = {
  key: string,
  problemJudgeKey: string,
  question: string,
  questionTimestamp: number,
  questionUserNickname: string,
  questionUserImageUrl: string,
  answer: string,
  answerTimestamp: number,
  answerUserNickname: string,
  answerUserImageUrl: string,
  public: boolean,
}

export interface ContestMembersResponseDTO {
  administrators: { [key: string]: UserBasicInfoInterface },
  judges: { [key: string]: UserBasicInfoInterface },
  guests: { [key: string]: UserBasicInfoInterface },
  spectators: { [key: string]: UserBasicInfoInterface },
  contestants: { [key: string]: UserBasicInfoInterface },
}

export interface ContestResponseDTO extends ContestSummaryListResponseDTO {
  description: string,
  settings: ContestSettingsBasicType & { scoreboardLocked: boolean, },
  problems: { [key: string]: ContestProblemType },
  user: ContestUserType,
  members: ContestMembersResponseDTO,
  clarifications: ContestClarificationType[]
}
