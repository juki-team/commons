import { SEPARATOR_TOKEN, UPPERCASE_LETTERS } from '../constants/commons.js';
import type { Judge } from '../types/index.js';

export function isStringJson(str: unknown): str is string {
  try {
    if (typeof str === 'string') {
      JSON.parse(str);
      return true;
    }
  } catch {
    return false;
  }
  return false;
}

export function safeJsonParse(str: unknown): unknown {
  try {
    if (typeof str === 'string') {
      return JSON.parse(str);
    }
  } catch {
    return null;
  }
  return null;
}

export function isObjectJson(obj: unknown): boolean {
  try {
    return typeof JSON.stringify(obj) === 'string';
  } catch {
    return false;
  }
}

export function mex(array: number[]): number {
  let i = 0;
  while (array.indexOf(i) !== -1) {
    i++;
  }
  return i;
}

export function range(start: number, end: number): number[] {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

export async function getPlainText(url: string): Promise<string> {
  return await fetch(url)
    .then((data) => data.text())
    .catch((error) => {
      console.error('ERROR:', error);
      return '';
    });
}

function mergeRecords(b: Record<string, unknown>, u: Record<string, unknown>): Record<string, unknown> {
  const mergeKeys = new Set([...Object.keys(b), ...Object.keys(u)]);
  for (const key of mergeKeys) {
    if (u[key] !== null && u[key] !== undefined && b[key] !== u[key]) {
      b[key] = objectUpdate(b[key], u[key]);
    }
  }
  return b;
}

export function objectUpdate(base: unknown, update: unknown): unknown {
  if (JSON.stringify(base) === JSON.stringify(update)) {
    return base;
  }
  if (base !== null && update !== null && !Array.isArray(base) && typeof base === 'object' && typeof update === 'object') {
    return mergeRecords(base as Record<string, unknown>, update as Record<string, unknown>);
  }
  if (update !== null && update !== undefined) {
    return update;
  }
  return base;
}

export function objectsUpdate(base: Record<string, unknown>, ...objects: Record<string, unknown>[]): Record<string, unknown> {
  let newObject = { ...base };
  for (const update of objects) {
    newObject = objectUpdate(newObject, update) as Record<string, unknown>;
  }
  return newObject;
}

export function consoleWarn(...warn: unknown[]): void {
  console.warn(new Date().toLocaleString(), ...warn);
}

export function consoleInfo(...info: unknown[]): void {
  console.info(new Date().toLocaleString(), ...info);
}

export function consoleError(...error: unknown[]): void {
  console.error(new Date().toLocaleString(), ...error);
}

export function indexToLetters(index: number): string {
  const d = Math.ceil(index / 26);
  if (d === 1) {
    return UPPERCASE_LETTERS.charAt(index - 1);
  }
  return UPPERCASE_LETTERS.charAt(d - 2) + UPPERCASE_LETTERS.charAt(index - 26 * (d - 1) - 1);
}

export function lettersToIndex(index: string): number {
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
}

export function getProblemJudgeKey(judge: Judge, key: string) {
  return `${judge}-${key}`;
}

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
    return `${bytes} B`;
  }

  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let u = -1;
  let value = bytes;
  const r = 10 ** dp;

  do {
    value /= thresh;
    ++u;
  } while (Math.round(Math.abs(value) * r) / r >= thresh && u < units.length - 1);

  return `${value.toFixed(dp)} ${units[u]}`;
}

export function stringToArrayBuffer(str: string) {
  const buf = new ArrayBuffer(str.length); //convert str to arrayBuffer
  const view = new Uint8Array(buf); //create Uint8Array as viewer
  for (let i = 0; i < str.length; i++) {
    view[i] = str.charCodeAt(i) & 0xff; //convert to octet
  }
  return buf;
}

export function chunkString(str: string, size: number): string[] {
  const numChunks = Math.ceil(str.length / size);
  const chunks = new Array(numChunks);

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }

  return chunks;
}

export function getRandomString(length: number) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // 62
  let retVal = '';
  for (let i = 0; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return retVal;
}

export function join(array: (string | null | Date)[]) {
  return array.join(SEPARATOR_TOKEN);
}

export function split(text: string) {
  return text.split(SEPARATOR_TOKEN);
}

export const areArraysDifferent = <T>(a: T[], b: T[]) => {
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
