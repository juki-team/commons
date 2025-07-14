export function removeExtension(fileName: string) {
  const i = fileName.lastIndexOf('.');
  return i !== -1 ? fileName.substring(0, i) : fileName;
}
