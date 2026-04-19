export const OrganizationPlan = {
  FREE: 'FREE',
  STANDARD: 'STANDARD',
  PREMIUM: 'PREMIUM',
  CUSTOM: 'CUSTOM',
} as const;

export type OrganizationPlan = (typeof OrganizationPlan)[keyof typeof OrganizationPlan];
