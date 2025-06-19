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
  date: StatisticsDateType,
}
