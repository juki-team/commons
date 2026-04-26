export const padStart = (n: number, maxLength: number, fillString: string = '0'): string =>
  `${n}`.padStart(maxLength, fillString);

export const padEnd = (n: number, maxLength: number, fillString: string = '0'): string => `${n}`.padEnd(maxLength, fillString);
