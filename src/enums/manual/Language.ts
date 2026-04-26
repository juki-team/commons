export const Language = {
  ES: 'ES',
  EN: 'EN',
} as const;

export type Language = (typeof Language)[keyof typeof Language];
