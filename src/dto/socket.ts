import {
  ClientId,
  Ec2Instance,
  InfoLogCaseStatus,
  ProblemVerdict,
  SsmSession,
  SubmissionRunStatus,
  TestInfo,
  WebSocketResponseEvent,
  WebSocketResponseEventKey,
  WebSocketSubscriptionEvent,
} from '../types';
import { EcsTaskDefinitionSystemSummaryListResponseDto, EcsTaskSystemSummaryListResponseDto } from './system';
import { UserOrganizationBasicInfoResponseDto } from './user';

// EVENT SUBSCRIPTIONS

export interface WebsocketSubscription {
  event: WebSocketSubscriptionEvent,
  clientId: ClientId,
}

export interface SubscribeCodeRunStatusWebSocketEventDto extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.SUBSCRIBE_CODE_RUN_STATUS,
  runId: string,
}

export interface UnsubscribeCodeRunStatusWebSocketEventDto extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.UNSUBSCRIBE_CODE_RUN_STATUS,
  runId: string,
}

export interface SubscribeSubmissionRunStatusWebSocketEventDto extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.SUBSCRIBE_SUBMISSION_RUN_STATUS,
  submitId: string,
}

export interface UnsubscribeSubmissionRunStatusWebSocketEventDto extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.UNSUBSCRIBE_SUBMISSION_RUN_STATUS,
  submitId: string,
}

export interface SubscribeGetDataWebSocketEventDto extends WebsocketSubscription {
  dataId: string,
  event: WebSocketSubscriptionEvent.SUBSCRIBE_GET_DATA,
}

export interface UnsubscribeGetDataWebSocketEventDto extends WebsocketSubscription {
  dataId: string,
  event: WebSocketSubscriptionEvent.UNSUBSCRIBE_GET_DATA,
}

export interface SubscribeProblemCrawledWebSocketEventDto extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.SUBSCRIBE_PROBLEM_CRAWLED,
  problemKey: string,
}

export interface UnsubscribeProblemCrawledWebSocketEventDto extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.UNSUBSCRIBE_PROBLEM_CRAWLED,
  problemKey: string,
}

export interface SubscribeSubmissionsCrawlWebSocketEventDto extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.SUBSCRIBE_SUBMISSIONS_CRAWL,
  contestKey: string,
  problemKeys: string,
}

export interface UnsubscribeSubmissionsCrawlWebSocketEventDto extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.UNSUBSCRIBE_SUBMISSIONS_CRAWL,
  contestKey: string,
  problemKeys: string,
}

export interface SubscribeContestChangesWebSocketEventDto extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.SUBSCRIBE_CONTEST_CHANGES,
  contestKey: string,
}

export interface UnsubscribeContestChangesWebSocketEventDto extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.UNSUBSCRIBE_CONTEST_CHANGES,
  contestKey: string,
}

export interface SubscribeUserNotificationWebsocketEventDto extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.SUBSCRIBE_USER_NOTIFICATION,
  userKey: string,
}

export interface UnsubscribeUserNotificationWebSocketEventDto extends WebsocketSubscription {
  event: WebSocketSubscriptionEvent.UNSUBSCRIBE_USER_NOTIFICATION,
  userKey: string,
}

/**
 * Scope of a submissions table: the judging start/end of the submissions of one problem, one contest or one user.
 * Exactly one of the keys is set.
 */
export type SubmissionsJudgingScope = { problemKey: string } | { contestKey: string } | { userKey: string };

export type SubscribeSubmissionsJudgingWebSocketEventDto = WebsocketSubscription & {
  event: WebSocketSubscriptionEvent.SUBSCRIBE_SUBMISSIONS_JUDGING,
} & SubmissionsJudgingScope;

export type UnsubscribeSubmissionsJudgingWebSocketEventDto = WebsocketSubscription & {
  event: WebSocketSubscriptionEvent.UNSUBSCRIBE_SUBMISSIONS_JUDGING,
} & SubmissionsJudgingScope;

export type WebSocketSubscribeEventDto =
  SubscribeCodeRunStatusWebSocketEventDto
  | SubscribeSubmissionRunStatusWebSocketEventDto
  | SubscribeGetDataWebSocketEventDto
  | SubscribeProblemCrawledWebSocketEventDto
  | SubscribeSubmissionsCrawlWebSocketEventDto
  | SubscribeContestChangesWebSocketEventDto
  | SubscribeUserNotificationWebsocketEventDto
  | SubscribeSubmissionsJudgingWebSocketEventDto;

export type WebSocketUnsubscribeEventDto =
  UnsubscribeCodeRunStatusWebSocketEventDto
  | UnsubscribeSubmissionRunStatusWebSocketEventDto
  | UnsubscribeGetDataWebSocketEventDto
  | UnsubscribeProblemCrawledWebSocketEventDto
  | UnsubscribeSubmissionsCrawlWebSocketEventDto
  | UnsubscribeContestChangesWebSocketEventDto
  | UnsubscribeUserNotificationWebSocketEventDto
  | UnsubscribeSubmissionsJudgingWebSocketEventDto;

// RESPONSE EVENTS

export interface WebSocketResponse {
  event: WebSocketResponseEvent,
  key: WebSocketResponseEventKey,
  connectionId: string,
  createdAt: number,
}

export interface CodeRunStatusWebSocketResponseEventDto extends WebSocketResponse {
  event: WebSocketResponseEvent.CODE_RUN_STATUS,
  runId: string,
  status: SubmissionRunStatus,
  log: InfoLogCaseStatus
}

