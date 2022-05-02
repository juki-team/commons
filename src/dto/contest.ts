import { ContestStatus, Judge, ProblemMode, ProblemType, ProgrammingLanguage } from '../types';

export type PointsByGroupsType = { [key: number]: { points: number, partial: number } };

export type ProblemLanguages = { [key: string]: { language: ProgrammingLanguage, timeLimit: number, memoryLimit: number } };

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
  languages: ProblemLanguages,
  sampleCases: { input: string, output: string }[],
  pointsByGroups: PointsByGroupsType,
  ownerNickname: string,
  tags: string[],
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
  startTimestamp: number,
  frozenTimestamp: number,
  quietTimestamp: number,
  endTimestamp: number,
  penalty: number,
  timeToSolve: number,
  isJudgedManual: boolean,
  judgesForManualJudging: number,
  languages: ProgrammingLanguage[],
  clarifications: boolean,
  problems: { [key: string]: ContestProblemType },
  // Data Calculated
  totalContestants: number,
  // Data calculated
  isScoreboardLocked: boolean,
  isLive: boolean,
  isPast: boolean,
  isFuture: boolean,
  isPrivate: boolean,
  isRegistrationOpen: boolean,
  isFrozenTime: boolean,
  isQuietTime: boolean,
  // Data calculated with the user
  isAdmin: boolean,
  isJudge: boolean,
  isContestant: boolean,
  isGuest: boolean,
  isSpectator: boolean,
}
