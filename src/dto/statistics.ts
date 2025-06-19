type StatisticsDateType = {
  hour: {
    [key: number]: number,
  }
  day: {
    [key: number]: number,
  },
  month: {
    [key: number]: number,
  },
  year: {
    [key: number]: number,
  }
}

export interface StatisticsCompanyResponseDTO {
  codeEditorRuns: StatisticsDateType,
  judgingRuns: StatisticsDateType,
  reJudgingRuns: StatisticsDateType,
  users: number,
  problems: number,
  contests: number,
}

export interface StatisticsProblemResponseDTO {
  verdict: {
    [key: string]: {
      label: number,
      key: string,
      value: number,
    }
  },
  language: {
    [key: string]: {
      label: number,
      key: string,
      value: number,
    }
  },
  date: StatisticsDateType,
}
