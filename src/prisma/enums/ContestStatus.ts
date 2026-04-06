export const ContestStatus = {
  PUBLIC: 'PUBLIC',
  RESERVED: 'RESERVED',
  ARCHIVED: 'ARCHIVED',
} as const;

export type ContestStatus = (typeof ContestStatus)[keyof typeof ContestStatus];
