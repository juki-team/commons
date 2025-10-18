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

export interface UserTrackWebSocketEventDTO {
  event: WebSocketActionEvent.USER_TRACK,
  sessionId: ObjectIdType,
  href: string,
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

export interface SubscribeChatCompletionsDataWebSocketEventDTO {
  event: WebSocketActionEvent.SUBSCRIBE_CHAT_COMPLETIONS_DATA,
  sessionId: ObjectIdType,
}

export interface UnsubscribeChatCompletionsDataWebSocketEventDTO {
  event: WebSocketActionEvent.UNSUBSCRIBE_CHAT_COMPLETIONS_DATA,
  sessionId: ObjectIdType,
}

export interface SubscribeSubmissionsCrawlWebSocketEventDTO {
  event: WebSocketActionEvent.SUBSCRIBE_SUBMISSIONS_CRAWL,
  sessionId: ObjectIdType,
  contestKey: string,
  problemKeys: string,
}

export interface UnsubscribeSubmissionsCrawlWebSocketEventDTO {
  event: WebSocketActionEvent.UNSUBSCRIBE_SUBMISSIONS_CRAWL,
  sessionId: ObjectIdType,
  contestKey: string,
  problemKeys: string,
}

export interface SubscribeContestChangesWebSocketEventDTO {
  event: WebSocketActionEvent.SUBSCRIBE_CONTEST_CHANGES,
  sessionId: ObjectIdType,
  contestKey: string,
}

export interface UnsubscribeContestChangesWebSocketEventDTO {
  event: WebSocketActionEvent.UNSUBSCRIBE_CONTEST_CHANGES,
  sessionId: ObjectIdType,
  contestKey: string,
}

export type WebSocketEventDTO =
  PingWebSocketEventDTO
  | UserTrackWebSocketEventDTO
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
  | UnsubscribeProblemCrawledWebSocketEventDTO
  | SubscribeChatCompletionsDataWebSocketEventDTO
  | UnsubscribeChatCompletionsDataWebSocketEventDTO
  | SubscribeSubmissionsCrawlWebSocketEventDTO
  | UnsubscribeSubmissionsCrawlWebSocketEventDTO
  | SubscribeContestChangesWebSocketEventDTO
  | UnsubscribeContestChangesWebSocketEventDTO;

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

export interface WebSocketResponse {
  event: WebSocketResponseEvent,
  key: WebSocketResponseEventKey,
  connectionId: string,
  messageTimestamp: number,
}

export interface PongWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.PONG,
  data: PingResponseDTO,
}

export interface ResponseWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.RESPONSE,
}

export interface CodeRunStatusWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.CODE_RUN_STATUS_MESSAGE,
  runId: string,
  status: SubmissionRunStatus,
  log: InfoLogCaseStatus
}

export interface SubmissionRunStatusWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.SUBMISSION_RUN_STATUS_MESSAGE,
  submitId: string,
  status: SubmissionRunStatus,
  verdict: ProblemVerdict,
  points: number,
  testInfo?: TestInfoType,
}

export interface UserMessageWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.USER_MESSAGE,
  user: UserCompanyBasicInfoResponseDTO,
  content: {
    type: 'SUBMISSION_VERDICT'
    contestName: string,
    problemName: string,
    verdict: ProblemVerdict,
    points: number,
  }
}

export interface SendDataEcsTaskDefinitionListWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.SEND_DATA_ECS_TASK_DEFINITIONS_LIST,
  content: EcsTaskDefinitionSystemSummaryListResponseDTO[],
}

export interface SendDataEc2InstancesListWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.SEND_DATA_EC2_INSTANCES_LIST,
  content: Ec2InstanceType[],
}

export interface SendDataEcsTasksListWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.SEND_DATA_ECS_TASKS_LIST,
  content: EcsTaskSystemSummaryListResponseDTO[],
}

export interface SendDataSsmSessionsListWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.SEND_DATA_SSM_SESSIONS_LIST,
  content: SsmSessionType[],
}

export interface ProblemCrawledWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.PROBLEM_CRAWLED,
  content: { problemKey: string },
}

export interface ChatCompletionsResponseWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.CHAT_COMPLETIONS_RESPONSE,
  sessionId: ObjectIdType,
  content: { choices: [ { index: number, message: { role: string, content: string } } ], rawData: any },
}

export interface SubmissionsCrawlWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.SUBMISSIONS_CRAWL,
  content: {
    contestKey: string,
    problemKeys: string,
    judge: string,
    userKey: string,
    submissionsCount: number,
    submitId: string,
    isNewSubmission: boolean,
  },
}

export interface ContestChangesWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.CONTEST_CHANGES,
  content: {
    contestKey: string,
  },
}

export type WebSocketResponseEventDTO =
  PongWebSocketResponseEventDTO
  | ResponseWebSocketResponseEventDTO
  | CodeRunStatusWebSocketResponseEventDTO
  | SubmissionRunStatusWebSocketResponseEventDTO
  | UserMessageWebSocketResponseEventDTO
  | SendDataEcsTaskDefinitionListWebSocketResponseEventDTO
  | SendDataEcsTasksListWebSocketResponseEventDTO
  | SendDataEc2InstancesListWebSocketResponseEventDTO
  | SendDataSsmSessionsListWebSocketResponseEventDTO
  | ProblemCrawledWebSocketResponseEventDTO
  | ChatCompletionsResponseWebSocketResponseEventDTO
  | SubmissionsCrawlWebSocketResponseEventDTO
  | ContestChangesWebSocketResponseEventDTO;
