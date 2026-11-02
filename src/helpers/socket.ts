import {
  CodeRunStatusWebSocketResponseEventDto,
  ContestChangesWebSocketResponseEventDto,
  ProblemCrawledWebSocketResponseEventDto,
  SendDataEc2InstancesListWebSocketResponseEventDto,
  SendDataEcsTaskDefinitionListWebSocketResponseEventDto,
  SendDataEcsTasksListWebSocketResponseEventDto,
  SendDataRunCommandWebSocketResponseEventDto,
  SendDataSsmSessionsListWebSocketResponseEventDto,
  SendDataWebSocketResponseEventDto,
  SubmissionJudgingWebSocketResponseEventDto,
  SubmissionRunStatusWebSocketResponseEventDto,
  SubmissionsCrawlWebSocketResponseEventDto,
  SubmissionsJudgingScope,
  SubscribeCodeRunStatusWebSocketEventDto,
  SubscribeContestChangesWebSocketEventDto,
  SubscribeGetDataWebSocketEventDto,
  SubscribeProblemCrawledWebSocketEventDto,
  SubscribeSubmissionRunStatusWebSocketEventDto,
  SubscribeSubmissionsCrawlWebSocketEventDto,
  SubscribeSubmissionsJudgingWebSocketEventDto,
  SubscribeUserNotificationWebsocketEventDto,
  UnsubscribeCodeRunStatusWebSocketEventDto,
  UnsubscribeContestChangesWebSocketEventDto,
  UnsubscribeGetDataWebSocketEventDto,
  UnsubscribeProblemCrawledWebSocketEventDto,
  UnsubscribeSubmissionRunStatusWebSocketEventDto,
  UnsubscribeSubmissionsCrawlWebSocketEventDto,
  UnsubscribeSubmissionsJudgingWebSocketEventDto,
  UnsubscribeUserNotificationWebSocketEventDto,
  UserMessageWebSocketResponseEventDto,
  UserNotificationContestClarificationWebSocketResponseEventDto,
  UserNotificationSubmissionWebSocketResponseEventDto,
  UserNotificationWebSocketResponseEventDto,
  WebSocketChannelsMessageDto,
  WebSocketResponseEventDto,
  WebSocketSubscribeEventDto,
  WebSocketUnsubscribeEventDto,
} from '../dto';
import {
  CHANNEL_CONTEST,
  CHANNEL_PROBLEM,
  CHANNEL_SUBMISSION,
  CHANNEL_USER_ROLE,
} from '../constants/websocket';
import {
  ClientId,
  ContestChannelRole,
  ProblemChannelRole,
  ProblemVerdict,
  SubmissionRunStatus,
  UserChannelRole,
  WebSocketResponseEvent,
  WebSocketResponseEventKey,
  WebSocketSubscriptionEvent,
} from '../types';
import { join } from './commons';

export const isWebsocketSubscription = (event: any): event is WebSocketSubscribeEventDto | WebSocketUnsubscribeEventDto => {
  return Object.values(WebSocketSubscriptionEvent).includes(event?.event)
    && typeof event?.clientId === 'string' && !!event.clientId;
};

// CHANNEL_PUBLISH_SUBSCRIPTIONS

export const isSubscribeCodeRunStatusWebSocketEventDto = (event: any): event is SubscribeCodeRunStatusWebSocketEventDto => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_CODE_RUN_STATUS
    && typeof event?.runId === 'string' && !!event.runId;
};

export const isUnsubscribeCodeRunStatusWebSocketEventDto = (event: any): event is UnsubscribeCodeRunStatusWebSocketEventDto => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_CODE_RUN_STATUS
    && typeof event?.runId === 'string' && !!event.runId;
};

export const isSubscribeSubmissionRunStatusWebSocketEventDto = (event: any): event is SubscribeSubmissionRunStatusWebSocketEventDto => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_SUBMISSION_RUN_STATUS
    && typeof event?.submitId === 'string' && !!event.submitId;
};

