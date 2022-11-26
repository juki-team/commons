import { SplitTime } from '../types';

export function splitTime(timeRemaining: number): Array<SplitTime> {
  const remaining: Array<SplitTime> = [];
  
  // const aYearMilliseconds = 1000 * 60 * 60 * 24 * 365;
  // const remainingYears = Math.floor(timeRemaining / aYearMilliseconds);
  // remaining.push({ remaining: remainingYears, label: 'years', milliseconds: aYearMilliseconds });
  
  // const aWeekMilliseconds = 1000 * 60 * 60 * 24 * 7;
  // const remainingWeeks = Math.floor((timeRemaining % aYearMilliseconds) / aWeekMilliseconds);
  // remaining.push({ remaining: remainingWeeks, label: 'weeks', milliseconds: aWeekMilliseconds });
  
  const aWeekMilliseconds = 1000 * 60 * 60 * 24 * 7;
  const remainingWeeks = Math.floor(timeRemaining / aWeekMilliseconds);
  remaining.push({ remaining: remainingWeeks, label: remainingWeeks === 1 ? 'week' : 'weeks', milliseconds: aWeekMilliseconds });
  
  const aDayMilliseconds = 1000 * 60 * 60 * 24;
  const remainingDays = Math.floor((timeRemaining % aWeekMilliseconds) / aDayMilliseconds);
  remaining.push({ remaining: remainingDays, label: remainingDays === 1 ? 'day' : 'days', milliseconds: aDayMilliseconds });
  
  const aHourMilliseconds = 1000 * 60 * 60;
  const remainingHours = Math.floor((timeRemaining % aDayMilliseconds) / aHourMilliseconds);
  remaining.push({ remaining: remainingHours, label: remainingHours === 1 ? 'hour' : 'hours', milliseconds: aHourMilliseconds });
  
  const aMinuteMilliseconds = 1000 * 60;
  const remainingMinutes = Math.floor((timeRemaining % aHourMilliseconds) / aMinuteMilliseconds);
  remaining.push({
    remaining: remainingMinutes,
    label: remainingMinutes === 1 ? 'minute' : 'minutes',
    milliseconds: aMinuteMilliseconds,
  });
  
  const aSecondMilliseconds = 1000;
  const remainingSeconds = Math.floor((timeRemaining % aMinuteMilliseconds) / aSecondMilliseconds);
  remaining.push({
    remaining: remainingSeconds,
    label: remainingSeconds === 1 ? 'second' : 'seconds',
    milliseconds: aSecondMilliseconds,
  });
  
  const remainingMilliseconds = Math.floor(timeRemaining % aSecondMilliseconds);
  remaining.push({
    remaining: remainingMilliseconds,
    label: remainingMilliseconds === 1 ? 'millisecond' : 'milliseconds',
    milliseconds: 1,
  });
  
  // while (remaining[0].remaining <= 0) {
  //   remaining.shift();
  //   if (remaining.length === 3) {
  //     break;
  //   }
  // }
  
  return remaining;
}
