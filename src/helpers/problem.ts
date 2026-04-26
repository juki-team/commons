import type { Judge } from '../types/index.js';

export const getProblemJudgeKey = (judge: Judge, key: string): string => `${judge}-${key}`;
