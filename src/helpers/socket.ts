import {
  CodeRunStatusWebSocketResponseEventDTO,
  ContestChangesWebSocketResponseEventDTO,
  ProblemCrawledWebSocketResponseEventDTO,
  SendDataEc2InstancesListWebSocketResponseEventDTO,
  SendDataEcsTaskDefinitionListWebSocketResponseEventDTO,
  SendDataEcsTasksListWebSocketResponseEventDTO,
  SendDataRunCommandWebSocketResponseEventDTO,
  SendDataSsmSessionsListWebSocketResponseEventDTO,
  SendDataWebSocketResponseEventDTO,
  SubmissionRunStatusWebSocketResponseEventDTO,
  SubmissionsCrawlWebSocketResponseEventDTO,
  SubscribeCodeRunStatusWebSocketEventDTO,
  SubscribeContestChangesWebSocketEventDTO,
  SubscribeGetDataWebSocketEventDTO,
  SubscribeProblemCrawledWebSocketEventDTO,
  SubscribeSubmissionRunStatusWebSocketEventDTO,
  SubscribeSubmissionsCrawlWebSocketEventDTO,
  SubscribeUserNotificationWebsocketEventDTO,
  UnsubscribeCodeRunStatusWebSocketEventDTO,
  UnsubscribeContestChangesWebSocketEventDTO,
  UnsubscribeGetDataWebSocketEventDTO,
  UnsubscribeProblemCrawledWebSocketEventDTO,
  UnsubscribeSubmissionRunStatusWebSocketEventDTO,
  UnsubscribeSubmissionsCrawlWebSocketEventDTO,
  UnsubscribeUserNotificationWebSocketEventDTO,
  UserMessageWebSocketResponseEventDTO,
  UserNotificationContestClarificationWebSocketResponseEventDTO,
  UserNotificationSubmissionWebSocketResponseEventDTO,
  UserNotificationWebSocketResponseEventDTO,
  WebSocketChannelsMessageDTO,
  WebSocketResponseEventDTO,
  WebSocketSubscribeEventDTO,
  WebSocketUnsubscribeEventDTO,
} from '../dto';
import {
  CHANNEL_CONTEST,
  CHANNEL_PROBLEM,
  CHANNEL_SUBMISSION,
} from '../constants/websocket';
import {
  ClientId,
  ContestChannelRole,
  ProblemVerdict,
  SubmissionRunStatus,
  WebSocketResponseEvent,
  WebSocketResponseEventKey,
  WebSocketSubscriptionEvent,
} from '../types';
import { join } from './commons';

export const isWebsocketSubscription = (event: any): event is WebSocketSubscribeEventDTO | WebSocketUnsubscribeEventDTO => {
  return Object.values(WebSocketSubscriptionEvent).includes(event?.event)
    && typeof event?.clientId === 'string' && !!event.clientId;
};

// CHANNEL_PUBLISH_SUBSCRIPTIONS

export const isSubscribeCodeRunStatusWebSocketEventDTO = (event: any): event is SubscribeCodeRunStatusWebSocketEventDTO => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_CODE_RUN_STATUS
    && typeof event?.runId === 'string' && !!event.runId;
};

export const isUnsubscribeCodeRunStatusWebSocketEventDTO = (event: any): event is UnsubscribeCodeRunStatusWebSocketEventDTO => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_CODE_RUN_STATUS
    && typeof event?.runId === 'string' && !!event.runId;
};

export const isSubscribeSubmissionRunStatusWebSocketEventDTO = (event: any): event is SubscribeSubmissionRunStatusWebSocketEventDTO => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_SUBMISSION_RUN_STATUS
    && typeof event?.submitId === 'string' && !!event.submitId;
};

export const isUnsubscribeSubmissionRunStatusWebSocketEventDTO = (event: any): event is UnsubscribeSubmissionRunStatusWebSocketEventDTO => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_SUBMISSION_RUN_STATUS
    && typeof event?.submitId === 'string' && !!event.submitId;
};