export const isUnsubscribeSubmissionRunStatusWebSocketEventDto = (event: any): event is UnsubscribeSubmissionRunStatusWebSocketEventDto => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_SUBMISSION_RUN_STATUS
    && typeof event?.submitId === 'string' && !!event.submitId;
};

export const isSubscribeGetDataWebSocketEventDto = (event: any): event is SubscribeGetDataWebSocketEventDto => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_GET_DATA;
};

export const isUnsubscribeGetDataWebSocketEventDto = (event: any): event is UnsubscribeGetDataWebSocketEventDto => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_GET_DATA;
};

export const isSubscribeProblemCrawledWebSocketEventDto = (event: any): event is SubscribeProblemCrawledWebSocketEventDto => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_PROBLEM_CRAWLED;
};

export const isUnsubscribeProblemCrawledWebSocketEventDto = (event: any): event is UnsubscribeProblemCrawledWebSocketEventDto => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_PROBLEM_CRAWLED;
};

export const isSubscribeSubmissionsCrawlWebSocketEventDto = (event: any): event is SubscribeSubmissionsCrawlWebSocketEventDto => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_SUBMISSIONS_CRAWL;
};

export const isUnsubscribeSubmissionsCrawlWebSocketEventDto = (event: any): event is UnsubscribeSubmissionsCrawlWebSocketEventDto => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_SUBMISSIONS_CRAWL;
};

export const isSubscribeContestChangesWebSocketEventDto = (event: any): event is SubscribeContestChangesWebSocketEventDto => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_CONTEST_CHANGES;
};

export const isUnsubscribeContestChangesWebSocketEventDto = (event: any): event is UnsubscribeContestChangesWebSocketEventDto => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_CONTEST_CHANGES;
};

export const isSubscribeUserNotificationWebSocketEventDto = (event: any): event is SubscribeUserNotificationWebsocketEventDto => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_USER_NOTIFICATION;
};

export const isUnsubscribeUserNotificationWebSocketEventDto = (event: any): event is UnsubscribeUserNotificationWebSocketEventDto => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_USER_NOTIFICATION;
};

const isNonEmptyString = (value: unknown): value is string => typeof value === 'string' && !!value;

/**
 * Exactly one of `problemKey` / `contestKey` / `userId` is set.
 */
export const isSubmissionsJudgingScope = (scope: any): scope is SubmissionsJudgingScope => {
  return [scope?.problemKey, scope?.contestKey, scope?.userId].filter(isNonEmptyString).length === 1;
};

export const isSubscribeSubmissionsJudgingWebSocketEventDto = (event: any): event is SubscribeSubmissionsJudgingWebSocketEventDto => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_SUBMISSIONS_JUDGING
    && isSubmissionsJudgingScope(event);
};

export const isUnsubscribeSubmissionsJudgingWebSocketEventDto = (event: any): event is UnsubscribeSubmissionsJudgingWebSocketEventDto => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_SUBMISSIONS_JUDGING
    && isSubmissionsJudgingScope(event);
};

// is WebSocketResponseEventDto, CHANNEL_SUBSCRIBE_CLIENT

export const isWebSocketResponseEventDto = (event: any): event is WebSocketResponseEventDto => {
  return Object.values(WebSocketResponseEvent).includes(event?.event)
    && typeof event?.key === 'string'
    && typeof event?.connectionId === 'string'
    && typeof event?.createdAt === 'number' && !!event.createdAt;
};

export const isCodeRunStatusMessageWebSocketResponseEventDto = (event: any): event is CodeRunStatusWebSocketResponseEventDto => {
  return isWebSocketResponseEventDto(event)
    && event?.event === WebSocketResponseEvent.CODE_RUN_STATUS
    && typeof event?.runId === 'string' && !!event.runId
    && event?.status in SubmissionRunStatus;
};

