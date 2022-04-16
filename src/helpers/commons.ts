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
