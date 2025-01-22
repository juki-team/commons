import { UserCompanyBasicInfoResponseDTO } from '../dto';

export enum EntityMembersRank {
  NONE = 'NONE',
  CLOSE = 'CLOSE',
  OPEN = 'OPEN',
}

export enum EntityState {
  RELEASED = 'RELEASED',
  ARCHIVED = 'ARCHIVED',
}

export type EntityUsersMemberUserData = {
  userId: string;
  lastVisitTimestamp: number | null;
  joinedAtTimestamp: number;
};

export type EntityTeamsMemberUserData = {
  teamId: string;
  lastVisitTimestamp: number | null;
  joinedAtTimestamp: number;
};

export type EntityMembersUserData = EntityUsersMemberUserData | EntityTeamsMemberUserData;

export interface EntityMembers {
  rankAdministrators: EntityMembersRank,
  administrators: { [key: string]: EntityMembersUserData },
  rankManagers: EntityMembersRank,
  managers: { [key: string]: EntityMembersUserData },
  rankGuests: EntityMembersRank,
  guests: { [key: string]: EntityMembersUserData },
  rankSpectators: EntityMembersRank,
  spectators: { [key: string]: EntityMembersUserData },
  rankParticipants: EntityMembersRank,
  participants: { [key: string]: EntityMembersUserData },
}

export interface EntityOwnerDocument {
  ownerUserId: string,
}

export interface EntityCompanyDocument {
  companyId: string,
}

export interface EntityTimestampsDocument {
  createdAt: Date,
  updatedAt: Date,
}

export interface EntityStateDocument {
  state: EntityState,
}

export interface EntityLogChanges {
  key: string;
  path: string;
  valueType: string | null;
  value?: any;
  oldValue?: any;
  type: LogOperation,
}

export interface EntityLog {
  changes: EntityLogChanges[],
  timestamp: number,
  customerUserId: string,
}

export interface EntityLogsDocument {
  logs: EntityLog[],
}

export type NewEntityDocument<T> =
  T
  & EntityCompanyDocument
  & EntityOwnerDocument
  & EntityTimestampsDocument
  & EntityStateDocument
  & EntityLogsDocument;

export type CreateEntityDocument<T> = Omit<T, '_id' | 'createdAt' | 'updatedAt' | 'companyId' | 'ownerUserId' | 'state' | 'logs'>;

export type UpdateEntityDocument<T> = Partial<Omit<T, '_id' | 'createdAt' | 'updatedAt' | 'companyId' | 'ownerUserId' | 'state' | 'logs'>>;

export enum EntityCollection {
  COMPANY = 'COMPANY',
  PROBLEM = 'PROBLEM',
  CONTEST = 'CONTEST',
  JUDGE = 'JUDGE',
  USER = 'USER',
  SUBMISSION = 'SUBMISSION',
}

export enum CollectionKey {
  COMPANY = 'C',
  USER = 'U',
  PROBLEM = 'P',
  CLASS = 'K',
  CLASS_ASSIGNMENT = 'KA',
  CONTEST = 'T',
  SCOREBOARD = 'B',
  COURSE = 'R',
  FILE = 'F',
  GROUP = 'G',
  JUDGE = 'J',
  WORKSHEET = 'W',
  WORKSHEET_SUBMISSIONS = 'WS',
  SUBMIT = 'S',
  LOCALE = 'L',
}

export enum LogOperation {
  REMOVE = 'REMOVE',
  ADD = 'ADD',
  UPDATE = 'UPDATE'
}

export interface LogDataResponseDTO {
  changes: EntityLogChanges[],
  timestamp: number,
  customerUser: UserCompanyBasicInfoResponseDTO,
}
