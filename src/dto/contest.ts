import { ContestStatus, Judge, ProblemMode, ProblemType, ProgrammingLanguage } from '../types';

export type PointsByGroupsType = { [key: number]: { points: number, partial: number } }

export type ContestProblemType = {
  // problem
  key: string,
  name: string,
  statementDescription: string,
  statementInput: string,
  statementOutput: string,
  judge: Judge,
  url: string,
  sampleCases: { input: string, output: string }[],
  pointsByGroups: PointsByGroupsType,
  memoryLimit: number,
  timeLimit: number,
  mode: ProblemMode,
  type: ProblemType,
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
}

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
