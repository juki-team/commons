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
  event: SocketBroadcastEvent.CODE_RUN_STATUS,
  messageTimestamp: number,
  runId: string,
  sessionId: string,
  status: SubmissionRunStatus,
  log: InfoLogCaseStatus
}

export interface SocketEventCodeRunStatusResponseDTO {
  event: SocketEvent.CODE_RUN_STATUS,
  id: string, // runId
  messageTimestamp: number,
  status: SubmissionRunStatus,
  log: InfoLogCaseStatus
}

export type TestInfoType = {
  sampleCase: boolean,
  caseResultsExecuted: number,
  caseResultsTotal: number,
}

export interface SocketBroadcastEventSubmissionStatusDTO {
  event: SocketBroadcastEvent.SUBMISSION_RUN_STATUS,
  messageTimestamp: number,
  submitId: string,
  sessionId: string,
  status: SubmissionRunStatus,
  verdict: ProblemVerdict,
  points: number,
  testInfo?: TestInfoType,
}

export interface SocketEventSubmissionStatusResponseDTO {
  event: SocketEvent.SUBMISSION_RUN_STATUS,
  id: string, // submitId
  messageTimestamp: number,
  status: SubmissionRunStatus,
  verdict: ProblemVerdict,
  points: number,
  testInfo?: TestInfoType,
}

export interface SocketBroadcastEventUserMessageDTO {
  event: SocketBroadcastEvent.USER_MESSAGE,
  messageTimestamp: number,
  userId: string,
  content: string,
}

export interface SocketEventUserMessageResponseDTO {
  event: SocketEvent.USER_MESSAGE,
  id: string, // userId
  messageTimestamp: number,
  content: string,
}

export type SocketEventsResponseDTO =
  SocketEventCodeRunStatusResponseDTO
  | SocketEventSubmissionStatusResponseDTO
  | SocketEventUserMessageResponseDTO;
