import type { UserOrganizationBasicInfoResponseDTO } from '../dto/index.js';
import type { EntityMembersRank, EntityState, LogOperation } from '../enums/index.js';

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

export interface EntityCompanyDocument {
  companyId: string;
}

export interface EntityTimestampsDocument {
  createdAt: Date;
  updatedAt: Date;
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
  EntityCompanyDocument &
  EntityOwnerDocument &
  EntityTimestampsDocument &
  EntityStateDocument &
  EntityLogsDocument;

export type CreateEntityDocument<T> = Omit<
  T,
  '_id' | 'createdAt' | 'updatedAt' | 'companyId' | 'ownerUserId' | 'state' | 'logs'
>;

export type UpdateEntityDocument<T> = Partial<
  Omit<T, '_id' | 'createdAt' | 'updatedAt' | 'companyId' | 'ownerUserId' | 'state' | 'logs' | 'key'>
>;

export interface LogDataResponseDTO {
  changes: EntityLogChanges[];
  timestamp: number;
  customerUser: UserOrganizationBasicInfoResponseDTO;
}
