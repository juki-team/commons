import { CodeLanguage, EntityStatus } from './commons.js';
import { EntityMembers } from './entity.js';
import { Judge } from './judge.js';
import { UserBasicInfo } from './users.js';

export enum ContestStatus {
  PUBLIC = EntityStatus.PUBLIC,
  RESERVED = EntityStatus.RESERVED,
  ARCHIVED = EntityStatus.ARCHIVED,
}

export enum ContestTimeStatus {
  UPCOMING = 'upcoming',
  LIVE = 'live',
  PAST = 'past'
}

export type MetaProblemSearcher = {
  name: string,
  url: string,
  id: string,
  rating: number,
  tag: string,
  judge: Judge
};

export type BaseClarification = {
  answer: string, // if the user is judge or admin
  publicVisible: boolean, // if the user is judge or admin
}

export interface NewClarification extends BaseClarification {
  problem: string,
  question: string,
}

export interface AnswerClarification extends NewClarification {
  answered: boolean,
  answeredTime: number,
  judgeType: false,
  user: string,
  userAnswer: string
  id: string,
}

export type ContestUser = {
  isOwner: boolean,
  isAdministrator: boolean,
  isManager: boolean,
  isParticipant: boolean,
  isGuest: boolean,
  isSpectator: boolean,
};

export enum ContestProblemPrerequisiteType {
  INDIVIDUALLY = 'INDIVIDUALLY',
  CONTEST = 'CONTEST',
}

export type ContestProblemPrerequisite = {
  problemId: string,
  type: ContestProblemPrerequisiteType,
  delay: number,
}

export type ContestProblem = {
  id: string
  index: string,
  points: number,
  color: string,
  startsAt: number,
  endsAt: number,
  prerequisites: ContestProblemPrerequisite[],
  maxAcceptedUsers: number,
  group: string,
};

export type ContestSettings = {
  clarifications: boolean,
  numberJudgeValidations: number,
  languages: CodeLanguage[],
  penalty: number,
  timeToSolve: number,
  startsAt: number,
  frozenAt: number,
  silencedAt: number,
  endsAt: number,
  scoreboardLocked: boolean,
  upsolvingEnabled: boolean,
};

export type MemberUserData = {
  userId: string,
  lastVisitedAt: number | null,
  joinedAt: number,
};

export type ContestMembersBasic = {
  administrators: { [key: string]: MemberUserData },
  judges: { [key: string]: MemberUserData },
  guests: { [key: string]: MemberUserData },
  spectators: { [key: string]: MemberUserData },
};

export enum ContestEventAction {
  DATA_UPDATE = 'DATA_UPDATE',
  SCOREBOARD_RECALCULATE = 'SCOREBOARD_RECALCULATE',
  SCOREBOARD_UNLOCK = 'SCOREBOARD_UNLOCK',
  SCOREBOARD_LOCK = 'SCOREBOARD_LOCK',
  ENABLE_UPSOLVING = 'ENABLE_UPSOLVING',
  DISABLE_UPSOLVING = 'DISABLE_UPSOLVING',
  PARTICIPANT_JOIN = 'PARTICIPANT_JOIN',
}

export interface ContestEvent {
  action: ContestEventAction,
  userId: string,
  timestamp: number,
  details: Record<string, any>;
}

export interface ContestGroup {
  label: string,
  value: string,
  color: string,
}

export interface ContestBaseDocument {
  key: string,
  name: string,
  description: string,
  settings: ContestSettings,
  problems: Record<string, ContestProblem>,
  members: EntityMembers,
  tags: string[],
  groups: Record<string, ContestGroup>,
  events: ContestEvent[],
}

export type ContestMembersResponse = {
  administrators: { [key: string]: UserBasicInfo },
  judges: { [key: string]: UserBasicInfo },
  guests: { [key: string]: UserBasicInfo },
  spectators: { [key: string]: UserBasicInfo },
  contestants: { [key: string]: UserBasicInfo },
}

// Calculated time/state flags of a contest (computed at response time).
export interface ContestTimeFlags {
  isLive: boolean,
  isFrozenTime: boolean,
  isQuietTime: boolean,
  isEndless: boolean,
  isPast: boolean,
  isFuture: boolean,
  isGlobal: boolean,
}

export interface ContestTimeData extends ContestTimeFlags {
  settings: Pick<ContestSettings, 'penalty' | 'startsAt' | 'frozenAt' | 'silencedAt' | 'endsAt' | 'upsolvingEnabled'>,
}
