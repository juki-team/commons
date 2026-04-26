export const removeExtension = (fileName: string): string => {
  const i = fileName.lastIndexOf('.');
  return i !== -1 ? fileName.substring(0, i) : fileName;
};

/**
 * Format bytes as human-readable text.
 * Source: https://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable-string
 */
export const humanFileSize = (bytes: number, si = false, dp = 1): string => {
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
};
