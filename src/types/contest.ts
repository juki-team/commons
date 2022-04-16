import { Judge } from './judge';
import { EntityStatus } from './commons';

export enum ContestStatus {
  ACTIVE = EntityStatus.ACTIVE,
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
  answer: string, // si es judge o admi
  publicVisible: boolean// si es judge o admi
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
