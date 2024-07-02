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

export type EntityBaseDocumentTypes = Date | number | string;

export type EntityBaseDocumentType = { [key: string]: EntityBaseDocumentTypes };

export type NewEntityDocument<T> =
  T
  & EntityCompanyDocument
  & EntityOwnerDocument
  & EntityTimestampsDocument;

export type CreateEntityDocument<T> = Omit<T, '_id' | 'createdAt' | 'updatedAt' | 'companyId' | 'ownerUserId'>;

export type UpdateEntityDocument<T> = Partial<Omit<T, '_id' | 'createdAt' | 'updatedAt' | 'companyId' | 'ownerUserId'>>;

export enum EntityCollections {
  PROBLEMS = 'PROBLEMS',
  CONTESTS = 'CONTESTS',
  USERS = 'USERS',
}
