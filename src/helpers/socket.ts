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
  SendDataSsmSessionsListWebSocketResponseEventDTO,
  SubmissionRunStatusWebSocketResponseEventDTO,
  SubmissionsCrawlWebSocketResponseEventDTO,
  SubscribeChatCompletionsDataWebSocketEventDTO,
  SubscribeCodeRunStatusWebSocketEventDTO,
  SubscribeContestChangesWebSocketEventDTO,
  SubscribeProblemCrawledWebSocketEventDTO,
  SubscribeSendDataEc2InstancesListWebSocketEventDTO,
  SubscribeSendDataEcsTaskDefinitionsListWebSocketEventDTO,
  SubscribeSendDataEcsTasksListWebSocketEventDTO,
  SubscribeSendDataSsmSessionsListWebSocketEventDTO,
  SubscribeSubmissionRunStatusWebSocketEventDTO,
  SubscribeSubmissionsCrawlWebSocketEventDTO,
  UnsubscribeChatCompletionsDataWebSocketEventDTO,
  UnsubscribeCodeRunStatusWebSocketEventDTO,
  UnsubscribeContestChangesWebSocketEventDTO,
  UnsubscribeProblemCrawledWebSocketEventDTO,
  UnsubscribeSendDataEc2InstancesListWebSocketEventDTO,
  UnsubscribeSendDataEcsTaskDefinitionsListWebSocketEventDTO,
  UnsubscribeSendDataEcsTasksListWebSocketEventDTO,
  UnsubscribeSendDataSsmSessionsListWebSocketEventDTO,
  UnsubscribeSubmissionRunStatusWebSocketEventDTO,
  UnsubscribeSubmissionsCrawlWebSocketEventDTO,
  UserMessageWebSocketResponseEventDTO,
  UserTrackWebSocketEventDTO,
  WebSocketResponseEventDTO,
} from '../dto';
import {
  ObjectIdType,
  ProblemVerdict,
  SubmissionRunStatus,
  WebSocketMessageEvent,
  WebSocketResponseEvent,
  WebSocketResponseEventKey,
  WebSocketSubscriptionEvent,
} from '../types';

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

// SUBSCRIPTIONS

export const isSubscribeCodeRunStatusWebSocketEventDTO = (event: any): event is SubscribeCodeRunStatusWebSocketEventDTO => {
  return event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_CODE_RUN_STATUS
    && typeof event?.sessionId === 'string' && !!event.sessionId
    && typeof event?.runId === 'string' && !!event.runId;
};

export const isUnsubscribeCodeRunStatusWebSocketEventDTO = (event: any): event is UnsubscribeCodeRunStatusWebSocketEventDTO => {
  return event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_CODE_RUN_STATUS
    && typeof event?.sessionId === 'string' && !!event.sessionId
    && typeof event?.runId === 'string' && !!event.runId;
};

export const isSubscribeSubmissionRunStatusWebSocketEventDTO = (event: any): event is SubscribeSubmissionRunStatusWebSocketEventDTO => {
  return event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_SUBMISSION_RUN_STATUS
    && typeof event?.sessionId === 'string' && !!event.sessionId
    && typeof event?.submitId === 'string' && !!event.submitId;
};

export const isUnsubscribeSubmissionRunStatusWebSocketEventDTO = (event: any): event is UnsubscribeSubmissionRunStatusWebSocketEventDTO => {
  return event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_SUBMISSION_RUN_STATUS
    && typeof event?.sessionId === 'string' && !!event.sessionId
    && typeof event?.submitId === 'string' && !!event.submitId;
};

export const isSubscribeSendDataEcsTaskDefinitionsListWebSocketEventDTO = (event: any): event is SubscribeSendDataEcsTaskDefinitionsListWebSocketEventDTO => {
  return event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_SEND_DATA_ECS_TASK_DEFINITIONS_LIST
    && typeof event?.sessionId === 'string' && !!event.sessionId;
};

export const isUnsubscribeSendDataEcsTaskDefinitionsListWebSocketEventDTO = (event: any): event is UnsubscribeSendDataEcsTaskDefinitionsListWebSocketEventDTO => {
  return event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_SEND_DATA_ECS_TASK_DEFINITIONS_LIST
    && typeof event?.sessionId === 'string' && !!event.sessionId;
};

export const isSubscribeSendDataEcsTasksListWebSocketEventDTO = (event: any): event is SubscribeSendDataEcsTasksListWebSocketEventDTO => {
  return event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_SEND_DATA_ECS_TASKS_LIST
    && typeof event?.sessionId === 'string' && !!event.sessionId;
};

