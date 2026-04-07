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
