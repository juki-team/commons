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
  questionTimestamp: number,
  questionUserNickname: string,
  questionUserImageUrl: string,
  answer: string,
  answerTimestamp: number,
  answerUserNickname: string,
  answerUserImageUrl: string,
  public: boolean,
};

export enum ContestProblemPrerequisiteType {
  INDIVIDUALLY = 'individually',
  CONTEST = 'contest',
}

export type ContestProblemType = {
  id: string
  index: string,
  points: number,
  color: string,
  startTimestamp: number,
  endTimestamp: number,
  prerequisites: { problemKey: string, type: ContestProblemPrerequisiteType, delay: number }[],
  maxAcceptedUsers: number,
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

export interface ContestBaseDocument {
  key: string,
  name: string,
  description: string,
  settings: ContestSettings,
  problems: { [key: string]: ContestProblemType },
  members: EntityMembers,
  tags: string[],
}

export type ContestMembersResponseType = {
  administrators: { [key: string]: UserBasicInfoInterface },
  judges: { [key: string]: UserBasicInfoInterface },
  guests: { [key: string]: UserBasicInfoInterface },
  spectators: { [key: string]: UserBasicInfoInterface },
  contestants: { [key: string]: UserBasicInfoInterface },
}
