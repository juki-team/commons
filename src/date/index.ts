export const changeYear = (date: Date, year: number): Date => {
  const newDate = new Date(date);
  newDate.setFullYear(year);
  return newDate;
};

export const changeMonth = (date: Date, monthIndex: number): Date => {
  const newDate = new Date(date);
  newDate.setMonth(monthIndex);
  return newDate;
};

export const changeDay = (date: Date, day: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(day);
  return newDate;
};

export const changeHours = (date: Date, hours: number): Date => {
  const newDate = new Date(date);
  newDate.setHours(hours);
  return newDate;
};

export const changeMinutes = (date: Date, minutes: number): Date => {
  const newDate = new Date(date);
  newDate.setMinutes(minutes);
  return newDate;
};

export const changeSeconds = (date: Date, seconds: number): Date => {
  const newDate = new Date(date);
  newDate.setSeconds(seconds);
  return newDate;
};

export const changeMilliseconds = (date: Date, milliseconds: number): Date => {
  const newDate = new Date(date);
  newDate.setMilliseconds(milliseconds);
  return newDate;
};

export const decreaseYear = (date: Date, count: number = 1): Date => changeYear(date, date.getFullYear() - count);

export const increaseYear = (date: Date, count: number = 1): Date => changeYear(date, date.getFullYear() + count);

export const decreaseMonth = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() - 1);
  return newDate;
};

export const increaseMonth = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + 1);
  return newDate;
};

export const decreaseDay = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - 1);
  return newDate;
};

export const increaseDay = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + 1);
  return newDate;
};

export const startOfDay = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};

export const endOfDay = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setHours(23, 59, 59, 999);
  return newDate;
};

export const startOfMonth = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setDate(1);
  return startOfDay(newDate);
};

export const endOfMonth = (date: Date): Date => {
  const nextMonth = startOfMonth(increaseMonth(date));
  return new Date(nextMonth.getTime() - 1);
};

export const startOfYear = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setMonth(0);
  return startOfMonth(newDate);
};

export const endOfYear = (date: Date): Date => {
  const nextYear = startOfYear(increaseYear(date));
  return new Date(nextYear.getTime() - 1);
};

export const startOfWeek = (date: Date): Date => {
  const newDate = new Date(date);
  while (newDate.getDay()) {
    newDate.setDate(newDate.getDate() - 1);
  }
  return startOfDay(newDate);
};

export const endOfWeek = (date: Date): Date => {
  const newDate = new Date(date);
  while (newDate.getDay() < 6) {
    newDate.setDate(newDate.getDate() + 1);
  }
  return endOfDay(newDate);
};

export const startOfHour = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setMinutes(0, 0, 0);
  return newDate;
};

export const endOfHour = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setMinutes(59, 59, 999);
  return newDate;
};

export const startOfMinute = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setSeconds(0, 0);
  return newDate;
};

export const endOfMinute = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setSeconds(59, 999);
  return newDate;
};

export const startOfSecond = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setMilliseconds(0);
  return newDate;
};

export const endOfSecond = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setMilliseconds(999);
  return newDate;
};

export const isEqual = (a: Date, b: Date): boolean => a.getTime() === b.getTime();

export const isSameYear = (a: Date, b: Date): boolean => a.getFullYear() === b.getFullYear();

export const isSameMonth = (a: Date, b: Date): boolean => isSameYear(a, b) && a.getMonth() === b.getMonth();

export const isSameDay = (a: Date, b: Date): boolean => isSameMonth(a, b) && a.getDate() === b.getDate();

export const isSameHour = (a: Date, b: Date): boolean => isSameDay(a, b) && a.getHours() === b.getHours();

export const isSameMinute = (a: Date, b: Date): boolean => isSameHour(a, b) && a.getMinutes() === b.getMinutes();

export const isSameSecond = (a: Date, b: Date): boolean => isSameMinute(a, b) && a.getSeconds() === b.getSeconds();

export const isSameMillisecond = (a: Date, b: Date): boolean => isEqual(a, b);

export const isToday = (date: Date): boolean => isSameDay(date, new Date());

export const isValidDate = (date: unknown): date is Date => date instanceof Date && !Number.isNaN(date.getTime());

export const isAfter = (a: Date, b: Date): boolean => a.getTime() > b.getTime();

export const isBefore = (a: Date, b: Date): boolean => a.getTime() < b.getTime();

export const isYearAfter = (a: Date, b: Date): boolean => a.getFullYear() > b.getFullYear();

export const isMonthAfter = (a: Date, b: Date): boolean =>
  isYearAfter(a, b) || (isSameYear(a, b) && a.getMonth() > b.getMonth());

export const isDayAfter = (a: Date, b: Date): boolean => isMonthAfter(a, b) || (isSameMonth(a, b) && a.getDate() > b.getDate());

export const isHoursAfter = (a: Date, b: Date): boolean => isDayAfter(a, b) || (isSameDay(a, b) && a.getHours() > b.getHours());

export const isMinutesAfter = (a: Date, b: Date): boolean =>
  isHoursAfter(a, b) || (isSameHour(a, b) && a.getMinutes() > b.getMinutes());

export const isSecondsAfter = (a: Date, b: Date): boolean =>
  isMinutesAfter(a, b) || (isSameMinute(a, b) && a.getSeconds() > b.getSeconds());

export const isMillisecondsAfter = (a: Date, b: Date): boolean =>
  isSecondsAfter(a, b) || (isSameSecond(a, b) && a.getMilliseconds() > b.getMilliseconds());

export const isYearBefore = (a: Date, b: Date): boolean => a.getFullYear() < b.getFullYear();

export const isMonthBefore = (a: Date, b: Date): boolean =>
  isYearBefore(a, b) || (isSameYear(a, b) && a.getMonth() < b.getMonth());

export const isDayBefore = (a: Date, b: Date): boolean =>
  isMonthBefore(a, b) || (isSameMonth(a, b) && a.getDate() < b.getDate());

export const isHoursBefore = (a: Date, b: Date): boolean =>
  isDayBefore(a, b) || (isSameDay(a, b) && a.getHours() < b.getHours());

export const isMinutesBefore = (a: Date, b: Date): boolean =>
  isHoursBefore(a, b) || (isSameHour(a, b) && a.getMinutes() < b.getMinutes());

export const isSecondsBefore = (a: Date, b: Date): boolean =>
  isMinutesBefore(a, b) || (isSameMinute(a, b) && a.getSeconds() < b.getSeconds());

export const isMillisecondsBefore = (a: Date, b: Date): boolean =>
  isSecondsBefore(a, b) || (isSameSecond(a, b) && a.getMilliseconds() < b.getMilliseconds());

export const isWithinInterval = (
  date: Date,
  { start, end }: { start: Date; end: Date },
  cmp: '[]' | '()' | '[)' | '(]' = '[]',
): boolean =>
  (cmp.charAt(0) === '[' ? isEqual(date, start) || isAfter(date, start) : isAfter(date, start)) &&
  (cmp.charAt(1) === ']' ? isEqual(date, end) || isBefore(date, end) : isBefore(date, end));
