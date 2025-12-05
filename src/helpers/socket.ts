import {
  ChatCompletionsResponseWebSocketResponseEventDTO,
  ChatCompletionsWebSocketEventDTO,
  CodeRunStatusWebSocketResponseEventDTO,
  ContestChangesWebSocketResponseEventDTO,
  PingWebSocketEventDTO,
  PongWebSocketResponseEventDTO,
  ProblemCrawledWebSocketResponseEventDTO,
  SendDataEc2InstancesListWebSocketResponseEventDTO,
  SendDataEcsTaskDefinitionListWebSocketResponseEventDTO,
  SendDataEcsTasksListWebSocketResponseEventDTO,
  SendDataRunCommandWebSocketResponseEventDTO,
  SendDataSsmSessionsListWebSocketResponseEventDTO,
  SendDataWebSocketResponseEventDTO,
  SubmissionRunStatusWebSocketResponseEventDTO,
  SubmissionsCrawlWebSocketResponseEventDTO,
  SubscribeChatCompletionsDataWebSocketEventDTO,
  SubscribeCodeRunStatusWebSocketEventDTO,
  SubscribeContestChangesWebSocketEventDTO,
  SubscribeGetDataWebSocketEventDTO,
  SubscribeProblemCrawledWebSocketEventDTO,
  SubscribeSubmissionRunStatusWebSocketEventDTO,
  SubscribeSubmissionsCrawlWebSocketEventDTO,
  UnsubscribeChatCompletionsDataWebSocketEventDTO,
  UnsubscribeCodeRunStatusWebSocketEventDTO,
  UnsubscribeContestChangesWebSocketEventDTO,
  UnsubscribeGetDataWebSocketEventDTO,
  UnsubscribeProblemCrawledWebSocketEventDTO,
  UnsubscribeSubmissionRunStatusWebSocketEventDTO,
  UnsubscribeSubmissionsCrawlWebSocketEventDTO,
  UserMessageWebSocketResponseEventDTO,
  UserTrackWebSocketEventDTO,
  WebSocketResponseEventDTO,
  WebSocketSubscribeEventDTO,
  WebSocketUnsubscribeEventDTO,
} from '../dto';
import {
  ClientIdType,
  ProblemVerdict,
  SubmissionRunStatus,
  WebSocketMessageEvent,
  WebSocketResponseEvent,
  WebSocketResponseEventKey,
  WebSocketSubscriptionEvent,
} from '../types';

// Custom CHANNEL_PUBLISH_MESSAGES
export const isPingWebSocketEventDTO = (event: any): event is PingWebSocketEventDTO => {
  return event?.event === WebSocketMessageEvent.PING
    && typeof event?.sessionId === 'string' && !!event.sessionId;
};

export const isUserTrackWebSocketEventDTO = (event: any): event is UserTrackWebSocketEventDTO => {
  return event?.event === WebSocketMessageEvent.USER_TRACK
    && typeof event?.sessionId === 'string' && !!event.sessionId;
};

export const isChatCompletionsWebSocketEventDTO = (event: any): event is ChatCompletionsWebSocketEventDTO => {
  return event?.event === WebSocketMessageEvent.CHAT_COMPLETIONS
    && typeof event?.sessionId === 'string' && !!event.sessionId;
};

// CHANNEL_PUBLISH_SUBSCRIPTIONS

export const isWebsocketSubscription = (event: any): event is WebSocketSubscribeEventDTO | WebSocketUnsubscribeEventDTO => {
  return Object.values(WebSocketSubscriptionEvent).includes(event?.event)
    && typeof event?.clientId === 'string' && !!event.clientId;
};

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

export const isSubscribeChatCompletionsDataWebSocketEventDTO = (event: any): event is SubscribeChatCompletionsDataWebSocketEventDTO => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_CHAT_COMPLETIONS_DATA;
};

export const isUnsubscribeChatCompletionsDataWebSocketEventDTO = (event: any): event is UnsubscribeChatCompletionsDataWebSocketEventDTO => {
  return isWebsocketSubscription(event)
    && event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_CHAT_COMPLETIONS_DATA;
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

// is WebSocketResponseEventDTO, CHANNEL_SUBSCRIBE_CLIENT

export const isWebSocketResponseEventDTO = (event: any): event is WebSocketResponseEventDTO => {
  return Object.values(WebSocketResponseEvent).includes(event?.event)
    && typeof event?.key === 'string' && !!event.key
    && typeof event?.connectionId === 'string'
    && typeof event?.messageTimestamp === 'number' && !!event.messageTimestamp;
};

export const isPongWebSocketResponseEventDTO = (event: any): event is PongWebSocketResponseEventDTO => {
  return isWebSocketResponseEventDTO(event)
    && event?.event === WebSocketResponseEvent.PONG
    && !!event?.data;
};

export const isCodeRunStatusMessageWebSocketResponseEventDTO = (event: any): event is CodeRunStatusWebSocketResponseEventDTO => {
  return isWebSocketResponseEventDTO(event)
    && event?.event === WebSocketResponseEvent.CODE_RUN_STATUS_MESSAGE
    && typeof event?.runId === 'string' && !!event.runId
    && event?.status in SubmissionRunStatus;
};

export const isSubmissionRunStatusMessageWebSocketResponseEventDTO = (event: any): event is SubmissionRunStatusWebSocketResponseEventDTO => {
  return isWebSocketResponseEventDTO(event)
    && event?.event === WebSocketResponseEvent.SUBMISSION_RUN_STATUS_MESSAGE
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

export const isChatCompletionsResponseWebSocketResponseEventDTO = (event: any): event is ChatCompletionsResponseWebSocketResponseEventDTO => {
  return isWebSocketResponseEventDTO(event)
    && event?.event === WebSocketResponseEvent.CHAT_COMPLETIONS_RESPONSE
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

// generic

export const getWebSocketResponseEventKey = (event: WebSocketResponseEvent, clientId: ClientIdType, id: string): WebSocketResponseEventKey => {
  return `${event}-${clientId}-${id}`;
};
