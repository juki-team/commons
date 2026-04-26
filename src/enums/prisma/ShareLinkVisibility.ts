export const ShareLinkVisibility = {
  PUBLIC: 'PUBLIC', // anyone with the link
  RESTRICTED: 'RESTRICTED', // only allowedUserIds
} as const;

export type ShareLinkVisibility = (typeof ShareLinkVisibility)[keyof typeof ShareLinkVisibility];