export const isUnsubscribeSendDataEcsTasksListWebSocketEventDTO = (event: any): event is UnsubscribeSendDataEcsTasksListWebSocketEventDTO => {
  return event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_SEND_DATA_ECS_TASKS_LIST
    && typeof event?.sessionId === 'string' && !!event.sessionId;
};

export const isSubscribeSendDataEc2InstancesListWebSocketEventDTO = (event: any): event is SubscribeSendDataEc2InstancesListWebSocketEventDTO => {
  return event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_SEND_DATA_EC2_INSTANCES_LIST
    && typeof event?.sessionId === 'string' && !!event.sessionId;
};

export const isUnsubscribeSendDataEc2InstancesListWebSocketEventDTO = (event: any): event is UnsubscribeSendDataEc2InstancesListWebSocketEventDTO => {
  return event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_SEND_DATA_EC2_INSTANCES_LIST
    && typeof event?.sessionId === 'string' && !!event.sessionId;
};

export const isSubscribeSendDataSsmSessionsListWebSocketEventDTO = (event: any): event is SubscribeSendDataSsmSessionsListWebSocketEventDTO => {
  return event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_SEND_DATA_SSM_SESSIONS_LIST
    && typeof event?.sessionId === 'string' && !!event.sessionId;
};

export const isUnsubscribeSendDataSsmSessionsListWebSocketEventDTO = (event: any): event is UnsubscribeSendDataSsmSessionsListWebSocketEventDTO => {
  return event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_SEND_DATA_SSM_SESSIONS_LIST
    && typeof event?.sessionId === 'string' && !!event.sessionId;
};

export const isSubscribeProblemCrawledWebSocketEventDTO = (event: any): event is SubscribeProblemCrawledWebSocketEventDTO => {
  return event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_PROBLEM_CRAWLED;
};

export const isUnsubscribeProblemCrawledWebSocketEventDTO = (event: any): event is UnsubscribeProblemCrawledWebSocketEventDTO => {
  return event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_PROBLEM_CRAWLED;
};

export const isSubscribeChatCompletionsDataWebSocketEventDTO = (event: any): event is SubscribeChatCompletionsDataWebSocketEventDTO => {
  return event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_CHAT_COMPLETIONS_DATA;
};

export const isUnsubscribeChatCompletionsDataWebSocketEventDTO = (event: any): event is UnsubscribeChatCompletionsDataWebSocketEventDTO => {
  return event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_CHAT_COMPLETIONS_DATA;
};

export const isSubscribeSubmissionsCrawlWebSocketEventDTO = (event: any): event is SubscribeSubmissionsCrawlWebSocketEventDTO => {
  return event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_SUBMISSIONS_CRAWL;
};

export const isUnsubscribeSubmissionsCrawlWebSocketEventDTO = (event: any): event is UnsubscribeSubmissionsCrawlWebSocketEventDTO => {
  return event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_SUBMISSIONS_CRAWL;
};

export const isSubscribeContestChangesWebSocketEventDTO = (event: any): event is SubscribeContestChangesWebSocketEventDTO => {
  return event?.event === WebSocketSubscriptionEvent.SUBSCRIBE_CONTEST_CHANGES;
};

export const isUnsubscribeContestChangesWebSocketEventDTO = (event: any): event is UnsubscribeContestChangesWebSocketEventDTO => {
  return event?.event === WebSocketSubscriptionEvent.UNSUBSCRIBE_CONTEST_CHANGES;
};

// is WebSocketResponseEventDTO

export const isPongWebSocketResponseEventDTO = (event: any): event is PongWebSocketResponseEventDTO => {
  return event?.event === WebSocketResponseEvent.PONG
    && typeof event?.key === 'string' && !!event.key
    && !!event?.data;
};

export const isCodeRunStatusMessageWebSocketResponseEventDTO = (event: any): event is CodeRunStatusWebSocketResponseEventDTO => {
  return event?.event === WebSocketResponseEvent.CODE_RUN_STATUS_MESSAGE
    && typeof event?.key === 'string' && !!event.key
    && typeof event?.runId === 'string' && !!event.runId
    && typeof event?.messageTimestamp === 'number' && !!event.messageTimestamp
    && event?.status in SubmissionRunStatus;
};

