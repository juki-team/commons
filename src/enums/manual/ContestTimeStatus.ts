export const ContestTimeStatus = {
  UPCOMING: 'upcoming',
  LIVE: 'live',
  PAST: 'past',
} as const;

export type ContestTimeStatus = (typeof ContestTimeStatus)[keyof typeof ContestTimeStatus];
