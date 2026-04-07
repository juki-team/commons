import type {
  ChatCompletionsWebSocketEventDTO,
  ClientTrackDeviceWebSocketEventDTO,
  ClientTrackLocationWebSocketEventDTO,
  ClientTrackScreenshotWebSocketEventDTO,
  ClientTrackWebSocketResponseEventDTO,
  CodeRunStatusWebSocketResponseEventDTO,
  ContestChangesWebSocketResponseEventDTO,
  PingWebSocketEventDTO,
  PongWebSocketResponseEventDTO,
  ProblemCrawledWebSocketResponseEventDTO,
  SendDataChatCompletionsWebSocketResponseEventDTO,
  SendDataClientTrackWebSocketResponseEventDTO,
  SendDataEc2InstancesListWebSocketResponseEventDTO,
  SendDataEcsTaskDefinitionListWebSocketResponseEventDTO,
  SendDataEcsTasksListWebSocketResponseEventDTO,
  SendDataRunCommandWebSocketResponseEventDTO,
  SendDataSsmSessionsListWebSocketResponseEventDTO,
  SendDataWebSocketResponseEventDTO,
  SubmissionRunStatusWebSocketResponseEventDTO,
  SubmissionsCrawlWebSocketResponseEventDTO,
  SubscribeClientTrackWebSocketEventDTO,
  SubscribeCodeRunStatusWebSocketEventDTO,
  SubscribeContestChangesWebSocketEventDTO,
  SubscribeGetDataWebSocketEventDTO,
  SubscribeProblemCrawledWebSocketEventDTO,
  SubscribeSubmissionRunStatusWebSocketEventDTO,
  SubscribeSubmissionsCrawlWebSocketEventDTO,
  SubscribeUserNotificationWebsocketEventDTO,
  UnsubscribeClientTrackWebSocketEventDTO,
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
  WebSocketMessageEventDTO,
  WebSocketResponseEventDTO,
  WebSocketSubscribeEventDTO,
  WebSocketUnsubscribeEventDTO,
} from '../dto/index.js';
import { ProblemVerdict, SubmissionRunStatus } from '../prisma/enums/index.js';
import {
  type ClientId,
  WebSocketMessageEvent,
  WebSocketResponseEvent,
  type WebSocketResponseEventKey,
  WebSocketSubscriptionEvent,
} from '../types/index.js';

export const isWebsocketSubscription = (
  event: unknown,
): event is WebSocketSubscribeEventDTO | WebSocketUnsubscribeEventDTO | WebSocketMessageEventDTO => {
  if (typeof event !== 'object' || event === null) return false;
  const v = event as unknown as Record<string, unknown>;
  return (
    (Object.values(WebSocketSubscriptionEvent).includes(v.event as WebSocketSubscriptionEvent) ||
      Object.values(WebSocketMessageEvent).includes(v.event as WebSocketMessageEvent)) &&
    typeof v.clientId === 'string' &&
    !!v.clientId
  );
};

// Custom CHANNEL_PUBLISH_MESSAGES

export const isPingWebSocketEventDTO = (event: unknown): event is PingWebSocketEventDTO => {
  return isWebsocketSubscription(event) && event.event === WebSocketMessageEvent.PING;
};

export const isClientTrackLocationWebSocketEventDTO = (event: unknown): event is ClientTrackLocationWebSocketEventDTO => {
  return isWebsocketSubscription(event) && event.event === WebSocketMessageEvent.CLIENT_TRACK_LOCATION;
};

export const isClientTrackScreenshotWebSocketEventDTO = (event: unknown): event is ClientTrackScreenshotWebSocketEventDTO => {
  return isWebsocketSubscription(event) && event.event === WebSocketMessageEvent.CLIENT_TRACK_SCREENSHOT;
};

export const isClientTrackDeviceWebSocketEventDTO = (event: unknown): event is ClientTrackDeviceWebSocketEventDTO => {
  return isWebsocketSubscription(event) && event.event === WebSocketMessageEvent.CLIENT_TRACK_DEVICE;
};

export const isChatCompletionsWebSocketEventDTO = (event: unknown): event is ChatCompletionsWebSocketEventDTO => {
  return isWebsocketSubscription(event) && event.event === WebSocketMessageEvent.CHAT_COMPLETIONS;
};

// CHANNEL_PUBLISH_SUBSCRIPTIONS