export const isSubmissionRunStatusMessageWebSocketResponseEventDTO = (event: any): event is SubmissionRunStatusWebSocketResponseEventDTO => {
  return event?.event === WebSocketResponseEvent.SUBMISSION_RUN_STATUS_MESSAGE
    && typeof event?.key === 'string' && !!event.key
    && typeof event?.submitId === 'string' && !!event.submitId
    && typeof event?.messageTimestamp === 'number' && !!event.messageTimestamp
    && event?.status in SubmissionRunStatus
    && event?.verdict in ProblemVerdict
    && typeof event?.points === 'number';
};

export const isUserMessageWebSocketResponseEventDTO = (event: any): event is UserMessageWebSocketResponseEventDTO => {
  return event?.event === WebSocketResponseEvent.USER_MESSAGE
    && typeof event?.key === 'string' && !!event.key
    && typeof event?.user?.nickname === 'string' && !!event.user?.nickname
    && typeof event?.user?.imageUrl === 'string' && !!event.user?.imageUrl
    && typeof event?.user?.company?.key === 'string' && !!event.user?.company?.key
    && typeof event?.messageTimestamp === 'number' && !!event.messageTimestamp
    && !!event?.content;
};

export const isSendDataEcsTaskDefinitionListWebSocketResponseEventDTO = (event: any): event is SendDataEcsTaskDefinitionListWebSocketResponseEventDTO => {
  return event?.event === WebSocketResponseEvent.SEND_DATA_ECS_TASK_DEFINITIONS_LIST
    && typeof event?.key === 'string' && !!event.key
    && typeof event?.messageTimestamp === 'number' && !!event.messageTimestamp
    && !!event?.content;
};

export const isSendDataEc2InstancesListWebSocketResponseEventDTO = (event: any): event is SendDataEc2InstancesListWebSocketResponseEventDTO => {
  return event?.event === WebSocketResponseEvent.SEND_DATA_EC2_INSTANCES_LIST
    && typeof event?.key === 'string' && !!event.key
    && typeof event?.messageTimestamp === 'number' && !!event.messageTimestamp
    && !!event?.content;
};

export const isSendDataEcsTasksListWebSocketResponseEventDTO = (event: any): event is SendDataEcsTasksListWebSocketResponseEventDTO => {
  return event?.event === WebSocketResponseEvent.SEND_DATA_ECS_TASKS_LIST
    && typeof event?.key === 'string' && !!event.key
    && typeof event?.messageTimestamp === 'number' && !!event.messageTimestamp
    && !!event?.content;
};

export const isSendDataSsmSessionsListWebSocketResponseEventDTO = (event: any): event is SendDataSsmSessionsListWebSocketResponseEventDTO => {
  return event?.event === WebSocketResponseEvent.SEND_DATA_SSM_SESSIONS_LIST
    && typeof event?.key === 'string' && !!event.key
    && typeof event?.messageTimestamp === 'number' && !!event.messageTimestamp
    && !!event?.content;
};

export const isWebSocketResponse = (event: any): event is WebSocketResponseEventDTO => {
  return Object.values(WebSocketResponseEvent).includes(event?.event as WebSocketResponseEvent)
    && typeof event?.key === 'string' && !!event.key
    && typeof event?.connectionId === 'string' && !!event.connectionId
    && typeof event?.messageTimestamp === 'number' && !!event.messageTimestamp;
};

export const isProblemCrawledWebSocketResponseEventDTO = (event: any): event is ProblemCrawledWebSocketResponseEventDTO => {
  return isWebSocketResponse(event) && event?.event === WebSocketResponseEvent.PROBLEM_CRAWLED
    && !!event?.content;
};

export const isChatCompletionsResponseWebSocketResponseEventDTO = (event: any): event is ChatCompletionsResponseWebSocketResponseEventDTO => {
  return isWebSocketResponse(event) && event?.event === WebSocketResponseEvent.CHAT_COMPLETIONS_RESPONSE
    && !!event?.content;
};

export const isSubmissionsCrawlWebSocketResponseEventDTO = (event: any): event is SubmissionsCrawlWebSocketResponseEventDTO => {
  return isWebSocketResponse(event) && event?.event === WebSocketResponseEvent.SUBMISSIONS_CRAWL
    && !!event?.content;
};

export const isContestChangesWebSocketResponseEventDTO = (event: any): event is ContestChangesWebSocketResponseEventDTO => {
  return isWebSocketResponse(event) && event?.event === WebSocketResponseEvent.CONTEST_CHANGES
    && !!event?.content;
};

// generic

export const getWebSocketResponseEventKey = (event: WebSocketResponseEvent, sessionId: ObjectIdType, id: string): WebSocketResponseEventKey => {
  return `${event}-${sessionId}-${id}`;
};
