/* eslint-disable no-extend-native */

declare global {
  interface Number {
    padStart(maxLength: number, fillString?: string): string;

    padEnd(maxLength: number, fillString?: string): string;
  }
}

Number.prototype.padStart = function (maxLength, fillString = '0') {
  return `${this}`.padStart(maxLength, fillString);
};

Number.prototype.padEnd = function (maxLength, fillString = '0') {
  return `${this}`.padEnd(maxLength, fillString);
};

export {};
