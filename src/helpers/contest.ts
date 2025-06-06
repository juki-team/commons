import { MAX_DATE, MIN_DATE } from '../constants';
import { ContestSettings } from '../types';

export const isEndlessContest = (settings: Pick<ContestSettings, 'startTimestamp' | 'frozenTimestamp' | 'quietTimestamp' | 'endTimestamp' | 'penalty'> | undefined) => {
  return settings?.startTimestamp === MIN_DATE.getTime()
    && settings?.frozenTimestamp === MAX_DATE.getTime()
    && settings?.quietTimestamp === MAX_DATE.getTime()
    && settings?.endTimestamp === MAX_DATE.getTime()
    && settings?.penalty === 0;
};

export const isGlobalContest = (settings: Pick<ContestSettings, 'startTimestamp' | 'frozenTimestamp' | 'quietTimestamp' | 'endTimestamp' | 'penalty'> | undefined) => {
  return settings?.startTimestamp === 0
    && settings?.frozenTimestamp === 0
    && settings?.quietTimestamp === 0
    && settings?.endTimestamp === 0
    && settings?.penalty === 0;
};

export const isPastContest = (settings: Pick<ContestSettings, 'endTimestamp'> | undefined) => {
  return Date.now() > (settings?.endTimestamp ?? 0);
};

export const isFutureContest = (settings: Pick<ContestSettings, 'startTimestamp'> | undefined) => {
  return (settings?.startTimestamp ?? 0) > Date.now();
};
