import { RecordId } from './commons.js';

/**
 * Subscriptions of the client. With the TOPIC channels they are not sent to the server anymore:
 * they only say which channel the client attaches (`getChannelOfWebSocketSubscribeEvent`) and the dispatch key.
 */
export enum WebSocketSubscriptionEvent {
  SUBSCRIBE_CODE_RUN_STATUS = 'SUBSCRIBE_CODE_RUN_STATUS',
  UNSUBSCRIBE_CODE_RUN_STATUS = 'UNSUBSCRIBE_CODE_RUN_STATUS',

  SUBSCRIBE_SUBMISSION_RUN_STATUS = 'SUBSCRIBE_SUBMISSION_RUN_STATUS',
  UNSUBSCRIBE_SUBMISSION_RUN_STATUS = 'UNSUBSCRIBE_SUBMISSION_RUN_STATUS',

  SUBSCRIBE_GET_DATA = 'SUBSCRIBE_GET_DATA',
  UNSUBSCRIBE_GET_DATA = 'SUBSCRIBE_GET_DATA',

  SUBSCRIBE_PROBLEM_CRAWLED = 'SUBSCRIBE_PROBLEM_CRAWLED',
  UNSUBSCRIBE_PROBLEM_CRAWLED = 'UNSUBSCRIBE_PROBLEM_CRAWLED',

  SUBSCRIBE_SUBMISSIONS_CRAWL = 'SUBSCRIBE_SUBMISSIONS_CRAWL',
  UNSUBSCRIBE_SUBMISSIONS_CRAWL = 'UNSUBSCRIBE_SUBMISSIONS_CRAWL',

  SUBSCRIBE_CONTEST_CHANGES = 'SUBSCRIBE_CONTEST_CHANGES',
  UNSUBSCRIBE_CONTEST_CHANGES = 'UNSUBSCRIBE_CONTEST_CHANGES',

  SUBSCRIBE_USER_NOTIFICATION = 'SUBSCRIBE_USER_NOTIFICATION',
  UNSUBSCRIBE_USER_NOTIFICATION = 'UNSUBSCRIBE_USER_NOTIFICATION',

  SUBSCRIBE_SUBMISSIONS_JUDGING = 'SUBSCRIBE_SUBMISSIONS_JUDGING',
  UNSUBSCRIBE_SUBMISSIONS_JUDGING = 'UNSUBSCRIBE_SUBMISSIONS_JUDGING',
}

export enum WebSocketResponseEvent {
  CODE_RUN_STATUS = 'CODE_RUN_STATUS',
  SUBMISSION_RUN_STATUS = 'SUBMISSION_RUN_STATUS',
  USER_MESSAGE = 'USER_MESSAGE',
  SEND_DATA_ = 'SEND_DATA_',
  SEND_DATA_RUN_COMMAND = 'SEND_DATA_RUN_COMMAND',
  PROBLEM_CRAWLED = 'PROBLEM_CRAWLED',
  SUBMISSIONS_CRAWL = 'SUBMISSIONS_CRAWL',
  CONTEST_CHANGES = 'CONTEST_CHANGES',
  USER_NOTIFICATION_ = 'USER_NOTIFICATION_',
  USER_NOTIFICATION_SUBMISSION = 'USER_NOTIFICATION_SUBMISSION',
  USER_NOTIFICATION_CONTEST_CLARIFICATION = 'USER_NOTIFICATION_CONTEST_CLARIFICATION',
  SUBMISSION_JUDGING = 'SUBMISSION_JUDGING',
}

export type ClientId = `${RecordId}|${string}`;

export type WebSocketResponseEventKey = `${WebSocketResponseEvent}-${ClientId}-${string}`;

/**
 * Roles of a contest, with the same names as the contest members in the DB.
 * Each role has its own Ably channel: `contest:{contestKey}:{role}` (see `CHANNEL_CONTEST`).
 * The inclusions follow `getContestAccessPermissions`:
 *   spectators ⊇ managers ⊇ administrators, spectators ⊇ participants, spectators ⊇ guests
 */
export enum ContestChannelRole {
  ADMINISTRATORS = 'administrators',
  MANAGERS = 'managers',
  PARTICIPANTS = 'participants',
  GUESTS = 'guests',
  SPECTATORS = 'spectators',
}

/**
 * Roles of a problem, the ones computed by `getProblemAccessPermissions` (backend).
 * Each role has its own Ably channel: `problem:{problemKey}:{role}` (see `CHANNEL_PROBLEM`).
 */
export enum ProblemChannelRole {
  ADMINISTRATORS = 'administrators',
  MANAGERS = 'managers',
  SPECTATORS = 'spectators',
}

/**
 * Roles of the public channels of a user: `user:{userKey}:{role}` (see `CHANNEL_USER_ROLE`), by its public key
 * (`getUserKey(nickname, organizationKey)`) like problems and contests.
 * There are no per-user permissions: `spectators` is everyone who can list the submissions of the user.
 * The private channel of the user is `user:{userId}` (see `CHANNEL_USER`).
 */
export enum UserChannelRole {
  SPECTATORS = 'spectators',
}

export type InfoLogCaseStatus = { inputKey: string, out: string, err: string, log: string };

export type TestInfo = {
  sampleCase: boolean,
  caseResultsExecuted: number,
  caseResultsTotal: number,
}
