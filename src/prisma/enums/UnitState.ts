export const UnitState = {
  UNKNOWN: 'UNKNOWN',
  IN_CONSTRUCTION: 'IN_CONSTRUCTION',
  ON_SALE: 'ON_SALE',
  IN_PAYMENT_PROCESS: 'IN_PAYMENT_PROCESS',
  DELIVERED: 'DELIVERED',
} as const;

export type UnitState = (typeof UnitState)[keyof typeof UnitState];
