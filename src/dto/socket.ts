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
  EcsTaskDefinitionSystemSummaryListResponseDTO,
  EcsTaskSystemSummaryListResponseDTO,
  SsmSession,
} from './system.js';
import type { PingResponseDTO, UserOrganizationBasicInfoResponseDTO } from './user.js';

// EVENT MESSAGES
interface WebsocketMessage {
  event: WebSocketMessageEvent;
  clientId: ClientId;
}

export interface PingWebSocketEventDTO extends WebsocketMessage {
  event: typeof WebSocketMessageEvent.PING;
}

export interface ClientTrackLocationWebSocketEventDTO extends WebsocketMessage {
  event: typeof WebSocketMessageEvent.CLIENT_TRACK_LOCATION;
  href: string;
}

export interface ClientTrackScreenshotWebSocketEventDTO extends WebsocketMessage {
  event: typeof WebSocketMessageEvent.CLIENT_TRACK_SCREENSHOT;
  screenshot: string;
}

export interface ClientTrackDeviceWebSocketEventDTO extends WebsocketMessage {
  event: typeof WebSocketMessageEvent.CLIENT_TRACK_DEVICE;
  device: Device;
}

export interface ChatCompletionsWebSocketEventDTO extends WebsocketMessage {
  event: typeof WebSocketMessageEvent.CHAT_COMPLETIONS;
  chatAiId: string;
  content: string;
}

export type WebSocketMessageEventDTO =
  | PingWebSocketEventDTO
  | ClientTrackLocationWebSocketEventDTO
  | ClientTrackScreenshotWebSocketEventDTO
  | ClientTrackDeviceWebSocketEventDTO
  | ChatCompletionsWebSocketEventDTO;

// EVENT SUBSCRIPTIONS

export interface WebsocketSubscription {
  event: WebSocketSubscriptionEvent;
  clientId: ClientId;
}

export interface SubscribeCodeRunStatusWebSocketEventDTO extends WebsocketSubscription {
  event: typeof WebSocketSubscriptionEvent.SUBSCRIBE_CODE_RUN_STATUS;
  runId: string;
}

export interface UnsubscribeCodeRunStatusWebSocketEventDTO extends WebsocketSubscription {
  event: typeof WebSocketSubscriptionEvent.UNSUBSCRIBE_CODE_RUN_STATUS;
  runId: string;
}

export interface SubscribeSubmissionRunStatusWebSocketEventDTO extends WebsocketSubscription {
  event: typeof WebSocketSubscriptionEvent.SUBSCRIBE_SUBMISSION_RUN_STATUS;
  submitId: string;
}

export interface UnsubscribeSubmissionRunStatusWebSocketEventDTO extends WebsocketSubscription {
  event: typeof WebSocketSubscriptionEvent.UNSUBSCRIBE_SUBMISSION_RUN_STATUS;
  submitId: string;
}

export interface SubscribeGetDataWebSocketEventDTO extends WebsocketSubscription {
  dataId: string;
  event: typeof WebSocketSubscriptionEvent.SUBSCRIBE_GET_DATA;
}

export interface UnsubscribeGetDataWebSocketEventDTO extends WebsocketSubscription {
  dataId: string;
  event: typeof WebSocketSubscriptionEvent.UNSUBSCRIBE_GET_DATA;
}

export interface SubscribeProblemCrawledWebSocketEventDTO extends WebsocketSubscription {
  event: typeof WebSocketSubscriptionEvent.SUBSCRIBE_PROBLEM_CRAWLED;
  problemKey: string;
}

export interface UnsubscribeProblemCrawledWebSocketEventDTO extends WebsocketSubscription {
  event: typeof WebSocketSubscriptionEvent.UNSUBSCRIBE_PROBLEM_CRAWLED;
  problemKey: string;
}

export interface SubscribeSubmissionsCrawlWebSocketEventDTO extends WebsocketSubscription {
  event: typeof WebSocketSubscriptionEvent.SUBSCRIBE_SUBMISSIONS_CRAWL;
  contestKey: string;
  problemKeys: string;
}

export interface UnsubscribeSubmissionsCrawlWebSocketEventDTO extends WebsocketSubscription {
  event: typeof WebSocketSubscriptionEvent.UNSUBSCRIBE_SUBMISSIONS_CRAWL;
  contestKey: string;
  problemKeys: string;
}

