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
export type ContestMembersBasicType = {
  administrators: string[],
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
  members: ContestMembersBasicType,
  tags: string[],
}

export interface ContestResponseDTO {
  status: ContestStatus,
  key: string,
  name: string,
  description: string,
  settings: ContestSettingsBasicType & { scoreboardLocked: boolean, },
  problems: { [key: string]: ContestProblemType },
  tags: string[],
  // Data Calculated
  totalContestants: number,
  isLive: boolean,
  isPast: boolean,
  isFuture: boolean,
  isFrozenTime: boolean,
  isQuietTime: boolean,
  // Data calculated with the user
  user: {
    isAdmin: boolean,
    isJudge: boolean,
    isContestant: boolean,
    isGuest: boolean,
    isSpectator: boolean,
  }
}
