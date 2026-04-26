export const NotificationType = {
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  QUIET: 'quiet',
} as const;

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
