export const CompanyPlan = {
  FREE: 'FREE',
  STANDARD: 'STANDARD',
  PREMIUM: 'PREMIUM',
  CUSTOM: 'CUSTOM',
} as const;

export type CompanyPlan = (typeof CompanyPlan)[keyof typeof CompanyPlan];
