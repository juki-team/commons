import {
  ClientIdType,
  DeviceType,
  ProblemVerdict,
  SubmissionRunStatus,
  WebSocketMessageEvent,
  WebSocketResponseEvent,
  WebSocketResponseEventKey,
  WebSocketSubscriptionEvent,
} from '../types';
import { NotificationType } from '../types/notification';
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

export interface ClientTrackLocationWebSocketEventDTO extends WebsocketMessage {
  event: WebSocketMessageEvent.CLIENT_TRACK_LOCATION,
  href: string,
}

export interface ClientTrackScreenshotWebSocketEventDTO extends WebsocketMessage {
  event: WebSocketMessageEvent.CLIENT_TRACK_SCREENSHOT,
  screenshot: string,
}

export interface ClientTrackDeviceWebSocketEventDTO extends WebsocketMessage {
  event: WebSocketMessageEvent.CLIENT_TRACK_DEVICE,
  device: DeviceType,
}

export interface ChatCompletionsWebSocketEventDTO extends WebsocketMessage {
  event: WebSocketMessageEvent.CHAT_COMPLETIONS,
  chatAiId: string,
  content: string,
}

export type WebSocketMessageEventDTO =
  PingWebSocketEventDTO
  | ClientTrackLocationWebSocketEventDTO
  | ClientTrackScreenshotWebSocketEventDTO
  | ClientTrackDeviceWebSocketEventDTO
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

export interface SubscribeClientTrackWebSocketEventDTO extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.SUBSCRIBE_CLIENT_TRACK,
}

export interface UnsubscribeClientTrackWebSocketEventDTO extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.UNSUBSCRIBE_CLIENT_TRACK,
}

export interface SubscribeUserNotificationWebsocketEventDTO extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.SUBSCRIBE_USER_NOTIFICATION,
  userKey: string,
}

export interface UnsubscribeUserNotificationWebSocketEventDTO extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.UNSUBSCRIBE_USER_NOTIFICATION,
  userKey: string,
}

export type WebSocketSubscribeEventDTO =
  SubscribeCodeRunStatusWebSocketEventDTO
  | SubscribeSubmissionRunStatusWebSocketEventDTO
  | SubscribeGetDataWebSocketEventDTO
  | SubscribeProblemCrawledWebSocketEventDTO
  | SubscribeSubmissionsCrawlWebSocketEventDTO
  | SubscribeContestChangesWebSocketEventDTO
  | SubscribeClientTrackWebSocketEventDTO
  | SubscribeUserNotificationWebsocketEventDTO;

export type WebSocketUnsubscribeEventDTO =
  UnsubscribeCodeRunStatusWebSocketEventDTO
  | UnsubscribeSubmissionRunStatusWebSocketEventDTO
  | UnsubscribeGetDataWebSocketEventDTO
  | UnsubscribeProblemCrawledWebSocketEventDTO
  | UnsubscribeSubmissionsCrawlWebSocketEventDTO
  | UnsubscribeContestChangesWebSocketEventDTO
  | UnsubscribeClientTrackWebSocketEventDTO
  | UnsubscribeUserNotificationWebSocketEventDTO;

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

export type InfoLogCaseStatus = { inputKey: string, out: string, err: string, log: string };

export interface CodeRunStatusWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.CODE_RUN_STATUS,
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
  event: WebSocketResponseEvent.SUBMISSION_RUN_STATUS,
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

export interface SendDataClientTrackWebSocketResponseEventDTO extends SendDataWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.SEND_DATA_CLIENT_TRACK,
  content: {
    location?: string,
    screenshot?: string,
    device?: DeviceType,
  },
}

export interface SenDataChatCompletionsWebSocketResponseEventDTO extends SendDataWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.SEND_DATA_CHAT_COMPLETIONS,
  content: { choices: [ { index: number, message: { role: string, content: string } } ], rawData: any },
}

export interface ProblemCrawledWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.PROBLEM_CRAWLED,
  content: { problemKey: string },
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

export interface ClientTrackWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.CLIENT_TRACK,
  location: boolean,
  screenshot: boolean,
  device: boolean,
}

export interface UserNotificationWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.USER_NOTIFICATION_SUBMISSION | WebSocketResponseEvent.USER_NOTIFICATION_CONTEST_CLARIFICATION,
  type: NotificationType,
  tile: string,
  message: string,
  href: string,
}

export interface UserNotificationSubmissionWebSocketResponseEventDTO extends UserNotificationWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.USER_NOTIFICATION_SUBMISSION,
  submissionId: string,
}

export interface UserNotificationContestClarificationWebSocketResponseEventDTO extends UserNotificationWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.USER_NOTIFICATION_CONTEST_CLARIFICATION,
  contestKey: string,
}

export type WebSocketResponseEventDTO =
  PongWebSocketResponseEventDTO
  | CodeRunStatusWebSocketResponseEventDTO
  | SubmissionRunStatusWebSocketResponseEventDTO
  | UserMessageWebSocketResponseEventDTO
  | SendDataEcsTaskDefinitionListWebSocketResponseEventDTO
  | SendDataEcsTasksListWebSocketResponseEventDTO
  | SendDataEc2InstancesListWebSocketResponseEventDTO
  | SendDataSsmSessionsListWebSocketResponseEventDTO
  | ProblemCrawledWebSocketResponseEventDTO
  | SenDataChatCompletionsWebSocketResponseEventDTO
  | SubmissionsCrawlWebSocketResponseEventDTO
  | ContestChangesWebSocketResponseEventDTO
  | SendDataRunCommandWebSocketResponseEventDTO
  | SendDataClientTrackWebSocketResponseEventDTO
  | ClientTrackWebSocketResponseEventDTO
  | UserNotificationSubmissionWebSocketResponseEventDTO
  | UserNotificationContestClarificationWebSocketResponseEventDTO;
