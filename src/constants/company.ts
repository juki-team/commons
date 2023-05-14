export const JUKI_APP_COMPANY_KEY = 'juki-app';

export const COMPANY_PLAN: { [key in CompanyPlan]: { value: CompanyPlan, label: string, description: string } } = {
  [CompanyPlan.FREE]: {
    value: CompanyPlan.FREE,
    label: 'free',
    description: 'the resources, runners and compilers, are shared with the juki.app giving priority to juki.app',
  },
  [CompanyPlan.STANDARD]: {
    value: CompanyPlan.STANDARD,
    label: 'standard',
    description: 'the resources are dedicated, 1 runner and 1 compiler',
  },
  [CompanyPlan.PREMIUM]: {
    value: CompanyPlan.PREMIUM,
    label: 'premium',
    description: 'the resources are dedicated and on demand use with at least 1 runner and 1 compiler',
  },
  [CompanyPlan.CUSTOM]: {
    value: CompanyPlan.CUSTOM,
    label: 'custom',
    description: 'the resources are dedicated and on demand use with at least 1 (settable) runner and 1 (settable) compiler',
  },
};
