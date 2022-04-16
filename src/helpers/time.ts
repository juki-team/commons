import { MONTH_NAMES } from '../constants/date';

export const durationToDHMS = (duration: number): string => { // milliseconds
  const days = Math.floor(duration / (1000 * 60 * 60 * 24));
  duration %= 1000 * 60 * 60 * 24;
  const hours = Math.floor(duration / (1000 * 60 * 60));
  duration %= 1000 * 60 * 60;
  const minutes = Math.floor(duration / (1000 * 60));
  duration %= 1000 * 60;
  const seconds = Math.floor(duration / 1000);
  return (days ? (days + 'd ') : '') + hours + 'h ' + minutes + 'm ' + seconds + 's';
};

export const splitTime = (timeRemaining: number): Array<{ remaining: number, label: string }> => {
  const remainings: Array<{ remaining: number, label: string }> = [];
  
  const aYearMilliseconds = 1000 * 60 * 60 * 24 * 365;
  const remainingYears = Math.floor(timeRemaining / aYearMilliseconds);
  remainings.push({ remaining: remainingYears, label: 'years' });
  
  const aWeekMilliseconds = 1000 * 60 * 60 * 24 * 7;
  const remainingWeeks = Math.floor((timeRemaining % aYearMilliseconds) / aWeekMilliseconds);
  remainings.push({ remaining: remainingWeeks, label: 'weeks' });
  
  const aDayMilliseconds = 1000 * 60 * 60 * 24;
  const remainingDays = Math.floor((timeRemaining % aWeekMilliseconds) / aDayMilliseconds);
  remainings.push({ remaining: remainingDays, label: 'days' });
  
  const aHourMilliseconds = 1000 * 60 * 60;
  const remainingHours = Math.floor((timeRemaining % aDayMilliseconds) / aHourMilliseconds);
  remainings.push({ remaining: remainingHours, label: 'hours' });
  
  const aMinuteMilliseconds = 1000 * 60;
  const remainingMinutes = Math.floor((timeRemaining % aHourMilliseconds) / aMinuteMilliseconds);
  remainings.push({ remaining: remainingMinutes, label: 'minutes' });
  
  const remainingSeconds = Math.floor((timeRemaining % aMinuteMilliseconds) / 1000);
  remainings.push({ remaining: remainingSeconds, label: 'seconds' });
  
  while (remainings[0].remaining <= 0) {
    remainings.shift();
    if (remainings.length === 3) {
      break;
    }
  }
  return remainings;
};

export const dateToDDMMYYY = (date: Date): string => {
  const month = (date.getMonth() + 1 + '').padStart(2, '0');
  const day = (date.getDate() + '').padStart(2, '0');
  const year = date.getFullYear();
  return day + '/' + month + '/' + year;
};

export const dateToHHMM = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return hours + ':' + minutes;
};

export const dateToMMMMMDDYYYY = (date: Date): string => {
  const month = MONTH_NAMES[date.getMonth()];
  const day = (date.getDate() + '');//.padStart(2, '0');
  const year = date.getFullYear();
  return month + ' ' + day + ', ' + year;
};
