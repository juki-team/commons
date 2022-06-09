import { ContestStatus, Judge, ProblemMode, ProblemStatus, ProblemType, ProgrammingLanguage } from '../types';

export type PointsByGroupsType = { [key: number]: { points: number, partial: number } };

export type ProblemLanguagesType = { [key: string]: { language: ProgrammingLanguage, timeLimit: number, memoryLimit: number } };

export interface ProblemResponseDTO {
  key: string,
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

export type ContestProblemType = ProblemResponseDTO & {
  // problem
  judge: Judge,
  url: string,
  // contest problem
  color: string,
  index: string,
  startTimestamp: number,
  endTimestamp: number,
  // Submissions
  successRate: number,
  attempts: number,
  points: number,
  success: boolean,
  penalty: number,
};

export interface ContestResponseDTO {
  key: string,
  name: string,
  description: string,
  status: ContestStatus,
  tags: string[],
  settings: {
    scoreboardLocked: boolean, // unfrozen
    clarifications: boolean,
    numberJudgeValidations: number,
    languages: ProgrammingLanguage[],
    penalty: number,
    timeToSolve: number,
    startTimestamp: number,
    frozenTimestamp: number,
    quietTimestamp: number,
    endTimestamp: number,
  },
  problems: { [key: string]: ContestProblemType },
  // Data Calculated
  totalContestants: number,
  isLive: boolean,
  isPast: boolean,
  isFuture: boolean,
  isFrozenTime: boolean,
  isQuietTime: boolean,
  // Data calculated with the user
  isAdmin: boolean,
  isJudge: boolean,
  isContestant: boolean,
  isGuest: boolean,
  isSpectator: boolean,
}
