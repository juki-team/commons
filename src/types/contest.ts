import { ContestDataResponseDTO, UpsertContestDTO, UserCompanyBasicInfoResponseDTO } from '../dto';
import { CodeLanguage, EntityStatus } from './commons';
import { EntityMembers } from './entity';
import { Judge } from './judge';
import { UserBasicInfoInterface } from './users';

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

export type ContestUserType = {
  isOwner: boolean,
  isAdministrator: boolean,
  isManager: boolean,
  isParticipant: boolean,
  isGuest: boolean,
  isSpectator: boolean,
};

export type ContestClarificationType = {
  key: string,
  problemJudgeKey: string,
  question: string,
  questionUser: UserCompanyBasicInfoResponseDTO,
  questionTimestamp: number,
  answer: string,
  answerTimestamp: number,
  answerUser: UserCompanyBasicInfoResponseDTO,
  public: boolean,
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

export type ContestProblemType = {
  id: string
  index: string,
  points: number,
  color: string,
  startTimestamp: number,
  endTimestamp: number,
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
  startTimestamp: number,
  frozenTimestamp: number,
  quietTimestamp: number,
  endTimestamp: number,
  locked: boolean,
};

export type MemberUserData = {
  userId: string,
  lastVisitTimestamp: number | null,
  joinedAtTimestamp: number,
};

export type ContestMembersBasicType = {
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
  problems: Record<string, ContestProblemType>,
  members: EntityMembers,
  tags: string[],
  groups: Record<string, ContestGroup>,
  events: ContestEvent[],
}

export type ContestMembersResponseType = {
  administrators: { [key: string]: UserBasicInfoInterface },
  judges: { [key: string]: UserBasicInfoInterface },
  guests: { [key: string]: UserBasicInfoInterface },
  spectators: { [key: string]: UserBasicInfoInterface },
  contestants: { [key: string]: UserBasicInfoInterface },
}

export type ContestTimeData =
  Pick<ContestDataResponseDTO, 'isLive' | 'isFrozenTime' | 'isQuietTime' | 'isEndless' | 'isPast' | 'isFuture' | 'isGlobal'>
  & {
  settings: Pick<UpsertContestDTO['settings'], 'penalty' | 'startTimestamp' | 'frozenTimestamp' | 'quietTimestamp' | 'endTimestamp'>
};
