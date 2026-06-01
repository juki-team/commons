import type {
  ProblemVerdict,
  SubmissionRunStatus,
  WebSocketMessageEvent,
  WebSocketResponseEvent,
  WebSocketSubscriptionEvent,
} from '../enums/index.js';
import type { ClientId, Device, WebSocketResponseEventKey } from '../types/index.js';
import type {
  Ec2Instance,
  EcsTaskDefinitionSystemSummaryListResponseDto,
  EcsTaskSystemSummaryListResponseDto,
  SsmSession,
} from './system.js';
import type { PingResponseDto, UserOrganizationBasicInfoResponseDto } from './user.js';

// EVENT MESSAGES
interface WebSocketMessage {
  event: WebSocketMessageEvent;
  clientId: ClientId;
}

export interface PingWebSocketEventDto extends WebSocketMessage {
  event: typeof WebSocketMessageEvent.PING;
}

export interface ClientTrackLocationWebSocketEventDto extends WebSocketMessage {
  event: typeof WebSocketMessageEvent.CLIENT_TRACK_LOCATION;
  href: string;
}

export interface ClientTrackScreenshotWebSocketEventDto extends WebSocketMessage {
  event: typeof WebSocketMessageEvent.CLIENT_TRACK_SCREENSHOT;
  screenshot: string;
}

export interface ClientTrackDeviceWebSocketEventDto extends WebSocketMessage {
  event: typeof WebSocketMessageEvent.CLIENT_TRACK_DEVICE;
  device: Device;
}

export interface ChatCompletionsWebSocketEventDto extends WebSocketMessage {
  event: typeof WebSocketMessageEvent.CHAT_COMPLETIONS;
  chatAiId: string;
  content: string;
}

export type WebSocketMessageEventDto =
  | PingWebSocketEventDto
  | ClientTrackLocationWebSocketEventDto
  | ClientTrackScreenshotWebSocketEventDto
  | ClientTrackDeviceWebSocketEventDto
  | ChatCompletionsWebSocketEventDto;

// EVENT SUBSCRIPTIONS

export interface WebSocketSubscription {
  event: WebSocketSubscriptionEvent;
  clientId: ClientId;
}

export interface SubscribeCodeRunStatusWebSocketEventDto extends WebSocketSubscription {
  event: typeof WebSocketSubscriptionEvent.SUBSCRIBE_CODE_RUN_STATUS;
  runId: string;
}

export interface UnsubscribeCodeRunStatusWebSocketEventDto extends WebSocketSubscription {
  event: typeof WebSocketSubscriptionEvent.UNSUBSCRIBE_CODE_RUN_STATUS;
  runId: string;
}

export interface SubscribeSubmissionRunStatusWebSocketEventDto extends WebSocketSubscription {
  event: typeof WebSocketSubscriptionEvent.SUBSCRIBE_SUBMISSION_RUN_STATUS;
  submitId: string;
}

export interface UnsubscribeSubmissionRunStatusWebSocketEventDto extends WebSocketSubscription {
  event: typeof WebSocketSubscriptionEvent.UNSUBSCRIBE_SUBMISSION_RUN_STATUS;
  submitId: string;
}

export interface SubscribeGetDataWebSocketEventDto extends WebSocketSubscription {
  dataId: string;
  event: typeof WebSocketSubscriptionEvent.SUBSCRIBE_GET_DATA;
}

export interface UnsubscribeGetDataWebSocketEventDto extends WebSocketSubscription {
  dataId: string;
  event: typeof WebSocketSubscriptionEvent.UNSUBSCRIBE_GET_DATA;
}

export interface SubscribeProblemCrawledWebSocketEventDto extends WebSocketSubscription {
  event: typeof WebSocketSubscriptionEvent.SUBSCRIBE_PROBLEM_CRAWLED;
  problemKey: string;
}

export interface UnsubscribeProblemCrawledWebSocketEventDto extends WebSocketSubscription {
  event: typeof WebSocketSubscriptionEvent.UNSUBSCRIBE_PROBLEM_CRAWLED;
  problemKey: string;
}

export interface SubscribeSubmissionsCrawlWebSocketEventDto extends WebSocketSubscription {
  event: typeof WebSocketSubscriptionEvent.SUBSCRIBE_SUBMISSIONS_CRAWL;
  contestKey: string;
  problemKeys: string;
}

export interface UnsubscribeSubmissionsCrawlWebSocketEventDto extends WebSocketSubscription {
  event: typeof WebSocketSubscriptionEvent.UNSUBSCRIBE_SUBMISSIONS_CRAWL;
  contestKey: string;
  problemKeys: string;
}

