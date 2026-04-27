import type { UserOrganizationBasicInfoResponseDTO } from './user.js';

export type GroupByTimestampKey = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | number;

export type StatisticsGrouped<T> = Partial<Record<GroupByTimestampKey, Record<number, T>>>;

export interface StatisticsOrganizationResponseDTO {
  codeEditorRuns: StatisticsGrouped<number>;
  judgingRuns: StatisticsGrouped<number>;
  reJudgingRuns: StatisticsGrouped<number>;
  users: number;
  problems: number;
  contests: number;
}

export interface StatisticsProblemResponseDTO {
  verdict: {
    [key: string]: {
      key: string;
      value: number;
      label: string;
    };
  };
  language: {
    [key: string]: {
      key: string;
      value: number;
      label: string;
    };
  };
  date: StatisticsGrouped<number>;
}

export type StatisticsUserTrackDataResponseDTO = {
  timestamp: number;
  history: { href: string; uiId: string; timestamp: number }[];
};

export interface StatisticsUserTrackResponseDTO {
  [key: string]: {
    user: UserOrganizationBasicInfoResponseDTO;
    sessionId: string;
    data: StatisticsGrouped<StatisticsUserTrackDataResponseDTO>;
  };
}
