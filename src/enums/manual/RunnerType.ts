export const RunnerType = {
  HIGH_PERFORMANCE: 'HIGH_PERFORMANCE',
  LOW_PERFORMANCE: 'LOW_PERFORMANCE',
} as const;

export type RunnerType = (typeof RunnerType)[keyof typeof RunnerType];