export const isSubmissionRunStatusMessageWebSocketResponseEventDto = (event: any): event is SubmissionRunStatusWebSocketResponseEventDto => {
  return isWebSocketResponseEventDto(event)
    && event?.event === WebSocketResponseEvent.SUBMISSION_RUN_STATUS
    && typeof event?.submitId === 'string' && !!event.submitId
    && event?.status in SubmissionRunStatus
    && event?.verdict in ProblemVerdict
    && typeof event?.points === 'number';
};

export const isSubmissionJudgingWebSocketResponseEventDto = (event: any): event is SubmissionJudgingWebSocketResponseEventDto => {
  return isWebSocketResponseEventDto(event)
    && event?.event === WebSocketResponseEvent.SUBMISSION_JUDGING
    && isNonEmptyString(event?.submitId)
    && isNonEmptyString(event?.problemKey)
    && (event?.contestKey === null || isNonEmptyString(event?.contestKey))
    && isNonEmptyString(event?.userId)
    && typeof event?.judging === 'boolean'
    && event?.status in SubmissionRunStatus
    && event?.verdict in ProblemVerdict
    && typeof event?.points === 'number';
};

export const isUserMessageWebSocketResponseEventDto = (event: any): event is UserMessageWebSocketResponseEventDto => {
  return isWebSocketResponseEventDto(event)
    && event?.event === WebSocketResponseEvent.USER_MESSAGE
    && typeof event?.user?.nickname === 'string' && !!event.user?.nickname
    && typeof event?.user?.imageUrl === 'string' && !!event.user?.imageUrl
    && typeof event?.user?.organization?.key === 'string' && !!event.user?.organization?.key
    && !!event?.content;
};

export const isSendDataWebSocketResponseEventDto = (event: any): event is SendDataWebSocketResponseEventDto => {
  return [
      WebSocketResponseEvent.SEND_DATA_ECS_TASK_DEFINITIONS_LIST,
      WebSocketResponseEvent.SEND_DATA_EC2_INSTANCES_LIST,
      WebSocketResponseEvent.SEND_DATA_ECS_TASKS_LIST,
      WebSocketResponseEvent.SEND_DATA_SSM_SESSIONS_LIST,
      WebSocketResponseEvent.SEND_DATA_RUN_COMMAND,
    ].includes(event?.event)
    && typeof event?.dataId === 'string' && !!event.dataId
    && !!event?.content;
};

export const isSendDataEcsTaskDefinitionListWebSocketResponseEventDto = (event: any): event is SendDataEcsTaskDefinitionListWebSocketResponseEventDto => {
  return isWebSocketResponseEventDto(event) && isSendDataWebSocketResponseEventDto(event)
    && event?.event === WebSocketResponseEvent.SEND_DATA_ECS_TASK_DEFINITIONS_LIST;
};

export const isSendDataEc2InstancesListWebSocketResponseEventDto = (event: any): event is SendDataEc2InstancesListWebSocketResponseEventDto => {
  return isWebSocketResponseEventDto(event) && isSendDataWebSocketResponseEventDto(event)
    && event?.event === WebSocketResponseEvent.SEND_DATA_EC2_INSTANCES_LIST;
};

export const isSendDataEcsTasksListWebSocketResponseEventDto = (event: any): event is SendDataEcsTasksListWebSocketResponseEventDto => {
  return isWebSocketResponseEventDto(event) && isSendDataWebSocketResponseEventDto(event)
    && event?.event === WebSocketResponseEvent.SEND_DATA_ECS_TASKS_LIST;
};

export const isSendDataSsmSessionsListWebSocketResponseEventDto = (event: any): event is SendDataSsmSessionsListWebSocketResponseEventDto => {
  return isWebSocketResponseEventDto(event) && isSendDataWebSocketResponseEventDto(event)
    && event?.event === WebSocketResponseEvent.SEND_DATA_SSM_SESSIONS_LIST;
};

