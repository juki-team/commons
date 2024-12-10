import {
  ProblemVerdict,
  SocketActionEvent,
  SocketBroadcastEvent,
  SocketResponseEvent,
  SubmissionRunStatus,
} from '../types';
import { PingResponseDTO } from './user';

// EVENT ACTIONS
export interface PingWebSocketEventDTO {
  event: SocketActionEvent.PING,
  sessionId: string,
}

export interface SubscribeCodeRunStatusWebSocketEventDTO {
  event: SocketActionEvent.SUBSCRIBE_CODE_RUN_STATUS,
  sessionId: string,
  runId: string,
}

export interface UnsubscribeCodeRunStatusWebSocketEventDTO {
  event: SocketActionEvent.UNSUBSCRIBE_CODE_RUN_STATUS,
  sessionId: string,
  runId: string,
}

export interface SubscribeSubmissionRunStatusWebSocketEventDTO {
  event: SocketActionEvent.SUBSCRIBE_SUBMISSION_RUN_STATUS,
  sessionId: string,
  submitId: string,
}

export interface UnsubscribeSubmissionRunStatusWebSocketEventDTO {
  event: SocketActionEvent.UNSUBSCRIBE_SUBMISSION_RUN_STATUS,
  sessionId: string,
  submitId: string,
}

export type WebSocketEventDTO =
  PingWebSocketEventDTO
  | SubscribeCodeRunStatusWebSocketEventDTO
  | UnsubscribeCodeRunStatusWebSocketEventDTO
  | SubscribeSubmissionRunStatusWebSocketEventDTO
  | UnsubscribeSubmissionRunStatusWebSocketEventDTO;

// BROADCAST EVENTS

export type InfoLogCaseStatus = { inputKey: string, out: string, err: string, log: string };

export interface CodeRunStatusNotificationWebSocketBroadcastEventDTO {
  sessionId: string,
  event: SocketBroadcastEvent.CODE_RUN_STATUS_NOTIFICATION,
  messageTimestamp: number,
  runId: string,
  status: SubmissionRunStatus,
  log: InfoLogCaseStatus
}

export type TestInfoType = {
  sampleCase: boolean,
  caseResultsExecuted: number,
  caseResultsTotal: number,
}

export interface SubmissionRunStatusNotificationWebSocketBroadcastEventDTO {
  event: SocketBroadcastEvent.SUBMISSION_RUN_STATUS_NOTIFICATION,
  sessionId: string,
  messageTimestamp: number,
  submitId: string,
  status: SubmissionRunStatus,
  verdict: ProblemVerdict,
  points: number,
  testInfo?: TestInfoType,
}

export interface UserNotificationWebSocketBroadcastEventDTO {
  event: SocketBroadcastEvent.USER_NOTIFICATION,
  sessionId: string,
  messageTimestamp: number,
  userId: string,
  content: string,
}

// RESPONSE EVENTS

export interface PongWebSocketResponseEventDTO {
  event: SocketResponseEvent.PONG,
  data: PingResponseDTO,
}

export interface CodeRunStatusMessageWebSocketResponseEventDTO {
  event: SocketResponseEvent.CODE_RUN_STATUS_MESSAGE,
  id: string, // runId
  messageTimestamp: number,
  status: SubmissionRunStatus,
  log: InfoLogCaseStatus
}

export interface SubmissionRunStatusMessageWebSocketResponseEventDTO {
  event: SocketResponseEvent.SUBMISSION_RUN_STATUS_MESSAGE,
  id: string, // submitId
  messageTimestamp: number,
  status: SubmissionRunStatus,
  verdict: ProblemVerdict,
  points: number,
  testInfo?: TestInfoType,
}

export interface UserMessageWebSocketResponseEventDTO {
  event: SocketResponseEvent.USER_MESSAGE,
  id: string, // userId
  messageTimestamp: number,
  content: string,
}

export type WebSocketResponseEventDTO =
  PongWebSocketResponseEventDTO
  | CodeRunStatusMessageWebSocketResponseEventDTO
  | SubmissionRunStatusMessageWebSocketResponseEventDTO
  | UserMessageWebSocketResponseEventDTO;
