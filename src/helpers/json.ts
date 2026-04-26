export const isStringJson = (str: unknown): str is string => {
  try {
    if (typeof str === 'string') {
      JSON.parse(str);
      return true;
    }
  } catch {
    return false;
  }
  return false;
};

export const safeJsonParse = (str: unknown): unknown => {
  try {
    if (typeof str === 'string') {
      return JSON.parse(str);
    }
  } catch {
    return null;
  }
  return null;
};

export const isObjectJson = (obj: unknown): boolean => {
  try {
    return typeof JSON.stringify(obj) === 'string';
  } catch {
    return false;
  }
};