export const isSendDataRunCommandWebSocketResponseEventDto = (event: any): event is SendDataRunCommandWebSocketResponseEventDto => {
  return isWebSocketResponseEventDto(event) && isSendDataWebSocketResponseEventDto(event)
    && event?.event === WebSocketResponseEvent.SEND_DATA_RUN_COMMAND;
};

export const isProblemCrawledWebSocketResponseEventDto = (event: any): event is ProblemCrawledWebSocketResponseEventDto => {
  return isWebSocketResponseEventDto(event)
    && event?.event === WebSocketResponseEvent.PROBLEM_CRAWLED
    && !!event?.content;
};

export const isSubmissionsCrawlWebSocketResponseEventDto = (event: any): event is SubmissionsCrawlWebSocketResponseEventDto => {
  return isWebSocketResponseEventDto(event)
    && event?.event === WebSocketResponseEvent.SUBMISSIONS_CRAWL
    && !!event?.content;
};

export const isContestChangesWebSocketResponseEventDto = (event: any): event is ContestChangesWebSocketResponseEventDto => {
  return isWebSocketResponseEventDto(event)
    && event?.event === WebSocketResponseEvent.CONTEST_CHANGES
    && !!event?.content;
};

export const isUserNotificationWebSocketResponseEventDto = (event: any): event is UserNotificationWebSocketResponseEventDto => {
  return [
      WebSocketResponseEvent.USER_NOTIFICATION_SUBMISSION,
      WebSocketResponseEvent.USER_NOTIFICATION_CONTEST_CLARIFICATION,
    ].includes(event?.event)
    && !!event?.content;
};

export const isUserNotificationSubmissionWebSocketResponseEventDto = (event: any): event is UserNotificationSubmissionWebSocketResponseEventDto => {
  return isWebSocketResponseEventDto(event) && isUserNotificationWebSocketResponseEventDto(event)
    && event?.event === WebSocketResponseEvent.USER_NOTIFICATION_SUBMISSION;
};

export const isUserNotificationContestClarificationWebSocketResponseEventDto = (event: any): event is UserNotificationContestClarificationWebSocketResponseEventDto => {
  return isWebSocketResponseEventDto(event) && isUserNotificationWebSocketResponseEventDto(event)
    && event?.event === WebSocketResponseEvent.USER_NOTIFICATION_CONTEST_CLARIFICATION;
};

// generic

export const getWebSocketResponseEventKey = (event: WebSocketResponseEvent, clientId: ClientId, id: string): WebSocketResponseEventKey => {
  return `${event}-${clientId}-${id}`;
};

export const isWebSocketChannelsMessageDto = (message: any): message is WebSocketChannelsMessageDto => {
  return Array.isArray(message?.channels)
    && message.channels.every((channel: unknown) => typeof channel === 'string' && !!channel)
    && Object.values(WebSocketResponseEvent).includes(message?.event?.event);
};

/**
 * Key used by the client to dispatch a response received on a TOPIC channel to its subscribers.
 * It is the same key that `getKeyWebSocketEventDto` (base-ui) computes for the subscription.
 * Returns null when the response is not addressed to this client.
 */
