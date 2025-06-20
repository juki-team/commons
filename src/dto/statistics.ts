export type StatisticsDateType<T> = {
  hour: {
    [key: number]: T,
  }
  day: {
    [key: number]: T,
  },
  month: {
    [key: number]: T,
  },
  year: {
    [key: number]: T,
  }
}

export interface StatisticsCompanyResponseDTO {
  codeEditorRuns: StatisticsDateType<number>,
  judgingRuns: StatisticsDateType<number>,
  reJudgingRuns: StatisticsDateType<number>,
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
  date: StatisticsDateType<number>,
}

export interface StatisticsUserTrackResponseDTO {
  [key: string]: StatisticsDateType<{ href: string }>;
}
