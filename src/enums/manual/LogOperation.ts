export const LogOperation = {
  REMOVE: 'REMOVE',
  ADD: 'ADD',
  UPDATE: 'UPDATE',
} as const;

export type LogOperation = (typeof LogOperation)[keyof typeof LogOperation];
