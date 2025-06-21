type DateGranularity = 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year';

export type StatisticsDateType<
  T,
  U extends DateGranularity = never
> = {
  [K in U]: Record<number, T>;
};

export interface StatisticsCompanyResponseDTO {
  codeEditorRuns: StatisticsDateType<number, 'hour' | 'day' | 'month' | 'year'>,
  judgingRuns: StatisticsDateType<number, 'hour' | 'day' | 'month' | 'year'>,
  reJudgingRuns: StatisticsDateType<number, 'hour' | 'day' | 'month' | 'year'>,
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
  date: StatisticsDateType<number, 'hour' | 'day' | 'month' | 'year'>,
}

export interface StatisticsUserTrackResponseDTO {
  [key: string]: StatisticsDateType<{ href: string }, 'second'>,
}