export interface SubscribeContestChangesWebSocketEventDto extends WebSocketSubscription {
  event: typeof WebSocketSubscriptionEvent.SUBSCRIBE_CONTEST_CHANGES;
  contestKey: string;
}

export interface UnsubscribeContestChangesWebSocketEventDto extends WebSocketSubscription {
  event: typeof WebSocketSubscriptionEvent.UNSUBSCRIBE_CONTEST_CHANGES;
  contestKey: string;
}

export interface SubscribeClientTrackWebSocketEventDto extends WebSocketSubscription {
  event: typeof WebSocketSubscriptionEvent.SUBSCRIBE_CLIENT_TRACK;
}

export interface UnsubscribeClientTrackWebSocketEventDto extends WebSocketSubscription {
  event: typeof WebSocketSubscriptionEvent.UNSUBSCRIBE_CLIENT_TRACK;
}

export interface SubscribeUserNotificationWebSocketEventDto extends WebSocketSubscription {
  event: typeof WebSocketSubscriptionEvent.SUBSCRIBE_USER_NOTIFICATION;
  userKey: string;
}

export interface UnsubscribeUserNotificationWebSocketEventDto extends WebSocketSubscription {
  event: typeof WebSocketSubscriptionEvent.UNSUBSCRIBE_USER_NOTIFICATION;
  userKey: string;
}

export type WebSocketSubscribeEventDto =
  | SubscribeCodeRunStatusWebSocketEventDto
  | SubscribeSubmissionRunStatusWebSocketEventDto
  | SubscribeGetDataWebSocketEventDto
  | SubscribeProblemCrawledWebSocketEventDto
  | SubscribeSubmissionsCrawlWebSocketEventDto
  | SubscribeContestChangesWebSocketEventDto
  | SubscribeClientTrackWebSocketEventDto
  | SubscribeUserNotificationWebSocketEventDto;

export type WebSocketUnsubscribeEventDto =
  | UnsubscribeCodeRunStatusWebSocketEventDto
  | UnsubscribeSubmissionRunStatusWebSocketEventDto
  | UnsubscribeGetDataWebSocketEventDto
  | UnsubscribeProblemCrawledWebSocketEventDto
  | UnsubscribeSubmissionsCrawlWebSocketEventDto
  | UnsubscribeContestChangesWebSocketEventDto
  | UnsubscribeClientTrackWebSocketEventDto
  | UnsubscribeUserNotificationWebSocketEventDto;

// RESPONSE EVENTS

export interface WebSocketResponse {
  event: WebSocketResponseEvent;
  key: WebSocketResponseEventKey;
  connectionId: string;
  createdAt: number;
}

export interface PongWebSocketResponseEventDto extends WebSocketResponse {
  event: typeof WebSocketResponseEvent.PONG;
  data: PingResponseDto;
}

export type InfoLogCaseStatus = { inputKey: string; out: string; err: string; log: string };

export interface CodeRunStatusWebSocketResponseEventDto extends WebSocketResponse {
  event: typeof WebSocketResponseEvent.CODE_RUN_STATUS;
  runId: string;
  status: SubmissionRunStatus;
  log: InfoLogCaseStatus;
}

export type TestInfo = {
  sampleCase: boolean;
  caseResultsExecuted: number;
  caseResultsTotal: number;
};

export interface SubmissionRunStatusWebSocketResponseEventDto extends WebSocketResponse {
  event: typeof WebSocketResponseEvent.SUBMISSION_RUN_STATUS;
  submitId: string;
  status: SubmissionRunStatus;
  verdict: ProblemVerdict;
  points: number;
  testInfo?: TestInfo;
  shouldValidateContest: boolean;
}

export interface UserMessageWebSocketResponseEventDto extends WebSocketResponse {
  event: typeof WebSocketResponseEvent.USER_MESSAGE;
  user: UserOrganizationBasicInfoResponseDto;
  content: {
    type: 'SUBMISSION_VERDICT';
    contestName: string;
    problemName: string;
    verdict: ProblemVerdict;
    points: number;
  };
}

export interface SendDataWebSocketResponseEventDto extends WebSocketResponse {
  dataId: string;
  content: unknown;
}

export interface SendDataEcsTaskDefinitionListWebSocketResponseEventDto extends SendDataWebSocketResponseEventDto {
  event: typeof WebSocketResponseEvent.SEND_DATA_ECS_TASK_DEFINITIONS_LIST;
  content: EcsTaskDefinitionSystemSummaryListResponseDto[];
}

export interface SendDataEcsTasksListWebSocketResponseEventDto extends SendDataWebSocketResponseEventDto {
  event: typeof WebSocketResponseEvent.SEND_DATA_ECS_TASKS_LIST;
  content: EcsTaskSystemSummaryListResponseDto[];
}

