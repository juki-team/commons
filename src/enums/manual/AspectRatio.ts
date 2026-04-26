export const AspectRatio = {
  RATIO_21_9: '21:9',
  RATIO_20_9: '20:9',
  RATIO_16_9: '16:9',
  RATIO_16_10: '16:10',
  RATIO_3_2: '3:2',
  RATIO_4_3: '4:3',
  RATIO_5_4: '5:4',
  RATIO_1_1: '1:1',
} as const;

export type AspectRatio = (typeof AspectRatio)[keyof typeof AspectRatio];
