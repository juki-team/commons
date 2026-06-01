import type {
  ChatCompletionsWebSocketEventDto,
  ClientTrackDeviceWebSocketEventDto,
  ClientTrackLocationWebSocketEventDto,
  ClientTrackScreenshotWebSocketEventDto,
  ClientTrackWebSocketResponseEventDto,
  CodeRunStatusWebSocketResponseEventDto,
  ContestChangesWebSocketResponseEventDto,
  PingWebSocketEventDto,
  PongWebSocketResponseEventDto,
  ProblemCrawledWebSocketResponseEventDto,
  SendDataChatCompletionsWebSocketResponseEventDto,
  SendDataClientTrackWebSocketResponseEventDto,
  SendDataEc2InstancesListWebSocketResponseEventDto,
  SendDataEcsTaskDefinitionListWebSocketResponseEventDto,
  SendDataEcsTasksListWebSocketResponseEventDto,
  SendDataRunCommandWebSocketResponseEventDto,
  SendDataSsmSessionsListWebSocketResponseEventDto,
  SendDataWebSocketResponseEventDto,
  SubmissionRunStatusWebSocketResponseEventDto,
  SubmissionsCrawlWebSocketResponseEventDto,
  SubscribeClientTrackWebSocketEventDto,
  SubscribeCodeRunStatusWebSocketEventDto,
  SubscribeContestChangesWebSocketEventDto,
  SubscribeGetDataWebSocketEventDto,
  SubscribeProblemCrawledWebSocketEventDto,
  SubscribeSubmissionRunStatusWebSocketEventDto,
  SubscribeSubmissionsCrawlWebSocketEventDto,
  SubscribeUserNotificationWebSocketEventDto,
  UnsubscribeClientTrackWebSocketEventDto,
  UnsubscribeCodeRunStatusWebSocketEventDto,
  UnsubscribeContestChangesWebSocketEventDto,
  UnsubscribeGetDataWebSocketEventDto,
  UnsubscribeProblemCrawledWebSocketEventDto,
  UnsubscribeSubmissionRunStatusWebSocketEventDto,
  UnsubscribeSubmissionsCrawlWebSocketEventDto,
  UnsubscribeUserNotificationWebSocketEventDto,
  UserMessageWebSocketResponseEventDto,
  UserNotificationContestClarificationWebSocketResponseEventDto,
  UserNotificationSubmissionWebSocketResponseEventDto,
  UserNotificationWebSocketResponseEventDto,
  WebSocketMessageEventDto,
  WebSocketResponseEventDto,
  WebSocketSubscribeEventDto,
  WebSocketUnsubscribeEventDto,
} from '../dto/index.js';
import {
  ProblemVerdict,
  SubmissionRunStatus,
  WebSocketMessageEvent,
  WebSocketResponseEvent,
  WebSocketSubscriptionEvent,
} from '../enums/index.js';
import type { ClientId, WebSocketResponseEventKey } from '../types/index.js';