export const isSubscribeGetDataWebSocketEventDTO = (event: any): event is SubscribeGetDataWebSocketEventDTO => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_GET_DATA;
};

export const isUnsubscribeGetDataWebSocketEventDTO = (event: any): event is UnsubscribeGetDataWebSocketEventDTO => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_GET_DATA;
};

export const isSubscribeProblemCrawledWebSocketEventDTO = (event: any): event is SubscribeProblemCrawledWebSocketEventDTO => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_PROBLEM_CRAWLED;
};

export const isUnsubscribeProblemCrawledWebSocketEventDTO = (event: any): event is UnsubscribeProblemCrawledWebSocketEventDTO => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_PROBLEM_CRAWLED;
};

export const isSubscribeSubmissionsCrawlWebSocketEventDTO = (event: any): event is SubscribeSubmissionsCrawlWebSocketEventDTO => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_SUBMISSIONS_CRAWL;
};

export const isUnsubscribeSubmissionsCrawlWebSocketEventDTO = (event: any): event is UnsubscribeSubmissionsCrawlWebSocketEventDTO => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_SUBMISSIONS_CRAWL;
};

export const isSubscribeContestChangesWebSocketEventDTO = (event: any): event is SubscribeContestChangesWebSocketEventDTO => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_CONTEST_CHANGES;
};

export const isUnsubscribeContestChangesWebSocketEventDTO = (event: any): event is UnsubscribeContestChangesWebSocketEventDTO => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_CONTEST_CHANGES;
};

export const isSubscribeUserNotificationWebSocketEventDTO = (event: any): event is SubscribeUserNotificationWebsocketEventDTO => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_USER_NOTIFICATION;
};

export const isUnsubscribeUserNotificationWebSocketEventDTO = (event: any): event is UnsubscribeUserNotificationWebSocketEventDTO => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_USER_NOTIFICATION;
};

// is WebSocketResponseEventDTO, CHANNEL_SUBSCRIBE_CLIENT

export const isWebSocketResponseEventDTO = (event: any): event is WebSocketResponseEventDTO => {
  return Object.values(WebSocketResponseEvent).includes(event?.event)
    && typeof event?.key === 'string'
    && typeof event?.connectionId === 'string'
    && typeof event?.messageTimestamp === 'number' && !!event.messageTimestamp;
};

export const isCodeRunStatusMessageWebSocketResponseEventDTO = (event: any): event is CodeRunStatusWebSocketResponseEventDTO => {
  return isWebSocketResponseEventDTO(event)
    && event?.event === WebSocketResponseEvent.CODE_RUN_STATUS
    && typeof event?.runId === 'string' && !!event.runId
    && event?.status in SubmissionRunStatus;
};

export const isSubmissionRunStatusMessageWebSocketResponseEventDTO = (event: any): event is SubmissionRunStatusWebSocketResponseEventDTO => {
  return isWebSocketResponseEventDTO(event)
    && event?.event === WebSocketResponseEvent.SUBMISSION_RUN_STATUS
    && typeof event?.submitId === 'string' && !!event.submitId
    && event?.status in SubmissionRunStatus
    && event?.verdict in ProblemVerdict
    && typeof event?.points === 'number';
};

export const isUserMessageWebSocketResponseEventDTO = (event: any): event is UserMessageWebSocketResponseEventDTO => {
  return isWebSocketResponseEventDTO(event)
    && event?.event === WebSocketResponseEvent.USER_MESSAGE
    && typeof event?.user?.nickname === 'string' && !!event.user?.nickname
    && typeof event?.user?.imageUrl === 'string' && !!event.user?.imageUrl
    && typeof event?.user?.company?.key === 'string' && !!event.user?.company?.key
    && !!event?.content;
};

