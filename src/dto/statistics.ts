import type { UserOrganizationBasicInfoResponseDto } from './user.js';

export type GroupByTimestampKey = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | number;

export type StatisticsGrouped<T> = Partial<Record<GroupByTimestampKey, Record<number, T>>>;

export interface StatisticsOrganizationResponseDto {
  codeEditorRuns: StatisticsGrouped<number>;
  judgingRuns: StatisticsGrouped<number>;
  reJudgingRuns: StatisticsGrouped<number>;
  users: number;
  problems: number;
  contests: number;
}

export interface StatisticsProblemResponseDto {
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

export type StatisticsUserTrackDataResponseDto = {
  timestamp: number;
  history: { href: string; uiId: string; timestamp: number }[];
};

export interface StatisticsUserTrackResponseDto {
  [key: string]: {
    user: UserOrganizationBasicInfoResponseDto;
    sessionId: string;
    data: StatisticsGrouped<StatisticsUserTrackDataResponseDto>;
  };
}