export interface SubscribeContestChangesWebSocketEventDTO extends WebsocketSubscription {
  event: typeof WebSocketSubscriptionEvent.SUBSCRIBE_CONTEST_CHANGES;
  contestKey: string;
}

export interface UnsubscribeContestChangesWebSocketEventDTO extends WebsocketSubscription {
  event: typeof WebSocketSubscriptionEvent.UNSUBSCRIBE_CONTEST_CHANGES;
  contestKey: string;
}

export interface SubscribeClientTrackWebSocketEventDTO extends WebsocketSubscription {
  event: typeof WebSocketSubscriptionEvent.SUBSCRIBE_CLIENT_TRACK;
}

export interface UnsubscribeClientTrackWebSocketEventDTO extends WebsocketSubscription {
  event: typeof WebSocketSubscriptionEvent.UNSUBSCRIBE_CLIENT_TRACK;
}

export interface SubscribeUserNotificationWebsocketEventDTO extends WebsocketSubscription {
  event: typeof WebSocketSubscriptionEvent.SUBSCRIBE_USER_NOTIFICATION;
  userKey: string;
}

export interface UnsubscribeUserNotificationWebSocketEventDTO extends WebsocketSubscription {
  event: typeof WebSocketSubscriptionEvent.UNSUBSCRIBE_USER_NOTIFICATION;
  userKey: string;
}

export type WebSocketSubscribeEventDTO =
  | SubscribeCodeRunStatusWebSocketEventDTO
  | SubscribeSubmissionRunStatusWebSocketEventDTO
  | SubscribeGetDataWebSocketEventDTO
  | SubscribeProblemCrawledWebSocketEventDTO
  | SubscribeSubmissionsCrawlWebSocketEventDTO
  | SubscribeContestChangesWebSocketEventDTO
  | SubscribeClientTrackWebSocketEventDTO
  | SubscribeUserNotificationWebsocketEventDTO;

export type WebSocketUnsubscribeEventDTO =
  | UnsubscribeCodeRunStatusWebSocketEventDTO
  | UnsubscribeSubmissionRunStatusWebSocketEventDTO
  | UnsubscribeGetDataWebSocketEventDTO
  | UnsubscribeProblemCrawledWebSocketEventDTO
  | UnsubscribeSubmissionsCrawlWebSocketEventDTO
  | UnsubscribeContestChangesWebSocketEventDTO
  | UnsubscribeClientTrackWebSocketEventDTO
  | UnsubscribeUserNotificationWebSocketEventDTO;

// RESPONSE EVENTS

export interface WebSocketResponse {
  event: WebSocketResponseEvent;
  key: WebSocketResponseEventKey;
  connectionId: string;
  messageTimestamp: number;
}

export interface PongWebSocketResponseEventDTO extends WebSocketResponse {
  event: typeof WebSocketResponseEvent.PONG;
  data: PingResponseDTO;
}

export type InfoLogCaseStatus = { inputKey: string; out: string; err: string; log: string };