export interface SendDataEc2InstancesListWebSocketResponseEventDto extends SendDataWebSocketResponseEventDto {
  event: typeof WebSocketResponseEvent.SEND_DATA_EC2_INSTANCES_LIST;
  content: Ec2Instance[];
}

export interface SendDataSsmSessionsListWebSocketResponseEventDto extends SendDataWebSocketResponseEventDto {
  event: typeof WebSocketResponseEvent.SEND_DATA_SSM_SESSIONS_LIST;
  content: SsmSession[];
}

export interface SendDataRunCommandWebSocketResponseEventDto extends SendDataWebSocketResponseEventDto {
  event: typeof WebSocketResponseEvent.SEND_DATA_RUN_COMMAND;
  content: {
    testCaseOutContent: string;
    testCaseErrorContent: string;
    testCaseLogContent: string;
  };
}

export interface SendDataClientTrackWebSocketResponseEventDto extends SendDataWebSocketResponseEventDto {
  event: typeof WebSocketResponseEvent.SEND_DATA_CLIENT_TRACK;
  content: {
    location?: string;
    screenshot?: string;
    device?: Device;
  };
}

export interface SendDataChatCompletionsWebSocketResponseEventDto extends SendDataWebSocketResponseEventDto {
  event: typeof WebSocketResponseEvent.SEND_DATA_CHAT_COMPLETIONS;
  content: { choices: [{ index: number; message: { role: string; content: string } }]; rawData: unknown };
}

export interface ProblemCrawledWebSocketResponseEventDto extends WebSocketResponse {
  event: typeof WebSocketResponseEvent.PROBLEM_CRAWLED;
  content: { problemKey: string };
}

export interface SubmissionsCrawlWebSocketResponseEventDto extends WebSocketResponse {
  event: typeof WebSocketResponseEvent.SUBMISSIONS_CRAWL;
  content: {
    contestKey: string;
    problemKeys: string;
    judge: string;
    userKey: string;
    submissionsCount: number;
    submitId: string;
    isNewSubmission: boolean;
  };
}

export interface ContestChangesWebSocketResponseEventDto extends WebSocketResponse {
  event: typeof WebSocketResponseEvent.CONTEST_CHANGES;
  content: {
    contestKey: string;
  };
}

export interface ClientTrackWebSocketResponseEventDto extends WebSocketResponse {
  event: typeof WebSocketResponseEvent.CLIENT_TRACK;
  location: boolean;
  screenshot: boolean;
  device: boolean;
}

export interface UserNotificationWebSocketResponseEventDto extends WebSocketResponse {
  event:
    | typeof WebSocketResponseEvent.USER_NOTIFICATION_SUBMISSION
    | typeof WebSocketResponseEvent.USER_NOTIFICATION_CONTEST_CLARIFICATION;
  content: unknown;
}

export interface UserNotificationSubmissionWebSocketResponseEventDto extends UserNotificationWebSocketResponseEventDto {
  event: typeof WebSocketResponseEvent.USER_NOTIFICATION_SUBMISSION;
  content: {
    contest: {
      key: string;
      name: string;
      problemIndex: string;
      isFrozen: boolean;
      isQuiet: boolean;
      isUpsolving: boolean;
    } | null;
    problem: { key: string; name: string };
    verdict: ProblemVerdict;
    points: number;
    submissionId: string;
  };
}

export interface UserNotificationContestClarificationWebSocketResponseEventDto
  extends UserNotificationWebSocketResponseEventDto {
  event: typeof WebSocketResponseEvent.USER_NOTIFICATION_CONTEST_CLARIFICATION;
  content: {
    contestKey: string;
  };
}

export type WebSocketResponseEventDto =
  | PongWebSocketResponseEventDto
  | CodeRunStatusWebSocketResponseEventDto
  | SubmissionRunStatusWebSocketResponseEventDto
  | UserMessageWebSocketResponseEventDto
  | SendDataEcsTaskDefinitionListWebSocketResponseEventDto
  | SendDataEcsTasksListWebSocketResponseEventDto
  | SendDataEc2InstancesListWebSocketResponseEventDto
  | SendDataSsmSessionsListWebSocketResponseEventDto
  | ProblemCrawledWebSocketResponseEventDto
  | SendDataChatCompletionsWebSocketResponseEventDto
  | SubmissionsCrawlWebSocketResponseEventDto
  | ContestChangesWebSocketResponseEventDto
  | SendDataRunCommandWebSocketResponseEventDto
  | SendDataClientTrackWebSocketResponseEventDto
  | ClientTrackWebSocketResponseEventDto
  | UserNotificationSubmissionWebSocketResponseEventDto
  | UserNotificationContestClarificationWebSocketResponseEventDto;