export const isWebSocketSubscription = (
  event: unknown,
): event is WebSocketSubscribeEventDto | WebSocketUnsubscribeEventDto | WebSocketMessageEventDto => {
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

export const isPingWebSocketEventDto = (event: unknown): event is PingWebSocketEventDto => {
  return isWebSocketSubscription(event) && event.event === WebSocketMessageEvent.PING;
};

export const isClientTrackLocationWebSocketEventDto = (event: unknown): event is ClientTrackLocationWebSocketEventDto => {
  return isWebSocketSubscription(event) && event.event === WebSocketMessageEvent.CLIENT_TRACK_LOCATION;
};

export const isClientTrackScreenshotWebSocketEventDto = (event: unknown): event is ClientTrackScreenshotWebSocketEventDto => {
  return isWebSocketSubscription(event) && event.event === WebSocketMessageEvent.CLIENT_TRACK_SCREENSHOT;
};

export const isClientTrackDeviceWebSocketEventDto = (event: unknown): event is ClientTrackDeviceWebSocketEventDto => {
  return isWebSocketSubscription(event) && event.event === WebSocketMessageEvent.CLIENT_TRACK_DEVICE;
};

export const isChatCompletionsWebSocketEventDto = (event: unknown): event is ChatCompletionsWebSocketEventDto => {
  return isWebSocketSubscription(event) && event.event === WebSocketMessageEvent.CHAT_COMPLETIONS;
};

// CHANNEL_PUBLISH_SUBSCRIPTIONS

export const isSubscribeCodeRunStatusWebSocketEventDto = (event: unknown): event is SubscribeCodeRunStatusWebSocketEventDto => {
  if (!isWebSocketSubscription(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  return event.event === WebSocketSubscriptionEvent.SUBSCRIBE_CODE_RUN_STATUS && typeof v.runId === 'string' && !!v.runId;
};

export const isUnsubscribeCodeRunStatusWebSocketEventDto = (
  event: unknown,
): event is UnsubscribeCodeRunStatusWebSocketEventDto => {
  if (!isWebSocketSubscription(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  return event.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_CODE_RUN_STATUS && typeof v.runId === 'string' && !!v.runId;
};

export const isSubscribeSubmissionRunStatusWebSocketEventDto = (
  event: unknown,
): event is SubscribeSubmissionRunStatusWebSocketEventDto => {
  if (!isWebSocketSubscription(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  return (
    event.event === WebSocketSubscriptionEvent.SUBSCRIBE_SUBMISSION_RUN_STATUS && typeof v.submitId === 'string' && !!v.submitId
  );
};

export const isUnsubscribeSubmissionRunStatusWebSocketEventDto = (
  event: unknown,
): event is UnsubscribeSubmissionRunStatusWebSocketEventDto => {
  if (!isWebSocketSubscription(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  return (
    event.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_SUBMISSION_RUN_STATUS &&
    typeof v.submitId === 'string' &&
    !!v.submitId
  );
};

export const isSubscribeGetDataWebSocketEventDto = (event: unknown): event is SubscribeGetDataWebSocketEventDto => {
  return isWebSocketSubscription(event) && event.event === WebSocketSubscriptionEvent.SUBSCRIBE_GET_DATA;
};

export const isUnsubscribeGetDataWebSocketEventDto = (event: unknown): event is UnsubscribeGetDataWebSocketEventDto => {
  return isWebSocketSubscription(event) && event.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_GET_DATA;
};

export const isSubscribeProblemCrawledWebSocketEventDto = (
  event: unknown,
): event is SubscribeProblemCrawledWebSocketEventDto => {
  return isWebSocketSubscription(event) && event.event === WebSocketSubscriptionEvent.SUBSCRIBE_PROBLEM_CRAWLED;
};

export const isUnsubscribeProblemCrawledWebSocketEventDto = (
  event: unknown,
): event is UnsubscribeProblemCrawledWebSocketEventDto => {
  return isWebSocketSubscription(event) && event.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_PROBLEM_CRAWLED;
};

export const isSubscribeSubmissionsCrawlWebSocketEventDto = (
  event: unknown,
): event is SubscribeSubmissionsCrawlWebSocketEventDto => {
  return isWebSocketSubscription(event) && event.event === WebSocketSubscriptionEvent.SUBSCRIBE_SUBMISSIONS_CRAWL;
};

export const isUnsubscribeSubmissionsCrawlWebSocketEventDto = (
  event: unknown,
): event is UnsubscribeSubmissionsCrawlWebSocketEventDto => {
  return isWebSocketSubscription(event) && event.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_SUBMISSIONS_CRAWL;
};

export const isSubscribeContestChangesWebSocketEventDto = (
  event: unknown,
): event is SubscribeContestChangesWebSocketEventDto => {
  return isWebSocketSubscription(event) && event.event === WebSocketSubscriptionEvent.SUBSCRIBE_CONTEST_CHANGES;
};

export const isUnsubscribeContestChangesWebSocketEventDto = (
  event: unknown,
): event is UnsubscribeContestChangesWebSocketEventDto => {
  return isWebSocketSubscription(event) && event.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_CONTEST_CHANGES;
};

export const isSubscribeClientTrackWebSocketEventDto = (event: unknown): event is SubscribeClientTrackWebSocketEventDto => {
  return isWebSocketSubscription(event) && event.event === WebSocketSubscriptionEvent.SUBSCRIBE_CLIENT_TRACK;
};

export const isUnsubscribeClientTrackWebSocketEventDto = (event: unknown): event is UnsubscribeClientTrackWebSocketEventDto => {
  return isWebSocketSubscription(event) && event.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_CLIENT_TRACK;
};

export const isSubscribeUserNotificationWebSocketEventDto = (
  event: unknown,
): event is SubscribeUserNotificationWebSocketEventDto => {
  return isWebSocketSubscription(event) && event.event === WebSocketSubscriptionEvent.SUBSCRIBE_USER_NOTIFICATION;
};

export const isUnsubscribeUserNotificationWebSocketEventDto = (
  event: unknown,
): event is UnsubscribeUserNotificationWebSocketEventDto => {
  return isWebSocketSubscription(event) && event.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_USER_NOTIFICATION;
};

// is WebSocketResponseEventDto, CHANNEL_SUBSCRIBE_CLIENT

export const isWebSocketResponseEventDto = (event: unknown): event is WebSocketResponseEventDto => {
  if (typeof event !== 'object' || event === null) return false;
  const v = event as unknown as Record<string, unknown>;
  return (
    Object.values(WebSocketResponseEvent).includes(v.event as WebSocketResponseEvent) &&
    typeof v.key === 'string' &&
    typeof v.connectionId === 'string' &&
    typeof v.createdAt === 'number' &&
    !!v.createdAt
  );
};

export const isPongWebSocketResponseEventDto = (event: unknown): event is PongWebSocketResponseEventDto => {
  if (!isWebSocketResponseEventDto(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  return event.event === WebSocketResponseEvent.PONG && !!v.data;
};

export const isCodeRunStatusMessageWebSocketResponseEventDto = (
  event: unknown,
): event is CodeRunStatusWebSocketResponseEventDto => {
  if (!isWebSocketResponseEventDto(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  return (
    event.event === WebSocketResponseEvent.CODE_RUN_STATUS &&
    typeof v.runId === 'string' &&
    !!v.runId &&
    Object.values(SubmissionRunStatus).includes(v.status as SubmissionRunStatus)
  );
};

export const isSubmissionRunStatusMessageWebSocketResponseEventDto = (
  event: unknown,
): event is SubmissionRunStatusWebSocketResponseEventDto => {
  if (!isWebSocketResponseEventDto(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  return (
    event.event === WebSocketResponseEvent.SUBMISSION_RUN_STATUS &&
    typeof v.submitId === 'string' &&
    !!v.submitId &&
    Object.values(SubmissionRunStatus).includes(v.status as SubmissionRunStatus) &&
    Object.values(ProblemVerdict).includes(v.verdict as ProblemVerdict) &&
    typeof v.points === 'number'
  );
};

export const isUserMessageWebSocketResponseEventDto = (event: unknown): event is UserMessageWebSocketResponseEventDto => {
  if (!isWebSocketResponseEventDto(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  const user = v.user as Record<string, unknown> | undefined;
  const organization = user?.organization as Record<string, unknown> | undefined;
  return (
    event.event === WebSocketResponseEvent.USER_MESSAGE &&
    typeof user?.nickname === 'string' &&
    !!user.nickname &&
    typeof user?.imageUrl === 'string' &&
    !!user.imageUrl &&
    typeof organization?.key === 'string' &&
    !!organization.key &&
    !!v.content
  );
};

export const isSendDataWebSocketResponseEventDto = (event: unknown): event is SendDataWebSocketResponseEventDto => {
  if (typeof event !== 'object' || event === null) return false;
  const v = event as unknown as Record<string, unknown>;
  return (
    (
      [
        WebSocketResponseEvent.SEND_DATA_ECS_TASK_DEFINITIONS_LIST,
        WebSocketResponseEvent.SEND_DATA_EC2_INSTANCES_LIST,
        WebSocketResponseEvent.SEND_DATA_ECS_TASKS_LIST,
        WebSocketResponseEvent.SEND_DATA_SSM_SESSIONS_LIST,
        WebSocketResponseEvent.SEND_DATA_RUN_COMMAND,
        WebSocketResponseEvent.SEND_DATA_CLIENT_TRACK,
        WebSocketResponseEvent.SEND_DATA_CHAT_COMPLETIONS,
      ] as WebSocketResponseEvent[]
    ).includes(v.event as WebSocketResponseEvent) &&
    typeof v.dataId === 'string' &&
    !!v.dataId &&
    !!v.content
  );
};

export const isSendDataEcsTaskDefinitionListWebSocketResponseEventDto = (
  event: unknown,
): event is SendDataEcsTaskDefinitionListWebSocketResponseEventDto => {
  return (
    isWebSocketResponseEventDto(event) &&
    isSendDataWebSocketResponseEventDto(event) &&
    event.event === WebSocketResponseEvent.SEND_DATA_ECS_TASK_DEFINITIONS_LIST
  );
};

export const isSendDataEc2InstancesListWebSocketResponseEventDto = (
  event: unknown,
): event is SendDataEc2InstancesListWebSocketResponseEventDto => {
  return (
    isWebSocketResponseEventDto(event) &&
    isSendDataWebSocketResponseEventDto(event) &&
    event.event === WebSocketResponseEvent.SEND_DATA_EC2_INSTANCES_LIST
  );
};

export const isSendDataEcsTasksListWebSocketResponseEventDto = (
  event: unknown,
): event is SendDataEcsTasksListWebSocketResponseEventDto => {
  return (
    isWebSocketResponseEventDto(event) &&
    isSendDataWebSocketResponseEventDto(event) &&
    event.event === WebSocketResponseEvent.SEND_DATA_ECS_TASKS_LIST
  );
};

export const isSendDataSsmSessionsListWebSocketResponseEventDto = (
  event: unknown,
): event is SendDataSsmSessionsListWebSocketResponseEventDto => {
  return (
    isWebSocketResponseEventDto(event) &&
    isSendDataWebSocketResponseEventDto(event) &&
    event.event === WebSocketResponseEvent.SEND_DATA_SSM_SESSIONS_LIST
  );
};

export const isSendDataRunCommandWebSocketResponseEventDto = (
  event: unknown,
): event is SendDataRunCommandWebSocketResponseEventDto => {
  return (
    isWebSocketResponseEventDto(event) &&
    isSendDataWebSocketResponseEventDto(event) &&
    event.event === WebSocketResponseEvent.SEND_DATA_RUN_COMMAND
  );
};

export const isSendDataClientTrackWebSocketResponseEventDto = (
  event: unknown,
): event is SendDataClientTrackWebSocketResponseEventDto => {
  return (
    isWebSocketResponseEventDto(event) &&
    isSendDataWebSocketResponseEventDto(event) &&
    event.event === WebSocketResponseEvent.SEND_DATA_CLIENT_TRACK
  );
};

export const isSenDataChatCompletionsWebSocketResponseEventDto = (
  event: unknown,
): event is SendDataChatCompletionsWebSocketResponseEventDto => {
  return (
    isWebSocketResponseEventDto(event) &&
    isSendDataWebSocketResponseEventDto(event) &&
    event.event === WebSocketResponseEvent.SEND_DATA_CHAT_COMPLETIONS
  );
};

export const isProblemCrawledWebSocketResponseEventDto = (event: unknown): event is ProblemCrawledWebSocketResponseEventDto => {
  if (!isWebSocketResponseEventDto(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  return event.event === WebSocketResponseEvent.PROBLEM_CRAWLED && !!v.content;
};

export const isSubmissionsCrawlWebSocketResponseEventDto = (
  event: unknown,
): event is SubmissionsCrawlWebSocketResponseEventDto => {
  if (!isWebSocketResponseEventDto(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  return event.event === WebSocketResponseEvent.SUBMISSIONS_CRAWL && !!v.content;
};

export const isContestChangesWebSocketResponseEventDto = (event: unknown): event is ContestChangesWebSocketResponseEventDto => {
  if (!isWebSocketResponseEventDto(event)) return false;
  const v = event as unknown as Record<string, unknown>;
  return event.event === WebSocketResponseEvent.CONTEST_CHANGES && !!v.content;
};

export const isClientTrackWebSocketResponseEventDto = (event: unknown): event is ClientTrackWebSocketResponseEventDto => {
  return isWebSocketResponseEventDto(event) && event.event === WebSocketResponseEvent.CLIENT_TRACK;
};

export const isUserNotificationWebSocketResponseEventDto = (
  event: unknown,
): event is UserNotificationWebSocketResponseEventDto => {
  if (typeof event !== 'object' || event === null) return false;
  const v = event as unknown as Record<string, unknown>;
  return (
    (
      [
        WebSocketResponseEvent.USER_NOTIFICATION_SUBMISSION,
        WebSocketResponseEvent.USER_NOTIFICATION_CONTEST_CLARIFICATION,
      ] as WebSocketResponseEvent[]
    ).includes(v.event as WebSocketResponseEvent) && !!v.content
  );
};

export const isUserNotificationSubmissionWebSocketResponseEventDto = (
  event: unknown,
): event is UserNotificationSubmissionWebSocketResponseEventDto => {
  return (
    isWebSocketResponseEventDto(event) &&
    isUserNotificationWebSocketResponseEventDto(event) &&
    event.event === WebSocketResponseEvent.USER_NOTIFICATION_SUBMISSION
  );
};

export const isUserNotificationContestClarificationWebSocketResponseEventDto = (
  event: unknown,
): event is UserNotificationContestClarificationWebSocketResponseEventDto => {
  return (
    isWebSocketResponseEventDto(event) &&
    isUserNotificationWebSocketResponseEventDto(event) &&
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
