import { SEPARATOR_TOKEN, UPPERCASE_LETTERS } from '../constants/commons.js';

export const indexToLetters = (index: number): string => {
  const d = Math.ceil(index / 26);
  if (d === 1) {
    return UPPERCASE_LETTERS.charAt(index - 1);
  }
  return UPPERCASE_LETTERS.charAt(d - 2) + UPPERCASE_LETTERS.charAt(index - 26 * (d - 1) - 1);
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

export const chunkString = (str: string, size: number): string[] => {
  const numChunks = Math.ceil(str.length / size);
  const chunks = new Array(numChunks);
  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }
  return chunks;
};

export const getRandomString = (length: number): string => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let retVal = '';
  for (let i = 0; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return retVal;
};

export const stringToArrayBuffer = (str: string): ArrayBuffer => {
  const buf = new ArrayBuffer(str.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < str.length; i++) {
    view[i] = str.charCodeAt(i) & 0xff;
  }
  return buf;
};

export const join = (array: (string | null | Date)[]): string => array.join(SEPARATOR_TOKEN);

export const split = (text: string): string[] => text.split(SEPARATOR_TOKEN);
