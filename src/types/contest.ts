import type { ContestDataResponseDTO, UpsertContestDTO, UserCompanyBasicInfoResponseDTO } from '../dto';
import type { ContestEventAction, ContestProblemPrerequisiteType } from '../prisma/enums';
import type { CodeLanguage } from './commons';
import type { EntityMembers } from './entity';
import type { Judge } from './judge';
import type { UserBasicInfo } from './users';

export enum ContestTimeStatus {
  UPCOMING = 'upcoming',
  LIVE = 'live',
  PAST = 'past',
}

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

export type ContestClarification = {
  key: string;
  problemJudgeKey: string;
  question: string;
  questionUser: UserCompanyBasicInfoResponseDTO;
  questionTimestamp: number;
  answer: string;
  answerTimestamp: number;
  answerUser: UserCompanyBasicInfoResponseDTO;
  public: boolean;
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
  startTimestamp: number;
  endTimestamp: number;
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
  startTimestamp: number;
  frozenTimestamp: number;
  quietTimestamp: number;
  endTimestamp: number;
  scoreboardLocked: boolean;
  upsolvingEnabled: boolean;
};

export type MemberUserData = {
  userId: string;
  lastVisitTimestamp: number | null;
  joinedAtTimestamp: number;
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
  details: Record<string, any>;
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

export type ContestTimeData = Pick<
  ContestDataResponseDTO,
  'isLive' | 'isFrozenTime' | 'isQuietTime' | 'isEndless' | 'isPast' | 'isFuture' | 'isGlobal'
> & {
  settings: Pick<
    UpsertContestDTO['settings'],
    'penalty' | 'startTimestamp' | 'frozenTimestamp' | 'quietTimestamp' | 'endTimestamp' | 'upsolvingEnabled'
  >;
};
