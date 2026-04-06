export const TrackType = {
  USER_SESSION: 'USER_SESSION',
} as const;

export type TrackType = (typeof TrackType)[keyof typeof TrackType];
