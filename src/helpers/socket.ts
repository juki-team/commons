import {
  CodeRunStatusNotificationWebSocketBroadcastEventDTO,
  PingWebSocketEventDTO,
  SubmissionRunStatusNotificationWebSocketBroadcastEventDTO,
  SubscribeCodeRunStatusWebSocketEventDTO,
  SubscribeSubmissionRunStatusWebSocketEventDTO,
  UnsubscribeCodeRunStatusWebSocketEventDTO,
  UnsubscribeSubmissionRunStatusWebSocketEventDTO,
  UserNotificationWebSocketBroadcastEventDTO,
} from '../dto';
import { ProblemVerdict, SocketActionEvent, SocketBroadcastEvent, SubmissionRunStatus } from '../types';

export const isPingWebSocketEventDTO = (event: any): event is PingWebSocketEventDTO => {
  return event?.event === SocketActionEvent.PING;
};

export const isSubscribeCodeRunStatusWebSocketEventDTO = (event: any): event is SubscribeCodeRunStatusWebSocketEventDTO => {
  return event?.event === SocketActionEvent.SUBSCRIBE_CODE_RUN_STATUS
    && typeof event?.sessionId === 'string' && event.sessionId
    && typeof event?.runId === 'string' && !event.runId;
};

export const isUnsubscribeCodeRunStatusWebSocketEventDTO = (event: any): event is UnsubscribeCodeRunStatusWebSocketEventDTO => {
  return event?.event === SocketActionEvent.UNSUBSCRIBE_CODE_RUN_STATUS
    && typeof event?.sessionId === 'string' && event.sessionId
    && typeof event?.runId === 'string' && !event.runId;
};

export const isSubscribeSubmissionRunStatusWebSocketEventDTO = (event: any): event is SubscribeSubmissionRunStatusWebSocketEventDTO => {
  return event?.event === SocketActionEvent.SUBSCRIBE_SUBMISSION_RUN_STATUS
    && typeof event?.sessionId === 'string' && event.sessionId
    && typeof event?.submitId === 'string' && !event.submitId;
};

export const isUnsubscribeSubmissionRunStatusWebSocketEventDTO = (event: any): event is UnsubscribeSubmissionRunStatusWebSocketEventDTO => {
  return event?.event === SocketActionEvent.UNSUBSCRIBE_SUBMISSION_RUN_STATUS
    && typeof event?.sessionId === 'string' && event.sessionId
    && typeof event?.submitId === 'string' && !event.submitId;
};

export const isCodeRunStatusNotificationWebSocketBroadcastEventDTO = (event: any): event is CodeRunStatusNotificationWebSocketBroadcastEventDTO => {
  return event?.event === SocketBroadcastEvent.CODE_RUN_STATUS_NOTIFICATION
    && typeof event?.sessionId === 'string' && event?.sessionId
    && typeof event?.messageTimestamp === 'number' && event.messageTimestamp
    && typeof event?.runId === 'string' && event?.runId
    && event?.status in SubmissionRunStatus;
};

export const isSubmissionRunStatusNotificationWebSocketBroadcastEventDTO = (event: any): event is SubmissionRunStatusNotificationWebSocketBroadcastEventDTO => {
  return event?.event === SocketBroadcastEvent.SUBMISSION_RUN_STATUS_NOTIFICATION
    && typeof event?.sessionId === 'string' && event?.sessionId
    && typeof event?.messageTimestamp === 'number' && event.messageTimestamp
    && typeof event?.submitId === 'string' && event?.submitId
    && event?.status in SubmissionRunStatus
    && event?.verdict in ProblemVerdict
    && typeof event?.points === 'number';
};

export const isUserNotificationWebSocketBroadcastEventDTO = (event: any): event is UserNotificationWebSocketBroadcastEventDTO => {
  return event?.event === SocketBroadcastEvent.USER_NOTIFICATION
    && typeof event?.sessionId === 'string' && event?.sessionId
    && typeof event?.messageTimestamp === 'number' && event.messageTimestamp
    && typeof event?.userId === 'string' && event?.userId
    && typeof event?.content === 'string' && event?.content;
};
