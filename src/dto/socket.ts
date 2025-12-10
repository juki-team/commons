import {
  ClientIdType,
  ObjectIdType,
  ProblemVerdict,
  SubmissionRunStatus,
  WebSocketMessageEvent,
  WebSocketResponseEvent,
  WebSocketResponseEventKey,
  WebSocketSubscriptionEvent,
} from '../types';
import {
  Ec2InstanceType,
  EcsTaskDefinitionSystemSummaryListResponseDTO,
  EcsTaskSystemSummaryListResponseDTO,
  SsmSessionType,
} from './system';
import { PingResponseDTO, UserCompanyBasicInfoResponseDTO } from './user';

// EVENT MESSAGES
interface WebsocketMessage {
  event: WebSocketMessageEvent,
  clientId: ClientIdType,
}

export interface PingWebSocketEventDTO extends WebsocketMessage {
  event: WebSocketMessageEvent.PING,
}

export interface UserTrackWebSocketEventDTO extends WebsocketMessage {
  event: WebSocketMessageEvent.USER_TRACK,
  href: string,
}

export interface UserTrackScreenshotWebSocketEventDTO extends WebsocketMessage {
  event: WebSocketMessageEvent.USER_TRACK_SCREENSHOT,
  href: string,
  screenshot: string,
}

export interface ChatCompletionsWebSocketEventDTO extends WebsocketMessage {
  event: WebSocketMessageEvent.CHAT_COMPLETIONS,
  chatAiId: string,
  content: string,
}

export type WebSocketMessageEventDTO =
  PingWebSocketEventDTO
  | UserTrackWebSocketEventDTO
  | UserTrackScreenshotWebSocketEventDTO
  | ChatCompletionsWebSocketEventDTO;

// EVENT SUBSCRIPTIONS

export interface WebsocketSubscription {
  event: WebSocketSubscriptionEvent,
  clientId: ClientIdType,
}

export interface SubscribeCodeRunStatusWebSocketEventDTO extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.SUBSCRIBE_CODE_RUN_STATUS,
  runId: string,
}

export interface UnsubscribeCodeRunStatusWebSocketEventDTO extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.UNSUBSCRIBE_CODE_RUN_STATUS,
  runId: string,
}

export interface SubscribeSubmissionRunStatusWebSocketEventDTO extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.SUBSCRIBE_SUBMISSION_RUN_STATUS,
  submitId: string,
}

export interface UnsubscribeSubmissionRunStatusWebSocketEventDTO extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.UNSUBSCRIBE_SUBMISSION_RUN_STATUS,
  submitId: string,
}

export interface SubscribeGetDataWebSocketEventDTO extends WebsocketSubscription {
  dataId: string,
  event: WebSocketSubscriptionEvent.SUBSCRIBE_GET_DATA,
}

export interface UnsubscribeGetDataWebSocketEventDTO extends WebsocketSubscription {
  dataId: string,
  event: WebSocketSubscriptionEvent.UNSUBSCRIBE_GET_DATA,
}

export interface SubscribeProblemCrawledWebSocketEventDTO extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.SUBSCRIBE_PROBLEM_CRAWLED,
  problemKey: string,
}

export interface UnsubscribeProblemCrawledWebSocketEventDTO extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.UNSUBSCRIBE_PROBLEM_CRAWLED,
  problemKey: string,
}

export interface SubscribeChatCompletionsDataWebSocketEventDTO extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.SUBSCRIBE_CHAT_COMPLETIONS_DATA,
  chatAiId: string,
}

export interface UnsubscribeChatCompletionsDataWebSocketEventDTO extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.UNSUBSCRIBE_CHAT_COMPLETIONS_DATA,
  chatAiId: string,
}

export interface SubscribeSubmissionsCrawlWebSocketEventDTO extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.SUBSCRIBE_SUBMISSIONS_CRAWL,
  contestKey: string,
  problemKeys: string,
}

export interface UnsubscribeSubmissionsCrawlWebSocketEventDTO extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.UNSUBSCRIBE_SUBMISSIONS_CRAWL,
  contestKey: string,
  problemKeys: string,
}

export interface SubscribeContestChangesWebSocketEventDTO extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.SUBSCRIBE_CONTEST_CHANGES,
  contestKey: string,
}

export interface UnsubscribeContestChangesWebSocketEventDTO extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.UNSUBSCRIBE_CONTEST_CHANGES,
  contestKey: string,
}

export type WebSocketSubscribeEventDTO =
  SubscribeCodeRunStatusWebSocketEventDTO
  | SubscribeSubmissionRunStatusWebSocketEventDTO
  | SubscribeGetDataWebSocketEventDTO
  | SubscribeProblemCrawledWebSocketEventDTO
  | SubscribeChatCompletionsDataWebSocketEventDTO
  | SubscribeSubmissionsCrawlWebSocketEventDTO
  | SubscribeContestChangesWebSocketEventDTO;

export type WebSocketUnsubscribeEventDTO =
  UnsubscribeCodeRunStatusWebSocketEventDTO
  | UnsubscribeSubmissionRunStatusWebSocketEventDTO
  | UnsubscribeGetDataWebSocketEventDTO
  | UnsubscribeProblemCrawledWebSocketEventDTO
  | UnsubscribeChatCompletionsDataWebSocketEventDTO
  | UnsubscribeSubmissionsCrawlWebSocketEventDTO
  | UnsubscribeContestChangesWebSocketEventDTO;

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

export type InfoLogCaseStatus = { inputKey: string, out: string, err: string, log: string };

export interface CodeRunStatusWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.CODE_RUN_STATUS_MESSAGE,
  runId: string,
  status: SubmissionRunStatus,
  log: InfoLogCaseStatus
}

export type TestInfoType = {
  sampleCase: boolean,
  caseResultsExecuted: number,
  caseResultsTotal: number,
}

export interface SubmissionRunStatusWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.SUBMISSION_RUN_STATUS_MESSAGE,
  submitId: string,
  status: SubmissionRunStatus,
  verdict: ProblemVerdict,
  points: number,
  testInfo?: TestInfoType,
  shouldValidateByContestId?: string,
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

export interface SendDataWebSocketResponseEventDTO extends WebSocketResponse {
  dataId: string,
  content: any,
}

export interface SendDataEcsTaskDefinitionListWebSocketResponseEventDTO extends SendDataWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.SEND_DATA_ECS_TASK_DEFINITIONS_LIST,
  content: EcsTaskDefinitionSystemSummaryListResponseDTO[],
}

export interface SendDataEcsTasksListWebSocketResponseEventDTO extends SendDataWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.SEND_DATA_ECS_TASKS_LIST,
  content: EcsTaskSystemSummaryListResponseDTO[],
}

export interface SendDataEc2InstancesListWebSocketResponseEventDTO extends SendDataWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.SEND_DATA_EC2_INSTANCES_LIST,
  content: Ec2InstanceType[],
}

export interface SendDataSsmSessionsListWebSocketResponseEventDTO extends SendDataWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.SEND_DATA_SSM_SESSIONS_LIST,
  content: SsmSessionType[],
}

export interface SendDataRunCommandWebSocketResponseEventDTO extends SendDataWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.SEND_DATA_RUN_COMMAND,
  content: {
    testCaseOutContent: string,
    testCaseErrorContent: string,
    testCaseLogContent: string,
  },
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
  | ContestChangesWebSocketResponseEventDTO
  | SendDataRunCommandWebSocketResponseEventDTO;
