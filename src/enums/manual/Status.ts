export const Status = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  LOADING: 'LOADING',
  NONE: 'NONE',
} as const;

export type Status = (typeof Status)[keyof typeof Status];
