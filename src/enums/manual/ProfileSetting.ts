export const ProfileSetting = {
  NEWSLETTER_SUBSCRIPTION: 'newsletterSubscription',
  LANGUAGE: 'preferredLanguage',
  THEME: 'preferredTheme',
  DATA_VIEW_MODE: 'preferredDataViewMode',
  MENU_VIEW_MODE: 'preferredMenuViewMode',
  TIME_ZONE: 'preferredTimeZone',
  FONT_SIZE: 'preferredFontSize',
} as const;

export type ProfileSetting = (typeof ProfileSetting)[keyof typeof ProfileSetting];