export const isSubscribeCodeRunStatusWebSocketEventDTO = (event: unknown): event is SubscribeCodeRunStatusWebSocketEventDTO => {
  if (!isWebsocketSubscription(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  return event.event === WebSocketSubscriptionEvent.SUBSCRIBE_CODE_RUN_STATUS && typeof v.runId === 'string' && !!v.runId;
};

export const isUnsubscribeCodeRunStatusWebSocketEventDTO = (
  event: unknown,
): event is UnsubscribeCodeRunStatusWebSocketEventDTO => {
  if (!isWebsocketSubscription(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  return event.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_CODE_RUN_STATUS && typeof v.runId === 'string' && !!v.runId;
};

export const isSubscribeSubmissionRunStatusWebSocketEventDTO = (
  event: unknown,
): event is SubscribeSubmissionRunStatusWebSocketEventDTO => {
  if (!isWebsocketSubscription(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  return (
    event.event === WebSocketSubscriptionEvent.SUBSCRIBE_SUBMISSION_RUN_STATUS && typeof v.submitId === 'string' && !!v.submitId
  );
};

export const isUnsubscribeSubmissionRunStatusWebSocketEventDTO = (
  event: unknown,
): event is UnsubscribeSubmissionRunStatusWebSocketEventDTO => {
  if (!isWebsocketSubscription(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  return (
    event.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_SUBMISSION_RUN_STATUS &&
    typeof v.submitId === 'string' &&
    !!v.submitId
  );
};

export const isSubscribeGetDataWebSocketEventDTO = (event: unknown): event is SubscribeGetDataWebSocketEventDTO => {
  return isWebsocketSubscription(event) && event.event === WebSocketSubscriptionEvent.SUBSCRIBE_GET_DATA;
};

export const isUnsubscribeGetDataWebSocketEventDTO = (event: unknown): event is UnsubscribeGetDataWebSocketEventDTO => {
  return isWebsocketSubscription(event) && event.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_GET_DATA;
};

export const isSubscribeProblemCrawledWebSocketEventDTO = (
  event: unknown,
): event is SubscribeProblemCrawledWebSocketEventDTO => {
  return isWebsocketSubscription(event) && event.event === WebSocketSubscriptionEvent.SUBSCRIBE_PROBLEM_CRAWLED;
};

export const isUnsubscribeProblemCrawledWebSocketEventDTO = (
  event: unknown,
): event is UnsubscribeProblemCrawledWebSocketEventDTO => {
  return isWebsocketSubscription(event) && event.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_PROBLEM_CRAWLED;
};

export const isSubscribeSubmissionsCrawlWebSocketEventDTO = (
  event: unknown,
): event is SubscribeSubmissionsCrawlWebSocketEventDTO => {
  return isWebsocketSubscription(event) && event.event === WebSocketSubscriptionEvent.SUBSCRIBE_SUBMISSIONS_CRAWL;
};

export const isUnsubscribeSubmissionsCrawlWebSocketEventDTO = (
  event: unknown,
): event is UnsubscribeSubmissionsCrawlWebSocketEventDTO => {
  return isWebsocketSubscription(event) && event.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_SUBMISSIONS_CRAWL;
};

export const isSubscribeContestChangesWebSocketEventDTO = (
  event: unknown,
): event is SubscribeContestChangesWebSocketEventDTO => {
  return isWebsocketSubscription(event) && event.event === WebSocketSubscriptionEvent.SUBSCRIBE_CONTEST_CHANGES;
};

export const isUnsubscribeContestChangesWebSocketEventDTO = (
  event: unknown,
): event is UnsubscribeContestChangesWebSocketEventDTO => {
  return isWebsocketSubscription(event) && event.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_CONTEST_CHANGES;
};

export const isSubscribeClientTrackWebSocketEventDTO = (event: unknown): event is SubscribeClientTrackWebSocketEventDTO => {
  return isWebsocketSubscription(event) && event.event === WebSocketSubscriptionEvent.SUBSCRIBE_CLIENT_TRACK;
};

export const isUnsubscribeClientTrackWebSocketEventDTO = (event: unknown): event is UnsubscribeClientTrackWebSocketEventDTO => {
  return isWebsocketSubscription(event) && event.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_CLIENT_TRACK;
};

export const isSubscribeUserNotificationWebSocketEventDTO = (
  event: unknown,
): event is SubscribeUserNotificationWebsocketEventDTO => {
  return isWebsocketSubscription(event) && event.event === WebSocketSubscriptionEvent.SUBSCRIBE_USER_NOTIFICATION;
};

export const isUnsubscribeUserNotificationWebSocketEventDTO = (
  event: unknown,
): event is UnsubscribeUserNotificationWebSocketEventDTO => {
  return isWebsocketSubscription(event) && event.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_USER_NOTIFICATION;
};

// is WebSocketResponseEventDTO, CHANNEL_SUBSCRIBE_CLIENT

export const isWebSocketResponseEventDTO = (event: unknown): event is WebSocketResponseEventDTO => {
  if (typeof event !== 'object' || event === null) return false;
  const v = event as unknown as Record<string, unknown>;
  return (
    Object.values(WebSocketResponseEvent).includes(v.event as WebSocketResponseEvent) &&
    typeof v.key === 'string' &&
    typeof v.connectionId === 'string' &&
    typeof v.messageTimestamp === 'number' &&
    !!v.messageTimestamp
  );
};

export const isPongWebSocketResponseEventDTO = (event: unknown): event is PongWebSocketResponseEventDTO => {
  if (!isWebSocketResponseEventDTO(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  return event.event === WebSocketResponseEvent.PONG && !!v.data;
};

export const isCodeRunStatusMessageWebSocketResponseEventDTO = (
  event: unknown,
): event is CodeRunStatusWebSocketResponseEventDTO => {
  if (!isWebSocketResponseEventDTO(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  return (
    event.event === WebSocketResponseEvent.CODE_RUN_STATUS &&
    typeof v.runId === 'string' &&
    !!v.runId &&
    (v.status as string) in SubmissionRunStatus
  );
};

export const isSubmissionRunStatusMessageWebSocketResponseEventDTO = (
  event: unknown,
): event is SubmissionRunStatusWebSocketResponseEventDTO => {
  if (!isWebSocketResponseEventDTO(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  return (
    event.event === WebSocketResponseEvent.SUBMISSION_RUN_STATUS &&
    typeof v.submitId === 'string' &&
    !!v.submitId &&
    (v.status as string) in SubmissionRunStatus &&
    (v.verdict as string) in ProblemVerdict &&
    typeof v.points === 'number'
  );
};

export const isUserMessageWebSocketResponseEventDTO = (event: unknown): event is UserMessageWebSocketResponseEventDTO => {
  if (!isWebSocketResponseEventDTO(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  const user = v.user as Record<string, unknown> | undefined;
  const company = user?.company as Record<string, unknown> | undefined;
  return (
    event.event === WebSocketResponseEvent.USER_MESSAGE &&
    typeof user?.nickname === 'string' &&
    !!user.nickname &&
    typeof user?.imageUrl === 'string' &&
    !!user.imageUrl &&
    typeof company?.key === 'string' &&
    !!company.key &&
    !!v.content
  );
};

export const isSendDataWebSocketResponseEventDTO = (event: unknown): event is SendDataWebSocketResponseEventDTO => {
  if (typeof event !== 'object' || event === null) return false;
  const v = event as unknown as Record<string, unknown>;
  return (
    [
      WebSocketResponseEvent.SEND_DATA_ECS_TASK_DEFINITIONS_LIST,
      WebSocketResponseEvent.SEND_DATA_EC2_INSTANCES_LIST,
      WebSocketResponseEvent.SEND_DATA_ECS_TASKS_LIST,
      WebSocketResponseEvent.SEND_DATA_SSM_SESSIONS_LIST,
      WebSocketResponseEvent.SEND_DATA_RUN_COMMAND,
      WebSocketResponseEvent.SEND_DATA_CLIENT_TRACK,
      WebSocketResponseEvent.SEND_DATA_CHAT_COMPLETIONS,
    ].includes(v.event as WebSocketResponseEvent) &&
    typeof v.dataId === 'string' &&
    !!v.dataId &&
    !!v.content
  );
};

export const isSendDataEcsTaskDefinitionListWebSocketResponseEventDTO = (
  event: unknown,
): event is SendDataEcsTaskDefinitionListWebSocketResponseEventDTO => {
  return (
    isWebSocketResponseEventDTO(event) &&
    isSendDataWebSocketResponseEventDTO(event) &&
    event.event === WebSocketResponseEvent.SEND_DATA_ECS_TASK_DEFINITIONS_LIST
  );
};

export const isSendDataEc2InstancesListWebSocketResponseEventDTO = (
  event: unknown,
): event is SendDataEc2InstancesListWebSocketResponseEventDTO => {
  return (
    isWebSocketResponseEventDTO(event) &&
    isSendDataWebSocketResponseEventDTO(event) &&
    event.event === WebSocketResponseEvent.SEND_DATA_EC2_INSTANCES_LIST
  );
};

export const isSendDataEcsTasksListWebSocketResponseEventDTO = (
  event: unknown,
): event is SendDataEcsTasksListWebSocketResponseEventDTO => {
  return (
    isWebSocketResponseEventDTO(event) &&
    isSendDataWebSocketResponseEventDTO(event) &&
    event.event === WebSocketResponseEvent.SEND_DATA_ECS_TASKS_LIST
  );
};

export const isSendDataSsmSessionsListWebSocketResponseEventDTO = (
  event: unknown,
): event is SendDataSsmSessionsListWebSocketResponseEventDTO => {
  return (
    isWebSocketResponseEventDTO(event) &&
    isSendDataWebSocketResponseEventDTO(event) &&
    event.event === WebSocketResponseEvent.SEND_DATA_SSM_SESSIONS_LIST
  );
};

export const isSendDataRunCommandWebSocketResponseEventDTO = (
  event: unknown,
): event is SendDataRunCommandWebSocketResponseEventDTO => {
  return (
    isWebSocketResponseEventDTO(event) &&
    isSendDataWebSocketResponseEventDTO(event) &&
    event.event === WebSocketResponseEvent.SEND_DATA_RUN_COMMAND
  );
};

export const isSendDataClientTrackWebSocketResponseEventDTO = (
  event: unknown,
): event is SendDataClientTrackWebSocketResponseEventDTO => {
  return (
    isWebSocketResponseEventDTO(event) &&
    isSendDataWebSocketResponseEventDTO(event) &&
    event.event === WebSocketResponseEvent.SEND_DATA_CLIENT_TRACK
  );
};

export const isSenDataChatCompletionsWebSocketResponseEventDTO = (
  event: unknown,
): event is SendDataChatCompletionsWebSocketResponseEventDTO => {
  return (
    isWebSocketResponseEventDTO(event) &&
    isSendDataWebSocketResponseEventDTO(event) &&
    event.event === WebSocketResponseEvent.SEND_DATA_CHAT_COMPLETIONS
  );
};

export const isProblemCrawledWebSocketResponseEventDTO = (event: unknown): event is ProblemCrawledWebSocketResponseEventDTO => {
  if (!isWebSocketResponseEventDTO(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  return event.event === WebSocketResponseEvent.PROBLEM_CRAWLED && !!v.content;
};

export const isSubmissionsCrawlWebSocketResponseEventDTO = (
  event: unknown,
): event is SubmissionsCrawlWebSocketResponseEventDTO => {
  if (!isWebSocketResponseEventDTO(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  return event.event === WebSocketResponseEvent.SUBMISSIONS_CRAWL && !!v.content;
};

export const isContestChangesWebSocketResponseEventDTO = (event: unknown): event is ContestChangesWebSocketResponseEventDTO => {
  if (!isWebSocketResponseEventDTO(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  return event.event === WebSocketResponseEvent.CONTEST_CHANGES && !!v.content;
};

export const isClientTrackWebSocketResponseEventDTO = (event: unknown): event is ClientTrackWebSocketResponseEventDTO => {
  return isWebSocketResponseEventDTO(event) && event.event === WebSocketResponseEvent.CLIENT_TRACK;
};

export const isUserNotificationWebSocketResponseEventDTO = (
  event: unknown,
): event is UserNotificationWebSocketResponseEventDTO => {
  if (typeof event !== 'object' || event === null) return false;
  const v = event as unknown as Record<string, unknown>;
  return (
    [
      WebSocketResponseEvent.USER_NOTIFICATION_SUBMISSION,
      WebSocketResponseEvent.USER_NOTIFICATION_CONTEST_CLARIFICATION,
    ].includes(v.event as WebSocketResponseEvent) && !!v.content
  );
};

export const isUserNotificationSubmissionWebSocketResponseEventDTO = (
  event: unknown,
): event is UserNotificationSubmissionWebSocketResponseEventDTO => {
  return (
    isWebSocketResponseEventDTO(event) &&
    isUserNotificationWebSocketResponseEventDTO(event) &&
    event.event === WebSocketResponseEvent.USER_NOTIFICATION_SUBMISSION
  );
};

export const isUserNotificationContestClarificationWebSocketResponseEventDTO = (
  event: unknown,
): event is UserNotificationContestClarificationWebSocketResponseEventDTO => {
  return (
    isWebSocketResponseEventDTO(event) &&
    isUserNotificationWebSocketResponseEventDTO(event) &&
    event.event === WebSocketResponseEvent.USER_NOTIFICATION_CONTEST_CLARIFICATION
  );
};

// generic

export const getWebSocketResponseEventKey = (
  event: WebSocketResponseEvent,
  clientId: ClientId,
  id: string,
): WebSocketResponseEventKey => {
  return `${event}-${clientId}-${id}`;
};
