import { UPPERCASE_LETTERS } from '../constants';
import { Judge } from '../types';

export const isStringJson = (str: string): boolean => {
  try {
    return (JSON.parse(str) && !!str);
  } catch (e) {
    return false;
  }
};

export const isObjectJson = (obj: any): boolean => {
  try {
    return typeof JSON.stringify(obj) === 'string';
  } catch (e) {
    return false;
  }
};

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

export const getPlainText = async (url: string): Promise<string> => {
  return await fetch(url)
    .then(data => data.text())
    .catch((error) => {
      console.error('ERROR:', error);
      return '';
    });
};

export const objectUpdate = (base: any, update: any): any => {
  if (JSON.stringify(base) === JSON.stringify(update)) {
    return base;
  }
  if (base !== null && update !== null && !Array.isArray(base) && typeof base === 'object' && typeof update === 'object') {
    const mergeKeys = new Set([...Object.keys(base), ...Object.keys(update)]);
    Array.from(mergeKeys).forEach(key => {
      if (update[key] !== null && update[key] !== undefined && base[key] !== update[key]) {
        base[key] = objectUpdate(base[key], update[key]);
      }
    });
    return base;
  }
  if (update !== null && update !== undefined) {
    return update;
  }
  return base;
};

export const objectsUpdate = (base: any, ...objects: any[]): { [key: string]: any } => {
  let newObject = { ...base };
  objects.forEach((update: any) => {
    newObject = objectUpdate(newObject, update);
  });
  return newObject;
};

export const consoleWarn = (warn: any): void => {
  console.warn({ date: new Date(), warn });
};

export const indexToLetters = (index: number): string => {
  const d = Math.ceil(index / 26);
  if (d === 1) {
    return UPPERCASE_LETTERS.charAt(index - 1);
  }
  return UPPERCASE_LETTERS.charAt(d - 2) + UPPERCASE_LETTERS.charAt(index - (26 * (d - 1)) - 1);
};

export const lettersToIndex = (index: string): number => {
  if (index.length) {
    if (index.length === 1) {
      const d = UPPERCASE_LETTERS.indexOf(index);
      if (d !== -1) {
        return d + 1;
      }
    } else if (index.length === 2) {
      const a = index.charAt(0);
      const b = index.charAt(1);
      const numA = lettersToIndex(a);
      const numB = lettersToIndex(b);
      return numA * 26 + numB;
    }
  }
  return 0;
};

export const getProblemJudgeKey = (judge: Judge, key: string) => {
  return `${judge}:${key}`;
};

export const getJudgeKeyOfProblemJudgeKey = (problemJudgeKey: string): { judge: Judge, key: string } => {
  const params = problemJudgeKey.split(':');
  const judge = params[0] as Judge;
  const key = params.splice(1).join(':');
  return {
    judge,
    key,
  };
};

/**
 * https://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable-string
 * Format bytes as human-readable text.
 *
 * @param bytes Number of bytes.
 * @param si True to use metric (SI) units, aka powers of 1000. False to use
 *           binary (IEC), aka powers of 1024.
 * @param dp Number of decimal places to display.
 *
 * @return Formatted string.
 */
export function humanFileSize(bytes: number, si = false, dp = 1) {
  const thresh = si ? 1000 : 1024;
  
  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }
  
  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let u = -1;
  const r = 10 ** dp;
  
  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
  
  return bytes.toFixed(dp) + ' ' + units[u];
}

export function stringToArrayBuffer(s: string) {
  const buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
  const view = new Uint8Array(buf);  //create uint8array as viewer
  for (let i = 0; i < s.length; i++) {
    view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
  }
  return buf;
}
