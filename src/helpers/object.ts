function sizeOfObject(obj: object): number {
  const objClass = Object.prototype.toString.call(obj).slice(8, -1);
  if (objClass !== 'Object' && objClass !== 'Array') {
    return obj.toString().length * 2;
  }
  let bytes = 0;
  for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    bytes += key.length * 2 + sizeOf((obj as Record<string, unknown>)[key]);
  }
  return bytes;
}

function sizeOf(obj: unknown): number {
  if (obj === null || obj === undefined) return 0;
  switch (typeof obj) {
    case 'number':
      return 8;
    case 'string':
      return obj.length * 2;
    case 'boolean':
      return 4;
    case 'object':
      return sizeOfObject(obj);
    default:
      return 0;
  }
}

export function memorySizeOf(obj: unknown): number {
  return sizeOf(obj);
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
