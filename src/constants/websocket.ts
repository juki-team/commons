import { ClientId, ContestChannelRole } from '../types';

// LEGACY channels (fan-out per client through the subscriptions registry in Redis)

export const CHANNEL_PUBLISH_SUBSCRIPTIONS = 'pub:subscriptions';

export const CHANNEL_SUBSCRIBE_NOTIFICATIONS = 'sub:notifications';

export const CHANNEL_SUBSCRIBE_CLIENT = (clientId: ClientId) => `sub:client:${clientId}`;

export const CHANNEL_PUBLISH_MESSAGES = 'pub:messages';

export const CHANNEL_PRESENCE_CLIENT = 'pre:client';

// TOPIC channels
// The backend publishes each event once on the channel of its topic and Ably does the fan-out.
// Who can subscribe to each channel is decided by the API in the Ably token (capability), never by the client.
// Dynamic segments are encoded so a key can never inject a `:` (the Ably segment separator used by the wildcards).

const segment = (value: string) => encodeURIComponent(value);

/** private: events of one session (code runs, requested data, client track commands) */
export const CHANNEL_SESSION = (sessionId: string) => `session:${segment(sessionId)}`;

/** private: events of one user (own submissions while the contest is frozen, notifications) */
export const CHANNEL_USER = (userId: string) => `user:${segment(userId)}`;

/** public: status of a submission when it is visible to everyone */
export const CHANNEL_SUBMISSION = (submitId: string) => `submission:${segment(submitId)}`;

/** public: changes of a problem */
export const CHANNEL_PROBLEM = (problemKey: string) => `problem:${segment(problemKey)}`;

/** per role: events of a contest for one role (and the roles above it, see `ContestChannelRole`) */
export const CHANNEL_CONTEST = (contestKey: string, role: ContestChannelRole) => `contest:${segment(contestKey)}:${role}`;

/** system administrators only: data sent by a tracked client (screenshots, location, device) */
export const CHANNEL_CLIENT_TRACK = (trackedClientId: ClientId) => `client-track:${segment(trackedClientId)}`;

// capability resources (wildcards) of the public channels
export const CHANNEL_SUBMISSION_ALL = 'submission:*';
export const CHANNEL_PROBLEM_ALL = 'problem:*';
export const CHANNEL_CLIENT_TRACK_ALL = 'client-track:*';

/**
 * Returns the contest and role of a `CHANNEL_CONTEST` channel name, or null if it is not one.
 */
export const getContestChannelParams = (channel: string): { contestKey: string; role: ContestChannelRole } | null => {
  const [namespace, contestKey, role, ...rest] = channel.split(':');
  if (namespace !== 'contest' || !contestKey || rest.length || !Object.values(ContestChannelRole).includes(role as ContestChannelRole)) {
    return null;
  }
  return { contestKey: decodeURIComponent(contestKey), role: role as ContestChannelRole };
};
