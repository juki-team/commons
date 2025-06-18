import { ProblemVerdict } from '../types';

export interface StatisticsCompanyResponseDTO {
  codeEditorRuns: number[],
  judgingRuns: number[],
  reJudgingRuns: number[],
  users: number,
  problems: number,
  contests: number,
}

export interface StatisticsProblemResponseDTO {
  verdict: {
    [key in ProblemVerdict]: number[]
  },
  language: {
    [key: string]: number[]
  }
}
