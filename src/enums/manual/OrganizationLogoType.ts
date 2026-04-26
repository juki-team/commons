export const OrganizationLogoType = {
  HORIZONTAL_WHITE: 'horizontal-white',
  HORIZONTAL_COLOR: 'horizontal-color',
  VERTICAL_WHITE: 'vertical-white',
  VERTICAL_COLOR: 'vertical-color',
} as const;

export type OrganizationLogoType = (typeof OrganizationLogoType)[keyof typeof OrganizationLogoType];
