import {
  CodeRunStatusMessageWebSocketResponseEventDTO,
  CodeRunStatusNotificationWebSocketBroadcastEventDTO,
  PingWebSocketBroadcastEventDTO,
  PingWebSocketEventDTO,
  PongWebSocketResponseEventDTO,
  SubmissionRunStatusMessageWebSocketResponseEventDTO,
  SubmissionRunStatusNotificationWebSocketBroadcastEventDTO,
  SubscribeCodeRunStatusWebSocketEventDTO,
  SubscribeSubmissionRunStatusWebSocketEventDTO,
  UnsubscribeCodeRunStatusWebSocketEventDTO,
  UnsubscribeSubmissionRunStatusWebSocketEventDTO,
  UserMessageWebSocketResponseEventDTO,
  UserNotificationWebSocketBroadcastEventDTO,
} from '../dto';
import {
  ObjectIdType,
  ProblemVerdict,
  SubmissionRunStatus,
  WebSocketActionEvent,
  WebSocketBroadcastEvent,
  WebSocketResponseEvent,
  WebSocketResponseEventKey,
} from '../types';

export const isPingWebSocketEventDTO = (event: any): event is PingWebSocketEventDTO => {
  return event?.event === WebSocketActionEvent.PING
    && typeof event?.sessionId === 'string' && !!event.sessionId;
};

export const isSubscribeCodeRunStatusWebSocketEventDTO = (event: any): event is SubscribeCodeRunStatusWebSocketEventDTO => {
  return event?.event === WebSocketActionEvent.SUBSCRIBE_CODE_RUN_STATUS
    && typeof event?.sessionId === 'string' && !!event.sessionId
    && typeof event?.runId === 'string' && !!event.runId;
};

export const isUnsubscribeCodeRunStatusWebSocketEventDTO = (event: any): event is UnsubscribeCodeRunStatusWebSocketEventDTO => {
  return event?.event === WebSocketActionEvent.UNSUBSCRIBE_CODE_RUN_STATUS
    && typeof event?.sessionId === 'string' && !!event.sessionId
    && typeof event?.runId === 'string' && !!event.runId;
};

export const isSubscribeSubmissionRunStatusWebSocketEventDTO = (event: any): event is SubscribeSubmissionRunStatusWebSocketEventDTO => {
  return event?.event === WebSocketActionEvent.SUBSCRIBE_SUBMISSION_RUN_STATUS
    && typeof event?.sessionId === 'string' && !!event.sessionId
    && typeof event?.submitId === 'string' && !!event.submitId;
};

export const isUnsubscribeSubmissionRunStatusWebSocketEventDTO = (event: any): event is UnsubscribeSubmissionRunStatusWebSocketEventDTO => {
  return event?.event === WebSocketActionEvent.UNSUBSCRIBE_SUBMISSION_RUN_STATUS
    && typeof event?.sessionId === 'string' && !!event.sessionId
    && typeof event?.submitId === 'string' && !!event.submitId;
};

export const isPingWebSocketBroadcastEventDTO = (event: any): event is PingWebSocketBroadcastEventDTO => {
  return event?.event === WebSocketBroadcastEvent.PING;
};

export const isCodeRunStatusNotificationWebSocketBroadcastEventDTO = (event: any): event is CodeRunStatusNotificationWebSocketBroadcastEventDTO => {
  return event?.event === WebSocketBroadcastEvent.CODE_RUN_STATUS_NOTIFICATION
    && typeof event?.sessionId === 'string' && !!event.sessionId
    && typeof event?.messageTimestamp === 'number' && !!event.messageTimestamp
    && typeof event?.runId === 'string' && !!event.runId
    && event?.status in SubmissionRunStatus;
};

export const isSubmissionRunStatusNotificationWebSocketBroadcastEventDTO = (event: any): event is SubmissionRunStatusNotificationWebSocketBroadcastEventDTO => {
  return event?.event === WebSocketBroadcastEvent.SUBMISSION_RUN_STATUS_NOTIFICATION
    && typeof event?.sessionId === 'string' && !!event?.sessionId
    && typeof event?.messageTimestamp === 'number' && !!event.messageTimestamp
    && typeof event?.submitId === 'string' && !!event.submitId
    && event?.status in SubmissionRunStatus
    && event?.verdict in ProblemVerdict
    && typeof event?.points === 'number';
};

export const isUserNotificationWebSocketBroadcastEventDTO = (event: any): event is UserNotificationWebSocketBroadcastEventDTO => {
  return event?.event === WebSocketBroadcastEvent.USER_NOTIFICATION
    && typeof event?.sessionId === 'string' && !!event?.sessionId
    && typeof event?.messageTimestamp === 'number' && !!event.messageTimestamp
    && typeof event?.userId === 'string' && !!event?.userId
    && typeof event?.content === 'string' && !!event?.content;
};

// is WebSocketResponseEventDTO

export const isPongWebSocketResponseEventDTO = (event: any): event is PongWebSocketResponseEventDTO => {
  return event?.event === WebSocketResponseEvent.PONG
    && typeof event?.key === 'string' && !!event.key
    && !!event?.data;
};

export const isCodeRunStatusMessageWebSocketResponseEventDTO = (event: any): event is CodeRunStatusMessageWebSocketResponseEventDTO => {
  return event?.event === WebSocketResponseEvent.CODE_RUN_STATUS_MESSAGE
    && typeof event?.key === 'string' && !!event.key
    && typeof event?.runId === 'string' && !!event.runId
    && typeof event?.messageTimestamp === 'number' && !!event.messageTimestamp
    && event?.status in SubmissionRunStatus;
};

export const isSubmissionRunStatusMessageWebSocketResponseEventDTO = (event: any): event is SubmissionRunStatusMessageWebSocketResponseEventDTO => {
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

// generic

export const getWebSocketResponseEventKey = (event: WebSocketResponseEvent, sessionId: ObjectIdType, id: string): WebSocketResponseEventKey => {
  return `${event}-${sessionId}-${id}`;
};
