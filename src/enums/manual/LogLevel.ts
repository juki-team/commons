export const LogLevel = {
  FATAL: 'FATAL',
  ERROR: 'ERROR',
  WARN: 'WARN',
  INFO: 'INFO',
  DEBUG: 'DEBUG',
  TRACE: 'TRACE',
} as const;

export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];
