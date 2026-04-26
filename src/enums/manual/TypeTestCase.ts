export const TypeTestCase = {
  INPUT: 'INPUT',
  OUTPUT: 'OUTPUT',
} as const;

export type TypeTestCase = (typeof TypeTestCase)[keyof typeof TypeTestCase];
