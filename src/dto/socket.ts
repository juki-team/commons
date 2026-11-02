import {
  ClientId,
  ProblemVerdict,
  SubmissionRunStatus,
  WebSocketResponseEvent,
  WebSocketResponseEventKey,
  WebSocketSubscriptionEvent,
} from '../types';
import {
  Ec2Instance,
  EcsTaskDefinitionSystemSummaryListResponseDTO,
  EcsTaskSystemSummaryListResponseDTO,
  SsmSession,
} from './system';
import { UserCompanyBasicInfoResponseDTO } from './user';

// EVENT SUBSCRIPTIONS

export interface WebsocketSubscription {
  event: WebSocketSubscriptionEvent,
  clientId: ClientId,
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
  | SubscribeUserNotificationWebsocketEventDTO;

export type WebSocketUnsubscribeEventDTO =
  UnsubscribeCodeRunStatusWebSocketEventDTO
  | UnsubscribeSubmissionRunStatusWebSocketEventDTO
  | UnsubscribeGetDataWebSocketEventDTO
  | UnsubscribeProblemCrawledWebSocketEventDTO
  | UnsubscribeSubmissionsCrawlWebSocketEventDTO
  | UnsubscribeContestChangesWebSocketEventDTO
  | UnsubscribeUserNotificationWebSocketEventDTO;

// RESPONSE EVENTS

export interface WebSocketResponse {
  event: WebSocketResponseEvent,
  key: WebSocketResponseEventKey,
  connectionId: string,
  messageTimestamp: number,
}

export type InfoLogCaseStatus = { inputKey: string, out: string, err: string, log: string };

export interface CodeRunStatusWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.CODE_RUN_STATUS,
  runId: string,
  status: SubmissionRunStatus,
  log: InfoLogCaseStatus
}

export type TestInfo = {
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
  testInfo?: TestInfo,
  shouldValidateContest: boolean,
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
  content: Ec2Instance[],
}

export interface SendDataSsmSessionsListWebSocketResponseEventDTO extends SendDataWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.SEND_DATA_SSM_SESSIONS_LIST,
  content: SsmSession[],
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

export interface UserNotificationWebSocketResponseEventDTO extends WebSocketResponse {
  event: WebSocketResponseEvent.USER_NOTIFICATION_SUBMISSION | WebSocketResponseEvent.USER_NOTIFICATION_CONTEST_CLARIFICATION,
  content: any,
}

export interface UserNotificationSubmissionWebSocketResponseEventDTO extends UserNotificationWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.USER_NOTIFICATION_SUBMISSION,
  content: {
    contest: {
      key: string,
      name: string,
      problemIndex: string,
      isFrozen: boolean,
      isQuiet: boolean,
      isUpsolving: boolean
    } | null,
    problem: { key: string, name: string },
    verdict: ProblemVerdict,
    points: number,
    submissionId: string,
  }
}

export interface UserNotificationContestClarificationWebSocketResponseEventDTO extends UserNotificationWebSocketResponseEventDTO {
  event: WebSocketResponseEvent.USER_NOTIFICATION_CONTEST_CLARIFICATION,
  content: {
    contestKey: string,
  }
}

export type WebSocketResponseEventDTO =
  CodeRunStatusWebSocketResponseEventDTO
  | SubmissionRunStatusWebSocketResponseEventDTO
  | UserMessageWebSocketResponseEventDTO
  | SendDataEcsTaskDefinitionListWebSocketResponseEventDTO
  | SendDataEcsTasksListWebSocketResponseEventDTO
  | SendDataEc2InstancesListWebSocketResponseEventDTO
  | SendDataSsmSessionsListWebSocketResponseEventDTO
  | ProblemCrawledWebSocketResponseEventDTO
  | SubmissionsCrawlWebSocketResponseEventDTO
  | ContestChangesWebSocketResponseEventDTO
  | SendDataRunCommandWebSocketResponseEventDTO
  | UserNotificationSubmissionWebSocketResponseEventDTO
  | UserNotificationContestClarificationWebSocketResponseEventDTO;

/**
 * Message sent by the backend producers to the websocket SQS queue:
 * the producer (trusted, with access to the DB) decides the Ably channels where the event is published.
 */
export interface WebSocketChannelsMessageDTO {
  channels: string[],
  event: WebSocketResponseEventDTO,
}

/**
 * Data of a client (tab) in its company presence channel (`CHANNEL_COMPANY_PRESENCE`).
 * Sent by the client: informative only, the identity is the presence member `clientId`.
 */
export interface UserPresenceData {
  href: string,
  uiId: string,
}
