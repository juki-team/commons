export const ContestProblemBlockedByType = {
  UNMET_PREREQUISITES: 'UNMET_PREREQUISITES',
  MAX_ACCEPTED_SUBMISSIONS_ACHIEVED: 'MAX_ACCEPTED_SUBMISSIONS_ACHIEVED',
  START_TIME_IN_THE_FUTURE: 'START_TIME_IN_THE_FUTURE',
  END_TIME_IN_THE_PAST: 'END_TIME_IN_THE_PAST',
} as const;

export type ContestProblemBlockedByType = (typeof ContestProblemBlockedByType)[keyof typeof ContestProblemBlockedByType];
