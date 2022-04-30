export const splitTime = (timeRemaining: number): Array<{ remaining: number, label: string }> => {
  const remaining: Array<{ remaining: number, label: string }> = [];
  
  const aYearMilliseconds = 1000 * 60 * 60 * 24 * 365;
  const remainingYears = Math.floor(timeRemaining / aYearMilliseconds);
  remaining.push({ remaining: remainingYears, label: 'years' });
  
  const aWeekMilliseconds = 1000 * 60 * 60 * 24 * 7;
  const remainingWeeks = Math.floor((timeRemaining % aYearMilliseconds) / aWeekMilliseconds);
  remaining.push({ remaining: remainingWeeks, label: 'weeks' });
  
  const aDayMilliseconds = 1000 * 60 * 60 * 24;
  const remainingDays = Math.floor((timeRemaining % aWeekMilliseconds) / aDayMilliseconds);
  remaining.push({ remaining: remainingDays, label: 'days' });
  
  const aHourMilliseconds = 1000 * 60 * 60;
  const remainingHours = Math.floor((timeRemaining % aDayMilliseconds) / aHourMilliseconds);
  remaining.push({ remaining: remainingHours, label: 'hours' });
  
  const aMinuteMilliseconds = 1000 * 60;
  const remainingMinutes = Math.floor((timeRemaining % aHourMilliseconds) / aMinuteMilliseconds);
  remaining.push({ remaining: remainingMinutes, label: 'minutes' });
  
  const aSecondMilliseconds = 1000;
  const remainingSeconds = Math.floor((timeRemaining % aMinuteMilliseconds) / aSecondMilliseconds);
  remaining.push({ remaining: remainingSeconds, label: 'seconds' });
  
  const remainingMilliseconds = Math.floor(timeRemaining % aSecondMilliseconds);
  remaining.push({ remaining: remainingMilliseconds, label: 'milliseconds' });
  
  while (remaining[0].remaining <= 0) {
    remaining.shift();
    if (remaining.length === 3) {
      break;
    }
  }
  
  return remaining;
};
