import { ProblemVerdict, SocketBroadcastEvent, SocketEvent, SubmissionRunStatus } from '../types';

export interface SocketSubscribeEventDTO {
  action: 'subscribe',
  event: SocketEvent,
  id: string,
  sessionId: string,
}

export interface SocketUnsubscribeEventDTO {
  action: 'unsubscribe',
  event: SocketEvent,
  id: string,
  sessionId: string,
}

export type InfoLogCaseStatus = { inputKey: string, out: string, err: string, log: string };

export interface SocketBroadcastEventCodeRunStatusDTO {
  type: SocketBroadcastEvent.CODE_RUN_STATUS,
  messageTimestamp: number,
  runId: string,
  sessionId: string,
  status: SubmissionRunStatus,
  log: InfoLogCaseStatus
}

export interface SocketEventCodeRunStatusResponseDTO {
  type: SocketEvent.CODE_RUN_STATUS,
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

export interface SocketBroadcastEventSubmissionStatusDTO {
  type: SocketBroadcastEvent.SUBMISSION_RUN_STATUS,
  messageTimestamp: number,
  submitId: string,
  sessionId: string,
  status: SubmissionRunStatus,
  verdict: ProblemVerdict,
  points: number,
  testInfo?: TestInfoType,
}

export interface SocketEventSubmissionStatusResponseDTO {
  type: SocketEvent.SUBMISSION_RUN_STATUS,
  messageTimestamp: number,
  submitId: string,
  status: SubmissionRunStatus,
  verdict: ProblemVerdict,
  points: number,
  testInfo?: TestInfoType,
}

export interface SocketBroadcastEventUserMessageDTO {
  type: SocketBroadcastEvent.USER_MESSAGE,
  messageTimestamp: number,
  userId: string,
  content: string,
}

export interface SocketEventUserMessageResponseDTO {
  type: SocketEvent.USER_MESSAGE,
  messageTimestamp: number,
  userId: string,
  content: string,
}
