import { SplitTime } from '../types';

export function splitTime(timeRemaining: number) {
  const remaining: Array<SplitTime> = [];
  
  // const aYearMilliseconds = 1000 * 60 * 60 * 24 * 365;
  // const remainingYears = Math.floor(timeRemaining / aYearMilliseconds);
  // remaining.push({ remaining: remainingYears, label: 'years', milliseconds: aYearMilliseconds });
  
  // const aWeekMilliseconds = 1000 * 60 * 60 * 24 * 7;
  // const remainingWeeks = Math.floor((timeRemaining % aYearMilliseconds) / aWeekMilliseconds);
  // remaining.push({ remaining: remainingWeeks, label: 'weeks', milliseconds: aWeekMilliseconds });
  
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
  
  // while (remaining[0].remaining <= 0) {
  //   remaining.shift();
  //   if (remaining.length === 3) {
  //     break;
  //   }
  // }
  
  return remaining as [ SplitTime, SplitTime, SplitTime, SplitTime, SplitTime, SplitTime ];
}
