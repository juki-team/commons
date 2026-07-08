import type { EntityMembersRank, EntityState, LogOperation } from '../enums/index.js';

export type EntityUsersMemberUserData = {
  userId: string;
  lastVisitedAt: number | null;
  joinedAt: number;
};

export type EntityTeamsMemberUserData = {
  teamId: string;
  lastVisitedAt: number | null;
  joinedAt: number;
};

export type EntityMembersUserData = EntityUsersMemberUserData | EntityTeamsMemberUserData;

export interface EntityMembers {
  rankAdministrators: EntityMembersRank;
  administrators: { [key: string]: EntityMembersUserData };
  rankManagers: EntityMembersRank;
  managers: { [key: string]: EntityMembersUserData };
  rankGuests: EntityMembersRank;
  guests: { [key: string]: EntityMembersUserData };
  rankSpectators: EntityMembersRank;
  spectators: { [key: string]: EntityMembersUserData };
  rankParticipants: EntityMembersRank;
  participants: { [key: string]: EntityMembersUserData };
}

export interface EntityOwnerDocument {
  ownerUserId: string;
}

export interface EntityOrganizationDocument {
  organizationId: string;
}

export interface EntityTimestampsDocument {
  createdAt: number;
  updatedAt: number;
}

export interface EntityStateDocument {
  state: EntityState;
}

export interface EntityLogChanges {
  key: string;
  path: string;
  valueType: string | null;
  value?: unknown;
  oldValue?: unknown;
  type: LogOperation;
}

export interface EntityLog {
  changes: EntityLogChanges[];
  timestamp: number;
  customerUserId: string;
}

export interface EntityLogsDocument {
  logs: EntityLog[];
}

export type NewEntityDocument<T> = T &
  EntityOrganizationDocument &
  EntityOwnerDocument &
  EntityTimestampsDocument &
  EntityStateDocument &
  EntityLogsDocument;

export type CreateEntityDocument<T> = Omit<
  T,
  '_id' | 'createdAt' | 'updatedAt' | 'organizationId' | 'ownerUserId' | 'state' | 'logs'
>;

export type UpdateEntityDocument<T> = Partial<
  Omit<T, '_id' | 'createdAt' | 'updatedAt' | 'organizationId' | 'ownerUserId' | 'state' | 'logs' | 'key'>
>;
