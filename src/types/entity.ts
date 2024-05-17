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

export interface EntityMembersDocument {
  allAdministrators: boolean,
  administrators: { [key: string]: EntityUsersMemberUserData },
  allManagers: boolean,
  managers: { [key: string]: EntityUsersMemberUserData },
  allGuests: boolean,
  guests: { [key: string]: EntityUsersMemberUserData },
  allSpectators: boolean,
  spectators: { [key: string]: EntityUsersMemberUserData },
  allParticipants: boolean,
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
