export const CHANNEL_CONTROL_SUBSCRIPTIONS = 'control:subscriptions';

export const CHANNEL_NOTIFICATIONS = 'notifications';

export const CHANNEL_USER_SESSION = (sessionId: string) => `user:${sessionId}`;