export interface CodeRunStatusWebSocketResponseEventDTO extends WebSocketResponse {
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

export interface SubmissionRunStatusWebSocketResponseEventDTO extends WebSocketResponse {
  event: typeof WebSocketResponseEvent.SUBMISSION_RUN_STATUS;
  submitId: string;
  status: SubmissionRunStatus;
  verdict: ProblemVerdict;
  points: number;
  testInfo?: TestInfo;
  shouldValidateContest: boolean;
}

export interface UserMessageWebSocketResponseEventDTO extends WebSocketResponse {
  event: typeof WebSocketResponseEvent.USER_MESSAGE;
  user: UserOrganizationBasicInfoResponseDTO;
  content: {
    type: 'SUBMISSION_VERDICT';
    contestName: string;
    problemName: string;
    verdict: ProblemVerdict;
    points: number;
  };
}

export interface SendDataWebSocketResponseEventDTO extends WebSocketResponse {
  dataId: string;
  content: unknown;
}

export interface SendDataEcsTaskDefinitionListWebSocketResponseEventDTO extends SendDataWebSocketResponseEventDTO {
  event: typeof WebSocketResponseEvent.SEND_DATA_ECS_TASK_DEFINITIONS_LIST;
  content: EcsTaskDefinitionSystemSummaryListResponseDTO[];
}

export interface SendDataEcsTasksListWebSocketResponseEventDTO extends SendDataWebSocketResponseEventDTO {
  event: typeof WebSocketResponseEvent.SEND_DATA_ECS_TASKS_LIST;
  content: EcsTaskSystemSummaryListResponseDTO[];
}

export interface SendDataEc2InstancesListWebSocketResponseEventDTO extends SendDataWebSocketResponseEventDTO {
  event: typeof WebSocketResponseEvent.SEND_DATA_EC2_INSTANCES_LIST;
  content: Ec2Instance[];
}

export interface SendDataSsmSessionsListWebSocketResponseEventDTO extends SendDataWebSocketResponseEventDTO {
  event: typeof WebSocketResponseEvent.SEND_DATA_SSM_SESSIONS_LIST;
  content: SsmSession[];
}

export interface SendDataRunCommandWebSocketResponseEventDTO extends SendDataWebSocketResponseEventDTO {
  event: typeof WebSocketResponseEvent.SEND_DATA_RUN_COMMAND;
  content: {
    testCaseOutContent: string;
    testCaseErrorContent: string;
    testCaseLogContent: string;
  };
}

export interface SendDataClientTrackWebSocketResponseEventDTO extends SendDataWebSocketResponseEventDTO {
  event: typeof WebSocketResponseEvent.SEND_DATA_CLIENT_TRACK;
  content: {
    location?: string;
    screenshot?: string;
    device?: Device;
  };
}

export interface SendDataChatCompletionsWebSocketResponseEventDTO extends SendDataWebSocketResponseEventDTO {
  event: typeof WebSocketResponseEvent.SEND_DATA_CHAT_COMPLETIONS;
  content: { choices: [{ index: number; message: { role: string; content: string } }]; rawData: unknown };
}

export interface ProblemCrawledWebSocketResponseEventDTO extends WebSocketResponse {
  event: typeof WebSocketResponseEvent.PROBLEM_CRAWLED;
  content: { problemKey: string };
}

export interface SubmissionsCrawlWebSocketResponseEventDTO extends WebSocketResponse {
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

export interface ContestChangesWebSocketResponseEventDTO extends WebSocketResponse {
  event: typeof WebSocketResponseEvent.CONTEST_CHANGES;
  content: {
    contestKey: string;
  };
}

export interface ClientTrackWebSocketResponseEventDTO extends WebSocketResponse {
  event: typeof WebSocketResponseEvent.CLIENT_TRACK;
  location: boolean;
  screenshot: boolean;
  device: boolean;
}

export interface UserNotificationWebSocketResponseEventDTO extends WebSocketResponse {
  event:
    | typeof WebSocketResponseEvent.USER_NOTIFICATION_SUBMISSION
    | typeof WebSocketResponseEvent.USER_NOTIFICATION_CONTEST_CLARIFICATION;
  content: unknown;
}

export interface UserNotificationSubmissionWebSocketResponseEventDTO extends UserNotificationWebSocketResponseEventDTO {
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

export interface UserNotificationContestClarificationWebSocketResponseEventDTO
  extends UserNotificationWebSocketResponseEventDTO {
  event: typeof WebSocketResponseEvent.USER_NOTIFICATION_CONTEST_CLARIFICATION;
  content: {
    contestKey: string;
  };
}

export type WebSocketResponseEventDTO =
  | PongWebSocketResponseEventDTO
  | CodeRunStatusWebSocketResponseEventDTO
  | SubmissionRunStatusWebSocketResponseEventDTO
  | UserMessageWebSocketResponseEventDTO
  | SendDataEcsTaskDefinitionListWebSocketResponseEventDTO
  | SendDataEcsTasksListWebSocketResponseEventDTO
  | SendDataEc2InstancesListWebSocketResponseEventDTO
  | SendDataSsmSessionsListWebSocketResponseEventDTO
  | ProblemCrawledWebSocketResponseEventDTO
  | SendDataChatCompletionsWebSocketResponseEventDTO
  | SubmissionsCrawlWebSocketResponseEventDTO
  | ContestChangesWebSocketResponseEventDTO
  | SendDataRunCommandWebSocketResponseEventDTO
  | SendDataClientTrackWebSocketResponseEventDTO
  | ClientTrackWebSocketResponseEventDTO
  | UserNotificationSubmissionWebSocketResponseEventDTO
  | UserNotificationContestClarificationWebSocketResponseEventDTO;
