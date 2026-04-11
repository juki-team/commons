export const TelemetryType = {
  UI_ERROR: 'UI_ERROR',
  UI_INFO: 'UI_INFO',
  EC2: 'EC2',
  ECS_TASK: 'ECS_TASK',
  INSTANCES: 'INSTANCES',
  USER_SESSION: 'USER_SESSION' // company-id/user-id: { timestamp: number, href: string, uiId: string,
} as const;

export type TelemetryType = (typeof TelemetryType)[keyof typeof TelemetryType];
