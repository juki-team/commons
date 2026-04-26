export const mex = (array: number[]): number => {
  let i = 0;
  while (array.indexOf(i) !== -1) {
    i++;
  }
  return i;
};

export const range = (start: number, end: number): number[] => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

export const areArraysDifferent = <T>(a: T[], b: T[]): boolean => {
  if (a === b) {
    return false;
  }
  if (a.length !== b.length) {
    return true;
  }
  for (let i = 0; i < b.length; i += 1) {
    if (b[i] !== a[i]) {
      return true;
    }
  }
  return false;
};
