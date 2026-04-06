export const LogType = {
  EC2: 'EC2',
  ECS_TASK: 'ECS_TASK',
  INSTANCES: 'INSTANCES',
  UI_ERROR: 'UI_ERROR',
  UI_INFO: 'UI_INFO',
} as const;

export type LogType = (typeof LogType)[keyof typeof LogType];
