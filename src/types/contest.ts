import type { CodeLanguage, ContestEventAction, ContestProblemPrerequisiteType, Judge } from '../enums/index.js';
import type { EntityMembers } from './entity.js';
import type { UserBasicInfo } from './user.js';

export type MetaProblemSearcher = {
  name: string;
  url: string;
  id: string;
  rating: number;
  tag: string;
  judge: Judge;
};

export type BaseClarification = {
  answer: string; // if the user is judge or admin
  publicVisible: boolean; // if the user is judge or admin
};

export interface NewClarification extends BaseClarification {
  problem: string;
  question: string;
}

export interface AnswerClarification extends NewClarification {
  answered: boolean;
  answeredTime: number;
  judgeType: false;
  user: string;
  userAnswer: string;
  id: string;
}

export type ContestUser = {
  isOwner: boolean;
  isAdministrator: boolean;
  isManager: boolean;
  isParticipant: boolean;
  isGuest: boolean;
  isSpectator: boolean;
};

export type ContestProblemPrerequisite = {
  problemId: string;
  type: ContestProblemPrerequisiteType;
  delay: number;
};

export type ContestProblem = {
  id: string;
  index: string;
  points: number;
  color: string;
  startsAt: number;
  endsAt: number;
  prerequisites: ContestProblemPrerequisite[];
  maxAcceptedUsers: number;
  group: string;
};

export type ContestSettings = {
  clarifications: boolean;
  numberJudgeValidations: number;
  languages: CodeLanguage[];
  penalty: number;
  timeToSolve: number;
  startsAt: number;
  frozenAt: number;
  silencedAt: number;
  endsAt: number;
  scoreboardLocked: boolean;
  upsolvingEnabled: boolean;
};

export type MemberUserData = {
  userId: string;
  lastVisitedAt: number | null;
  joinedAt: number;
};

export type ContestMembersBasic = {
  administrators: { [key: string]: MemberUserData };
  judges: { [key: string]: MemberUserData };
  guests: { [key: string]: MemberUserData };
  spectators: { [key: string]: MemberUserData };
};

export interface ContestEvent {
  action: ContestEventAction;
  userId: string;
  timestamp: number;
  details: Record<string, unknown>;
}

export interface ContestGroup {
  label: string;
  value: string;
  color: string;
}

export interface ContestBaseDocument {
  key: string;
  name: string;
  description: string;
  settings: ContestSettings;
  problems: Record<string, ContestProblem>;
  problemsOrdered?: string[];
  members: EntityMembers;
  tags: string[];
  groups: Record<string, ContestGroup>;
  events: ContestEvent[];
}

export type ContestMembersResponse = {
  administrators: { [key: string]: UserBasicInfo };
  judges: { [key: string]: UserBasicInfo };
  guests: { [key: string]: UserBasicInfo };
  spectators: { [key: string]: UserBasicInfo };
  contestants: { [key: string]: UserBasicInfo };
};

// Calculated time/state flags of a contest (computed at response time).
// Source of truth for `ContestSummaryListResponseDto` (which `extends` this) and `ContestTimeData`.
export interface ContestTimeFlags {
  isLive: boolean;
  isFrozenTime: boolean;
  isQuietTime: boolean;
  isEndless: boolean;
  isPast: boolean;
  isFuture: boolean;
  isGlobal: boolean;
}

export interface ContestTimeData extends ContestTimeFlags {
  settings: Pick<ContestSettings, 'penalty' | 'startsAt' | 'frozenAt' | 'silencedAt' | 'endsAt' | 'upsolvingEnabled'>;
}
