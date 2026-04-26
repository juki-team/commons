import type { Judge } from '../enums/index.js';

export const getProblemJudgeKey = (judge: Judge, key: string): string => `${judge}-${key}`;
