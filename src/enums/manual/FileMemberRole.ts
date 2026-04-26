export const FileMemberRole = {
  VIEWER: 'VIEWER',
  EDITOR: 'EDITOR',
} as const;

export type FileMemberRole = (typeof FileMemberRole)[keyof typeof FileMemberRole];
