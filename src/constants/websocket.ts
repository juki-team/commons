export const CHANNEL_CLIENT_SUBSCRIPTIONS = 'client:subscriptions';

export const CHANNEL_CLIENT_NOTIFICATIONS = 'client:notifications';

export const CHANNEL_CLIENT_USER_SESSION = (sessionId: string) => `client:user:${sessionId}`;

export const CHANNEL_SEVER_MESSAGES = 'server:messages';