export interface SubmissionRunStatusWebSocketResponseEventDto extends WebSocketResponse {
  event: WebSocketResponseEvent.SUBMISSION_RUN_STATUS,
  submitId: string,
  status: SubmissionRunStatus,
  verdict: ProblemVerdict,
  points: number,
  testInfo?: TestInfo,
  shouldValidateContest: boolean,
}

/**
 * Start (`judging: true`, status RECEIVED) and end (`judging: false`, status COMPLETED / FAILED) of the judging of a
 * submission, also on rejudges. Published on the channels of the tables that list it (problem / contest / user), so a
 * table listens to one channel and only attaches `CHANNEL_SUBMISSION` (the case by case progress) of the submissions
 * on screen that are being judged. The case by case events keep arriving as `SubmissionRunStatusWebSocketResponseEventDto`.
 */
export interface SubmissionJudgingWebSocketResponseEventDto extends WebSocketResponse {
  event: WebSocketResponseEvent.SUBMISSION_JUDGING,
  submitId: string,
  problemKey: string,
  contestKey: string | null,
  userKey: string,
  judging: boolean,
  status: SubmissionRunStatus,
  verdict: ProblemVerdict,
  points: number,
}

export interface UserMessageWebSocketResponseEventDto extends WebSocketResponse {
  event: WebSocketResponseEvent.USER_MESSAGE,
  user: UserOrganizationBasicInfoResponseDto,
  content: {
    type: 'SUBMISSION_VERDICT'
    contestName: string,
    problemName: string,
    verdict: ProblemVerdict,
    points: number,
  }
}

export interface SendDataWebSocketResponseEventDto extends WebSocketResponse {
  dataId: string,
  content: any,
}

export interface SendDataEcsTaskDefinitionListWebSocketResponseEventDto extends SendDataWebSocketResponseEventDto {
  event: WebSocketResponseEvent.SEND_DATA_ECS_TASK_DEFINITIONS_LIST,
  content: EcsTaskDefinitionSystemSummaryListResponseDto[],
}

export interface SendDataEcsTasksListWebSocketResponseEventDto extends SendDataWebSocketResponseEventDto {
  event: WebSocketResponseEvent.SEND_DATA_ECS_TASKS_LIST,
  content: EcsTaskSystemSummaryListResponseDto[],
}

export interface SendDataEc2InstancesListWebSocketResponseEventDto extends SendDataWebSocketResponseEventDto {
  event: WebSocketResponseEvent.SEND_DATA_EC2_INSTANCES_LIST,
  content: Ec2Instance[],
}

export interface SendDataSsmSessionsListWebSocketResponseEventDto extends SendDataWebSocketResponseEventDto {
  event: WebSocketResponseEvent.SEND_DATA_SSM_SESSIONS_LIST,
  content: SsmSession[],
}

export interface SendDataRunCommandWebSocketResponseEventDto extends SendDataWebSocketResponseEventDto {
  event: WebSocketResponseEvent.SEND_DATA_RUN_COMMAND,
  content: {
    testCaseOutContent: string,
    testCaseErrorContent: string,
    testCaseLogContent: string,
  },
}

export interface ProblemCrawledWebSocketResponseEventDto extends WebSocketResponse {
  event: WebSocketResponseEvent.PROBLEM_CRAWLED,
  content: { problemKey: string },
}

export interface SubmissionsCrawlWebSocketResponseEventDto extends WebSocketResponse {
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

export interface ContestChangesWebSocketResponseEventDto extends WebSocketResponse {
  event: WebSocketResponseEvent.CONTEST_CHANGES,
  content: {
    contestKey: string,
  },
}

export interface UserNotificationWebSocketResponseEventDto extends WebSocketResponse {
  event: WebSocketResponseEvent.USER_NOTIFICATION_SUBMISSION | WebSocketResponseEvent.USER_NOTIFICATION_CONTEST_CLARIFICATION,
  content: any,
}

export interface UserNotificationSubmissionWebSocketResponseEventDto extends UserNotificationWebSocketResponseEventDto {
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

export interface UserNotificationContestClarificationWebSocketResponseEventDto extends UserNotificationWebSocketResponseEventDto {
  event: WebSocketResponseEvent.USER_NOTIFICATION_CONTEST_CLARIFICATION,
  content: {
    contestKey: string,
  }
}

export type WebSocketResponseEventDto =
  CodeRunStatusWebSocketResponseEventDto
  | SubmissionRunStatusWebSocketResponseEventDto
  | UserMessageWebSocketResponseEventDto
  | SendDataEcsTaskDefinitionListWebSocketResponseEventDto
  | SendDataEcsTasksListWebSocketResponseEventDto
  | SendDataEc2InstancesListWebSocketResponseEventDto
  | SendDataSsmSessionsListWebSocketResponseEventDto
  | ProblemCrawledWebSocketResponseEventDto
  | SubmissionsCrawlWebSocketResponseEventDto
  | ContestChangesWebSocketResponseEventDto
  | SendDataRunCommandWebSocketResponseEventDto
  | UserNotificationSubmissionWebSocketResponseEventDto
  | UserNotificationContestClarificationWebSocketResponseEventDto
  | SubmissionJudgingWebSocketResponseEventDto;

/**
 * Message sent by the backend producers to the websocket SQS queue:
 * the producer (trusted, with access to the DB) decides the Ably channels where the event is published.
 */
export interface WebSocketChannelsMessageDto {
  channels: string[],
  event: WebSocketResponseEventDto,
}

/**
 * Data of a client (tab) in its organization presence channel (`CHANNEL_ORGANIZATION_PRESENCE`).
 * Sent by the client: informative only, the identity is the presence member `clientId`.
 */
export interface UserPresenceData {
  href: string,
  uiId: string,
}
