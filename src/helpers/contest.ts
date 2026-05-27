import { MAX_DATE, MIN_DATE } from '../constants/index.js';
import type { ContestSettings } from '../types/index.js';

export const isEndlessContest = (
  settings: Pick<ContestSettings, 'startsAt' | 'frozenAt' | 'silencedAt' | 'endsAt' | 'penalty'> | undefined,
) => {
  return (
    settings?.startsAt === MIN_DATE.getTime() &&
    settings?.frozenAt === MAX_DATE.getTime() &&
    settings?.silencedAt === MAX_DATE.getTime() &&
    settings?.endsAt === MAX_DATE.getTime() &&
    settings?.penalty === 0
  );
};

export const isGlobalContest = (
  settings: Pick<ContestSettings, 'startsAt' | 'frozenAt' | 'silencedAt' | 'endsAt' | 'penalty'> | undefined,
) => {
  return (
    settings?.startsAt === 0 &&
    settings?.frozenAt === 0 &&
    settings?.silencedAt === 0 &&
    settings?.endsAt === 0 &&
    settings?.penalty === 0
  );
};

export const isPastContest = (settings: Pick<ContestSettings, 'endsAt'> | undefined) => {
  return Date.now() > (settings?.endsAt ?? 0);
};

export const isFutureContest = (settings: Pick<ContestSettings, 'startsAt'> | undefined) => {
  return (settings?.startsAt ?? 0) > Date.now();
};
