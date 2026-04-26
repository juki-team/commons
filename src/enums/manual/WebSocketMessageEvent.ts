export const WebSocketMessageEvent = {
  PING: 'PING',
  CLIENT_TRACK_LOCATION: 'CLIENT_TRACK_LOCATION',
  CLIENT_TRACK_SCREENSHOT: 'CLIENT_TRACK_SCREENSHOT',
  CLIENT_TRACK_DEVICE: 'CLIENT_TRACK_DEVICE',
  CHAT_COMPLETIONS: 'CHAT_COMPLETIONS',
} as const;

export type WebSocketMessageEvent = (typeof WebSocketMessageEvent)[keyof typeof WebSocketMessageEvent];
