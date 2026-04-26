export const Theme = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
} as const;

export type Theme = (typeof Theme)[keyof typeof Theme];
