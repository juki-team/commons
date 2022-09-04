import { ContestStatus, ContestType, Judge, ProblemMode, ProblemStatus, ProblemType, ProgrammingLanguage } from '../types';

export type PointsByGroupsType = { [key: number]: { points: number, partial: number } };

export type ProblemLanguagesType = { [key: string]: { language: ProgrammingLanguage, timeLimit: number, memoryLimit: number } };

export interface ProblemResponseDTO {
  key: string,
  judge: Judge,
  name: string,
  author: string,
  statement: {
    description: string,
    input: string,
    output: string,
  },
  mode: ProblemMode,
  type: ProblemType,
  languages: ProblemLanguagesType,
  sampleCases: { input: string, output: string }[],
  pointsByGroups: PointsByGroupsType,
  ownerNickname: string,
  tags: string[],
  status: ProblemStatus,
}

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
  type: ContestType,
  key: string,
  name: string,
  description: string,
  settings: ContestSettingsBasicType,
  problems: { [key: string]: ContestProblemBasicType },
  members: CreateContestMembersBasicType,
  tags: string[],
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
  type: ContestType,
  name: string,
  key: string,
  user: ContestUserType,
  settings: {
    startTimestamp: number,
    endTimestamp: number,
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
  administrators: { [key: string]: { userId: string, } },
  judges: { [key: string]: { userId: string, } },
  guests: { [key: string]: { userId: string, } },
  spectators: { [key: string]: { userId: string, } },
  contestants: { [key: string]: { userId: string, } },
}

export interface ContestResponseDTO extends ContestSummaryListResponseDTO {
  description: string,
  settings: ContestSettingsBasicType & { scoreboardLocked: boolean, },
  problems: { [key: string]: ContestProblemType },
  user: ContestUserType,
  members: ContestMembersResponseDTO,
  clarifications: ContestClarificationType[]
}
