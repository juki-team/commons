import {
  ObjectIdType,
  ProblemVerdict,
  SubmissionRunStatus,
  WebSocketActionEvent,
  WebSocketBroadcastEvent,
  WebSocketResponseEvent,
  WebSocketResponseEventKey,
} from '../types';
import { PingResponseDTO, UserCompanyBasicInfoResponseDTO } from './user';

// EVENT ACTIONS
export interface PingWebSocketEventDTO {
  event: WebSocketActionEvent.PING,
  sessionId: ObjectIdType,
}

export interface SubscribeCodeRunStatusWebSocketEventDTO {
  event: WebSocketActionEvent.SUBSCRIBE_CODE_RUN_STATUS,
  sessionId: ObjectIdType,
  runId: string,
}

export interface UnsubscribeCodeRunStatusWebSocketEventDTO {
  event: WebSocketActionEvent.UNSUBSCRIBE_CODE_RUN_STATUS,
  sessionId: ObjectIdType,
  runId: string,
}

export interface SubscribeSubmissionRunStatusWebSocketEventDTO {
  event: WebSocketActionEvent.SUBSCRIBE_SUBMISSION_RUN_STATUS,
  sessionId: ObjectIdType,
  submitId: string,
}

export interface UnsubscribeSubmissionRunStatusWebSocketEventDTO {
  event: WebSocketActionEvent.UNSUBSCRIBE_SUBMISSION_RUN_STATUS,
  sessionId: ObjectIdType,
  submitId: string,
}

export type WebSocketEventDTO =
  PingWebSocketEventDTO
  | SubscribeCodeRunStatusWebSocketEventDTO
  | UnsubscribeCodeRunStatusWebSocketEventDTO
  | SubscribeSubmissionRunStatusWebSocketEventDTO
  | UnsubscribeSubmissionRunStatusWebSocketEventDTO;

// BROADCAST EVENTS

export interface PingWebSocketBroadcastEventDTO {
  event: WebSocketBroadcastEvent.PING,
}

export type InfoLogCaseStatus = { inputKey: string, out: string, err: string, log: string };

export interface CodeRunStatusNotificationWebSocketBroadcastEventDTO {
  sessionId: ObjectIdType,
  event: WebSocketBroadcastEvent.CODE_RUN_STATUS_NOTIFICATION,
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
  event: WebSocketBroadcastEvent.SUBMISSION_RUN_STATUS_NOTIFICATION,
  sessionId: ObjectIdType,
  messageTimestamp: number,
  submitId: string,
  status: SubmissionRunStatus,
  verdict: ProblemVerdict,
  points: number,
  testInfo?: TestInfoType,
}

export interface UserNotificationWebSocketBroadcastEventDTO {
  event: WebSocketBroadcastEvent.USER_NOTIFICATION,
  sessionId: ObjectIdType,
  messageTimestamp: number,
  userId: string,
  content: string,
}

export type WebSocketBroadcastEventDTO = PingWebSocketBroadcastEventDTO
  | CodeRunStatusNotificationWebSocketBroadcastEventDTO
  | SubmissionRunStatusNotificationWebSocketBroadcastEventDTO
  | UserNotificationWebSocketBroadcastEventDTO;

// RESPONSE EVENTS

export interface PongWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.PONG,
  key: WebSocketResponseEventKey,
  connectionId: string,
  data: PingResponseDTO,
}

export interface CodeRunStatusMessageWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.CODE_RUN_STATUS_MESSAGE,
  key: WebSocketResponseEventKey,
  runId: string,
  messageTimestamp: number,
  status: SubmissionRunStatus,
  log: InfoLogCaseStatus
}

export interface SubmissionRunStatusMessageWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.SUBMISSION_RUN_STATUS_MESSAGE,
  key: WebSocketResponseEventKey,
  submitId: string,
  messageTimestamp: number,
  status: SubmissionRunStatus,
  verdict: ProblemVerdict,
  points: number,
  testInfo?: TestInfoType,
}

export interface UserMessageWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.USER_MESSAGE,
  key: WebSocketResponseEventKey,
  user: UserCompanyBasicInfoResponseDTO,
  messageTimestamp: number,
  content: {
    type: 'SUBMISSION_VERDICT'
    contestName: string,
    problemName: string,
    verdict: ProblemVerdict,
    points: number,
  }
}

export type WebSocketResponseEventDTO =
  PongWebSocketResponseEventDTO
  | CodeRunStatusMessageWebSocketResponseEventDTO
  | SubmissionRunStatusMessageWebSocketResponseEventDTO
  | UserMessageWebSocketResponseEventDTO;
