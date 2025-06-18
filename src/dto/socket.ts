import {
  ObjectIdType,
  ProblemVerdict,
  SubmissionRunStatus,
  WebSocketActionEvent,
  WebSocketBroadcastEvent,
  WebSocketResponseEvent,
  WebSocketResponseEventKey,
} from '../types';
import {
  Ec2InstanceType,
  EcsTaskDefinitionSystemSummaryListResponseDTO,
  EcsTaskSystemSummaryListResponseDTO,
  SsmSessionType,
} from './system';
import { PingResponseDTO, UserCompanyBasicInfoResponseDTO } from './user';

// EVENT ACTIONS
export interface PingWebSocketEventDTO {
  event: WebSocketActionEvent.PING,
  sessionId: ObjectIdType,
}

export interface AuthenticateWebSocketEventDTO {
  event: WebSocketActionEvent.AUTHENTICATE,
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

export interface SubscribeSenDataEcsTaskDefinitionsListWebSocketEventDTO {
  event: WebSocketActionEvent.SUBSCRIBE_SEND_DATA_ECS_TASK_DEFINITIONS_LIST,
  sessionId: ObjectIdType,
}

export interface UnsubscribeSenDataEcsTaskDefinitionsListWebSocketEventDTO {
  event: WebSocketActionEvent.UNSUBSCRIBE_SEND_DATA_ECS_TASK_DEFINITIONS_LIST,
  sessionId: ObjectIdType,
}

export interface SubscribeSenDataEcsTasksListWebSocketEventDTO {
  event: WebSocketActionEvent.SUBSCRIBE_SEND_DATA_ECS_TASKS_LIST,
  sessionId: ObjectIdType,
}

export interface UnsubscribeSenDataEcsTasksListWebSocketEventDTO {
  event: WebSocketActionEvent.UNSUBSCRIBE_SEND_DATA_ECS_TASKS_LIST,
  sessionId: ObjectIdType,
}

export interface SubscribeSenDataEc2InstancesListWebSocketEventDTO {
  event: WebSocketActionEvent.SUBSCRIBE_SEND_DATA_EC2_INSTANCES_LIST,
  sessionId: ObjectIdType,
}

export interface UnsubscribeSenDataEc2InstancesListWebSocketEventDTO {
  event: WebSocketActionEvent.UNSUBSCRIBE_SEND_DATA_EC2_INSTANCES_LIST,
  sessionId: ObjectIdType,
}

export interface SubscribeSenDataSsmSessionsListWebSocketEventDTO {
  event: WebSocketActionEvent.SUBSCRIBE_SEND_DATA_SSM_SESSIONS_LIST,
  sessionId: ObjectIdType,
}

export interface UnsubscribeSenDataSsmSessionsListWebSocketEventDTO {
  event: WebSocketActionEvent.UNSUBSCRIBE_SEND_DATA_SSM_SESSIONS_LIST,
  sessionId: ObjectIdType,
}

export interface SubscribeProblemCrawledWebSocketEventDTO {
  event: WebSocketActionEvent.SUBSCRIBE_PROBLEM_CRAWLED,
  sessionId: ObjectIdType,
  problemKey: string,
}

export interface UnsubscribeProblemCrawledWebSocketEventDTO {
  event: WebSocketActionEvent.UNSUBSCRIBE_PROBLEM_CRAWLED,
  sessionId: ObjectIdType,
  problemKey: string,
}

export type WebSocketEventDTO =
  PingWebSocketEventDTO
  | AuthenticateWebSocketEventDTO
  | SubscribeCodeRunStatusWebSocketEventDTO
  | UnsubscribeCodeRunStatusWebSocketEventDTO
  | SubscribeSubmissionRunStatusWebSocketEventDTO
  | UnsubscribeSubmissionRunStatusWebSocketEventDTO
  | SubscribeSenDataEcsTaskDefinitionsListWebSocketEventDTO
  | UnsubscribeSenDataEcsTaskDefinitionsListWebSocketEventDTO
  | SubscribeSenDataEcsTasksListWebSocketEventDTO
  | UnsubscribeSenDataEcsTasksListWebSocketEventDTO
  | SubscribeSenDataEc2InstancesListWebSocketEventDTO
  | UnsubscribeSenDataEc2InstancesListWebSocketEventDTO
  | SubscribeSenDataSsmSessionsListWebSocketEventDTO
  | UnsubscribeSenDataSsmSessionsListWebSocketEventDTO
  | SubscribeProblemCrawledWebSocketEventDTO
  | UnsubscribeProblemCrawledWebSocketEventDTO;

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

export interface ResponseWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.RESPONSE,
  key: WebSocketResponseEventKey,
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

export interface SendDataEcsTaskDefinitionListWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.SEND_DATA_ECS_TASK_DEFINITIONS_LIST,
  key: WebSocketResponseEventKey,
  messageTimestamp: number,
  content: EcsTaskDefinitionSystemSummaryListResponseDTO[],
}

export interface SendDataEc2InstancesListWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.SEND_DATA_EC2_INSTANCES_LIST,
  key: WebSocketResponseEventKey,
  messageTimestamp: number,
  content: Ec2InstanceType[],
}

export interface SendDataEcsTasksListWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.SEND_DATA_ECS_TASKS_LIST,
  key: WebSocketResponseEventKey,
  messageTimestamp: number,
  content: EcsTaskSystemSummaryListResponseDTO[],
}

export interface SendDataSsmSessionsListWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.SEND_DATA_SSM_SESSIONS_LIST,
  key: WebSocketResponseEventKey,
  messageTimestamp: number,
  content: SsmSessionType[],
}

export interface ProblemCrawledWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.PROBLEM_CRAWLED,
  key: WebSocketResponseEventKey,
  messageTimestamp: number,
  content: { problemKey: string },
}

export type WebSocketResponseEventDTO =
  PongWebSocketResponseEventDTO
  | ResponseWebSocketResponseEventDTO
  | CodeRunStatusMessageWebSocketResponseEventDTO
  | SubmissionRunStatusMessageWebSocketResponseEventDTO
  | UserMessageWebSocketResponseEventDTO
  | SendDataEcsTaskDefinitionListWebSocketResponseEventDTO
  | SendDataEcsTasksListWebSocketResponseEventDTO
  | SendDataEc2InstancesListWebSocketResponseEventDTO
  | SendDataSsmSessionsListWebSocketResponseEventDTO
  | ProblemCrawledWebSocketResponseEventDTO;
