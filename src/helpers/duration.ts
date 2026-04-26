import type { SplitTime } from '../types/index.js';

export const splitTime = (timeRemaining: number): [SplitTime, SplitTime, SplitTime, SplitTime, SplitTime, SplitTime] => {
  const remaining: Array<SplitTime> = [];

  const aSecondMilliseconds = 1000;
  const aMinuteMilliseconds = aSecondMilliseconds * 60;
  const aHourMilliseconds = aMinuteMilliseconds * 60;
  const aDayMilliseconds = aHourMilliseconds * 24;
  const aWeekMilliseconds = aDayMilliseconds * 7;

  const remainingWeeks = Math.floor(timeRemaining / aWeekMilliseconds);
  remaining.push({
    remaining: remainingWeeks,
    label: remainingWeeks === 1 ? 'week' : 'weeks',
    abbreviatedLabel: 'w',
    milliseconds: aWeekMilliseconds,
    digits: 2,
  });

  const remainingDays = Math.floor((timeRemaining % aWeekMilliseconds) / aDayMilliseconds);
  remaining.push({
    remaining: remainingDays,
    label: remainingDays === 1 ? 'day' : 'days',
    abbreviatedLabel: 'd',
    milliseconds: aDayMilliseconds,
    digits: 2,
  });

  const remainingHours = Math.floor((timeRemaining % aDayMilliseconds) / aHourMilliseconds);
  remaining.push({
    remaining: remainingHours,
    label: remainingHours === 1 ? 'hour' : 'hours',
    abbreviatedLabel: 'h',
    milliseconds: aHourMilliseconds,
    digits: 2,
  });

  const remainingMinutes = Math.floor((timeRemaining % aHourMilliseconds) / aMinuteMilliseconds);
  remaining.push({
    remaining: remainingMinutes,
    label: remainingMinutes === 1 ? 'minute' : 'minutes',
    abbreviatedLabel: 'm',
    milliseconds: aMinuteMilliseconds,
    digits: 2,
  });

  const remainingSeconds = Math.floor((timeRemaining % aMinuteMilliseconds) / aSecondMilliseconds);
  remaining.push({
    remaining: remainingSeconds,
    label: remainingSeconds === 1 ? 'second' : 'seconds',
    abbreviatedLabel: 's',
    milliseconds: aSecondMilliseconds,
    digits: 2,
  });

  const remainingMilliseconds = Math.floor(timeRemaining % aSecondMilliseconds);
  remaining.push({
    remaining: remainingMilliseconds,
    label: remainingMilliseconds === 1 ? 'millisecond' : 'milliseconds',
    abbreviatedLabel: 'ms',
    milliseconds: 1,
    digits: 3,
  });

  return remaining as [SplitTime, SplitTime, SplitTime, SplitTime, SplitTime, SplitTime];
};
