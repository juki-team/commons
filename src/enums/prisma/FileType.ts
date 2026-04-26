export const FileType = {
  FOLDER: 'FOLDER',
  FILE: 'FILE',
} as const;

export type FileType = (typeof FileType)[keyof typeof FileType];
