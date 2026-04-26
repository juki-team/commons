export const consoleWarn = (...warn: unknown[]): void => {
  console.warn(new Date().toLocaleString(), ...warn);
};

export const consoleInfo = (...info: unknown[]): void => {
  console.info(new Date().toLocaleString(), ...info);
};

export const consoleError = (...error: unknown[]): void => {
  console.error(new Date().toLocaleString(), ...error);
};