export const getWebSocketResponseEventKeyOfResponse = (response: WebSocketResponseEventDto, clientId: ClientId): WebSocketResponseEventKey | null => {
  if (isCodeRunStatusMessageWebSocketResponseEventDto(response)) {
    return getWebSocketResponseEventKey(WebSocketResponseEvent.CODE_RUN_STATUS, clientId, response.runId);
  }
  if (isSubmissionRunStatusMessageWebSocketResponseEventDto(response)) {
    return getWebSocketResponseEventKey(WebSocketResponseEvent.SUBMISSION_RUN_STATUS, clientId, response.submitId);
  }
  if (isSendDataWebSocketResponseEventDto(response)) {
    return getWebSocketResponseEventKey(WebSocketResponseEvent.SEND_DATA_, clientId, response.dataId);
  }
  if (isContestChangesWebSocketResponseEventDto(response)) {
    return getWebSocketResponseEventKey(WebSocketResponseEvent.CONTEST_CHANGES, clientId, response.content.contestKey);
  }
  if (isProblemCrawledWebSocketResponseEventDto(response)) {
    return getWebSocketResponseEventKey(WebSocketResponseEvent.PROBLEM_CRAWLED, clientId, response.content.problemKey);
  }
  if (isSubmissionsCrawlWebSocketResponseEventDto(response)) {
    return getWebSocketResponseEventKey(
      WebSocketResponseEvent.SUBMISSIONS_CRAWL,
      clientId,
      join([response.content.contestKey, response.content.problemKeys]),
    );
  }
  if (isUserNotificationWebSocketResponseEventDto(response)) {
    return getWebSocketResponseEventKey(WebSocketResponseEvent.USER_NOTIFICATION_, clientId, '*');
  }
  if (isSubmissionJudgingWebSocketResponseEventDto(response)) {
    // one key for every table: the same event is published on several channels (problem / contest / user) and the
    // client deduplicates it, so it is dispatched once; each table filters by the submissions it lists
    return getWebSocketResponseEventKey(WebSocketResponseEvent.SUBMISSION_JUDGING, clientId, '*');
  }
  return null;
};

/**
 * TOPIC channel that the client has to attach to receive the events of a subscription,
 * or null when the events arrive by the private channels (session / user) the client is always attached to.
 * Ably rejects the attach if the token has no capability for the channel.
 */
export const getChannelOfWebSocketSubscribeEvent = (event: WebSocketSubscribeEventDto): string | null => {
  if (isSubscribeSubmissionRunStatusWebSocketEventDto(event)) {
    return CHANNEL_SUBMISSION(event.submitId);
  }
  // SUBSCRIBE_PROBLEM_CRAWLED: the event arrives by the private user channel of who requested the crawl
  if (isSubscribeContestChangesWebSocketEventDto(event) || isSubscribeSubmissionsCrawlWebSocketEventDto(event)) {
    return CHANNEL_CONTEST(event.contestKey, ContestChannelRole.SPECTATORS);
  }
  if (isSubscribeSubmissionsJudgingWebSocketEventDto(event)) {
    // the judging start/end is published on the spectators channel when it is visible to everyone; the hidden ones
    // (frozen / quiet contests) arrive by the role channels of the contest (managers) and the private user channel
    if ('problemKey' in event && event.problemKey) {
      return CHANNEL_PROBLEM(event.problemKey, ProblemChannelRole.SPECTATORS);
    }
    if ('contestKey' in event && event.contestKey) {
      return CHANNEL_CONTEST(event.contestKey, ContestChannelRole.SPECTATORS);
    }
    if ('userId' in event && event.userId) {
      return CHANNEL_USER_ROLE(event.userId, UserChannelRole.SPECTATORS);
    }
  }
  return null;
};

/**
 * Contest whose role channels the client needs (the API grants them when the token is requested with this contest).
 */
export const getContestKeyOfWebSocketSubscribeEvent = (event: WebSocketSubscribeEventDto): string | null => {
  if (isSubscribeContestChangesWebSocketEventDto(event) || isSubscribeSubmissionsCrawlWebSocketEventDto(event)) {
    return event.contestKey;
  }
  if (isSubscribeSubmissionsJudgingWebSocketEventDto(event) && 'contestKey' in event && event.contestKey) {
    return event.contestKey;
  }
  return null;
};

/**
 * Problem whose role channels the client needs (the API grants them when the token is requested with this problem).
 */
export const getProblemKeyOfWebSocketSubscribeEvent = (event: WebSocketSubscribeEventDto): string | null => {
  if (isSubscribeSubmissionsJudgingWebSocketEventDto(event) && 'problemKey' in event && event.problemKey) {
    return event.problemKey;
  }
  return null;
};