export const isSendDataWebSocketResponseEventDTO = (event: any): event is SendDataWebSocketResponseEventDTO => {
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

export const isSendDataEcsTaskDefinitionListWebSocketResponseEventDTO = (event: any): event is SendDataEcsTaskDefinitionListWebSocketResponseEventDTO => {
  return isWebSocketResponseEventDTO(event) && isSendDataWebSocketResponseEventDTO(event)
    && event?.event === WebSocketResponseEvent.SEND_DATA_ECS_TASK_DEFINITIONS_LIST;
};

export const isSendDataEc2InstancesListWebSocketResponseEventDTO = (event: any): event is SendDataEc2InstancesListWebSocketResponseEventDTO => {
  return isWebSocketResponseEventDTO(event) && isSendDataWebSocketResponseEventDTO(event)
    && event?.event === WebSocketResponseEvent.SEND_DATA_EC2_INSTANCES_LIST;
};

export const isSendDataEcsTasksListWebSocketResponseEventDTO = (event: any): event is SendDataEcsTasksListWebSocketResponseEventDTO => {
  return isWebSocketResponseEventDTO(event) && isSendDataWebSocketResponseEventDTO(event)
    && event?.event === WebSocketResponseEvent.SEND_DATA_ECS_TASKS_LIST;
};

export const isSendDataSsmSessionsListWebSocketResponseEventDTO = (event: any): event is SendDataSsmSessionsListWebSocketResponseEventDTO => {
  return isWebSocketResponseEventDTO(event) && isSendDataWebSocketResponseEventDTO(event)
    && event?.event === WebSocketResponseEvent.SEND_DATA_SSM_SESSIONS_LIST;
};

export const isSendDataRunCommandWebSocketResponseEventDTO = (event: any): event is SendDataRunCommandWebSocketResponseEventDTO => {
  return isWebSocketResponseEventDTO(event) && isSendDataWebSocketResponseEventDTO(event)
    && event?.event === WebSocketResponseEvent.SEND_DATA_RUN_COMMAND;
};

export const isProblemCrawledWebSocketResponseEventDTO = (event: any): event is ProblemCrawledWebSocketResponseEventDTO => {
  return isWebSocketResponseEventDTO(event)
    && event?.event === WebSocketResponseEvent.PROBLEM_CRAWLED
    && !!event?.content;
};

export const isSubmissionsCrawlWebSocketResponseEventDTO = (event: any): event is SubmissionsCrawlWebSocketResponseEventDTO => {
  return isWebSocketResponseEventDTO(event)
    && event?.event === WebSocketResponseEvent.SUBMISSIONS_CRAWL
    && !!event?.content;
};

export const isContestChangesWebSocketResponseEventDTO = (event: any): event is ContestChangesWebSocketResponseEventDTO => {
  return isWebSocketResponseEventDTO(event)
    && event?.event === WebSocketResponseEvent.CONTEST_CHANGES
    && !!event?.content;
};

export const isUserNotificationWebSocketResponseEventDTO = (event: any): event is UserNotificationWebSocketResponseEventDTO => {
  return [
      WebSocketResponseEvent.USER_NOTIFICATION_SUBMISSION,
      WebSocketResponseEvent.USER_NOTIFICATION_CONTEST_CLARIFICATION,
    ].includes(event?.event)
    && !!event?.content;
};

export const isUserNotificationSubmissionWebSocketResponseEventDTO = (event: any): event is UserNotificationSubmissionWebSocketResponseEventDTO => {
  return isWebSocketResponseEventDTO(event) && isUserNotificationWebSocketResponseEventDTO(event)
    && event?.event === WebSocketResponseEvent.USER_NOTIFICATION_SUBMISSION;
};

export const isUserNotificationContestClarificationWebSocketResponseEventDTO = (event: any): event is UserNotificationContestClarificationWebSocketResponseEventDTO => {
  return isWebSocketResponseEventDTO(event) && isUserNotificationWebSocketResponseEventDTO(event)
    && event?.event === WebSocketResponseEvent.USER_NOTIFICATION_CONTEST_CLARIFICATION;
};

// generic

export const getWebSocketResponseEventKey = (event: WebSocketResponseEvent, clientId: ClientId, id: string): WebSocketResponseEventKey => {
  return `${event}-${clientId}-${id}`;
};

export const isWebSocketChannelsMessageDTO = (message: any): message is WebSocketChannelsMessageDTO => {
  return Array.isArray(message?.channels)
    && message.channels.every((channel: unknown) => typeof channel === 'string' && !!channel)
    && Object.values(WebSocketResponseEvent).includes(message?.event?.event);
};

/**
 * Key used by the client to dispatch a response received on a TOPIC channel to its subscribers.
 * It is the same key that `getKeyWebSocketEventDTO` (base-ui) computes for the subscription.
 * Returns null when the response is not addressed to this client.
 */
export const getWebSocketResponseEventKeyOfResponse = (response: WebSocketResponseEventDTO, clientId: ClientId): WebSocketResponseEventKey | null => {
  if (isCodeRunStatusMessageWebSocketResponseEventDTO(response)) {
    return getWebSocketResponseEventKey(WebSocketResponseEvent.CODE_RUN_STATUS, clientId, response.runId);
  }
  if (isSubmissionRunStatusMessageWebSocketResponseEventDTO(response)) {
    return getWebSocketResponseEventKey(WebSocketResponseEvent.SUBMISSION_RUN_STATUS, clientId, response.submitId);
  }
  if (isSendDataWebSocketResponseEventDTO(response)) {
    return getWebSocketResponseEventKey(WebSocketResponseEvent.SEND_DATA_, clientId, response.dataId);
  }
  if (isContestChangesWebSocketResponseEventDTO(response)) {
    return getWebSocketResponseEventKey(WebSocketResponseEvent.CONTEST_CHANGES, clientId, response.content.contestKey);
  }
  if (isProblemCrawledWebSocketResponseEventDTO(response)) {
    return getWebSocketResponseEventKey(WebSocketResponseEvent.PROBLEM_CRAWLED, clientId, response.content.problemKey);
  }
  if (isSubmissionsCrawlWebSocketResponseEventDTO(response)) {
    return getWebSocketResponseEventKey(
      WebSocketResponseEvent.SUBMISSIONS_CRAWL,
      clientId,
      join([response.content.contestKey, response.content.problemKeys]),
    );
  }
  if (isUserNotificationWebSocketResponseEventDTO(response)) {
    return getWebSocketResponseEventKey(WebSocketResponseEvent.USER_NOTIFICATION_, clientId, '*');
  }
  return null;
};

/**
 * TOPIC channel that the client has to attach to receive the events of a subscription,
 * or null when the events arrive by the private channels (session / user) the client is always attached to.
 * Ably rejects the attach if the token has no capability for the channel.
 */
export const getChannelOfWebSocketSubscribeEvent = (event: WebSocketSubscribeEventDTO): string | null => {
  if (isSubscribeSubmissionRunStatusWebSocketEventDTO(event)) {
    return CHANNEL_SUBMISSION(event.submitId);
  }
  if (isSubscribeProblemCrawledWebSocketEventDTO(event)) {
    return CHANNEL_PROBLEM(event.problemKey);
  }
  if (isSubscribeContestChangesWebSocketEventDTO(event) || isSubscribeSubmissionsCrawlWebSocketEventDTO(event)) {
    return CHANNEL_CONTEST(event.contestKey, ContestChannelRole.SPECTATORS);
  }
  return null;
};

/**
 * Contest whose role channels the client needs (the API grants them when the token is requested with this contest).
 */
export const getContestKeyOfWebSocketSubscribeEvent = (event: WebSocketSubscribeEventDTO): string | null => {
  if (isSubscribeContestChangesWebSocketEventDTO(event) || isSubscribeSubmissionsCrawlWebSocketEventDTO(event)) {
    return event.contestKey;
  }
  return null;
};
