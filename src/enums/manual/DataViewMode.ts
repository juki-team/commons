export const DataViewMode = {
  CARDS: 'CARDS',
  ROWS: 'ROWS',
} as const;

export type DataViewMode = (typeof DataViewMode)[keyof typeof DataViewMode];
