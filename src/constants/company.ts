import { OrganizationPlan } from '../prisma/enums/index.js';

export const JUKI_APP_COMPANY_KEY = 'juki-app';

export const COMPANY_PLAN: { [Key in OrganizationPlan]: { value: OrganizationPlan; label: string; description: string } } = {
  [OrganizationPlan.FREE]: {
    value: OrganizationPlan.FREE,
    label: 'free',
    description: 'the resources, runners and compilers, are shared with the juki.app giving priority to juki.app',
  },
  [OrganizationPlan.STANDARD]: {
    value: OrganizationPlan.STANDARD,
    label: 'standard',
    description: 'the resources are dedicated, 1 runner and 1 compiler',
  },
  [OrganizationPlan.PREMIUM]: {
    value: OrganizationPlan.PREMIUM,
    label: 'premium',
    description: 'the resources are dedicated and on demand use with at least 1 runner and 1 compiler',
  },
  [OrganizationPlan.CUSTOM]: {
    value: OrganizationPlan.CUSTOM,
    label: 'custom',
    description: 'the resources are dedicated and on demand use with at least 1 (settable) runner and 1 (settable) compiler',
  },
};
