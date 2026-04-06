export const StatisticsType = {
  CODE_EDITOR_RUNS: 'CODE_EDITOR_RUNS',
  JUDGING_RUNS: 'JUDGING_RUNS',
  RE_JUDGING_RUNS: 'RE_JUDGING_RUNS',
  PROBLEM: 'PROBLEM',
  USER_PRESENCE_TRACK: 'USER_PRESENCE_TRACK',
  AWS_EC2_INSTANCES_TRACK: 'AWS_EC2_INSTANCES_TRACK',
} as const;

export type StatisticsType = (typeof StatisticsType)[keyof typeof StatisticsType];
