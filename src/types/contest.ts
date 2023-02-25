import { ProblemResponseDTO } from '../dto';
import { EntityStatus, ProgrammingLanguage } from './commons';
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

export enum ContestSettingsParams {
  START = 'start',
  CLARIFICATIONS = 'clarifications',
  OPEN_REGISTRATION = 'openRegistration',
  OPEN_SCOREBOARD = 'openScoreboard',
  LIMIT_PROBLEM_TIME = 'limitProblemTime',
  LANGUAGES = 'languages',
  FROZEN = 'frozen',
  MANUAL_JUDGE = 'manualJudge',
  NUMBER_MANUAL_JUDGES = 'numberManualJudges'
}

export type ContestUserType = {
  isAdmin: boolean,
  isJudge: boolean,
  isContestant: boolean,
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

export type ContestProblemBasicType = {
  key: string,
  judge: Judge,
  index: string,
  points: number,
  color: string,
  startTimestamp: number,
  endTimestamp: number,
};

export type ContestSettingsBasicType = {
  clarifications: boolean,
  numberJudgeValidations: number,
  languages: ProgrammingLanguage[],
  penalty: number,
  timeToSolve: number,
  startTimestamp: number,
  frozenTimestamp: number,
  quietTimestamp: number,
  endTimestamp: number,
  problemEditorials: boolean,
};

export type MemberUserData = {
  userId: string,
  lastVisit: Date | null,
  joinedAt: Date,
};

export type ContestMembersBasicType = {
  administrators: { [key: string]: MemberUserData },
  judges: { [key: string]: MemberUserData },
  guests: { [key: string]: MemberUserData },
  spectators: { [key: string]: MemberUserData },
};

export type CreateContestMembersBasicType = {
  administrators: string[]
  judges: string[],
  contestants: string[],
  guests: string[],
  spectators: string[],
};

export type ContestProblemType = ProblemResponseDTO & ContestProblemBasicType & {
  totalSuccess: number,
  totalAttempts: number, // successRate: number,
  myAttempts: number,
  myPoints: number,
  mySuccess: boolean,
  myPenalty: number,
};

export type ContestMembersType = ContestMembersBasicType & { contestants: { [key: string]: MemberUserData } };

export type ContestMembersResponseType = {
  administrators: { [key: string]: UserBasicInfoInterface },
  judges: { [key: string]: UserBasicInfoInterface },
  guests: { [key: string]: UserBasicInfoInterface },
  spectators: { [key: string]: UserBasicInfoInterface },
  contestants: { [key: string]: UserBasicInfoInterface },
}
