export enum EntityMembersRank {
  NONE = 'NONE',
  CLOSE = 'CLOSE',
  OPEN = 'OPEN',
}

export enum EntityState {
  RELEASED = 'RELEASED',
  IN_REVIEW = 'IN_REVIEW',
  IN_DRAFT = 'IN_DRAFT',
  ARCHIVED = 'ARCHIVED',
}

export declare type EntityUsersMemberUserData = {
  userId: string;
  lastVisitTimestamp: number | null;
  joinedAtTimestamp: number;
};

export interface EntityMembers {
  rankAdministrators: EntityMembersRank,
  administrators: { [key: string]: EntityUsersMemberUserData },
  rankManagers: EntityMembersRank,
  managers: { [key: string]: EntityUsersMemberUserData },
  rankGuests: EntityMembersRank,
  guests: { [key: string]: EntityUsersMemberUserData },
  rankSpectators: EntityMembersRank,
  spectators: { [key: string]: EntityUsersMemberUserData },
  rankParticipants: EntityMembersRank,
  participants: { [key: string]: EntityUsersMemberUserData },
}

export interface EntityStateDocument {
  state: EntityState,
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

export type NewEntityDocument<T> = T & EntityCompanyDocument & EntityOwnerDocument & EntityTimestampsDocument;

export type CreateEntityDocument<T> = T;
