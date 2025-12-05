export const CHANNEL_PUBLISH_SUBSCRIPTIONS = 'pub:subscriptions';

export const CHANNEL_SUBSCRIBE_NOTIFICATIONS = 'sub:notifications';

export const CHANNEL_SUBSCRIBE_CLIENT = (clientId: string) => `sub:client:${clientId}`;

export const CHANNEL_PUBLISH_MESSAGES = 'pub:messages';
