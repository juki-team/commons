import { UserCompanyBasicInfoResponseDTO } from './user';

export type StatisticsGroupedType<T> = Record<number, Record<number, T>>;

export interface StatisticsCompanyResponseDTO {
  codeEditorRuns: StatisticsGroupedType<number>,
  judgingRuns: StatisticsGroupedType<number>,
  reJudgingRuns: StatisticsGroupedType<number>,
  users: number,
  problems: number,
  contests: number,
}

export interface StatisticsProblemResponseDTO {
  verdict: {
    [key: string]: {
      key: string,
      value: number,
      label: string,
    }
  },
  language: {
    [key: string]: {
      key: string,
      value: number,
      label: string,
    }
  },
  date: StatisticsGroupedType<number>,
}

export interface StatisticsUserTrackResponseDTO {
  [key: string]: {
    user: UserCompanyBasicInfoResponseDTO,
    sessionId: string,
    data: StatisticsGroupedType<{ timestamp: number, history: { href: string, uiId: string, timestamp: number } [] }>
  },
}
