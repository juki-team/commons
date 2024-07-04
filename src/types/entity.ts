import { UserBasicInfoResponseDTO } from '../dto';

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

export type NewEntityDocument<T> =
  T
  & EntityCompanyDocument
  & EntityOwnerDocument
  & EntityTimestampsDocument
  & EntityStateDocument;

export type CreateEntityDocument<T> = Omit<T, '_id' | 'createdAt' | 'updatedAt' | 'companyId' | 'ownerUserId' | 'state'>;

export type UpdateEntityDocument<T> = Partial<Omit<T, '_id' | 'createdAt' | 'updatedAt' | 'companyId' | 'ownerUserId' | 'state'>>;

export enum EntityCollection {
  COMPANY = 'COMPANY',
  PROBLEM = 'PROBLEM',
  CONTEST = 'CONTEST',
  USER = 'USER',
}

export enum CollectionKey {
  COMPANY = 'C',
  USER = 'U',
  PROBLEM = 'P',
  CLASS = 'K',
  CONTEST = 'T',
  COURSE = 'R',
  FILE = 'F',
  GROUP = 'G',
  JUDGE = 'J',
  WORKSHEET = 'W',
  SUBMIT = 'S',
}

export enum LogOperation {
  REMOVE = 'REMOVE',
  ADD = 'ADD',
  UPDATE = 'UPDATE'
}

export interface LogDataResponseDTO {
  type: LogOperation,
  key: string,
  path: string,
  valueType: string | null,
  value?: any,
  oldValue?: any,
  timestamp: number,
  customerUser: UserBasicInfoResponseDTO,
}
