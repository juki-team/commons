import { EntityAccess, EntityMembersRank } from '../types';
import { UserBasicInfoResponseDTO } from './user';

export interface EntityMembersDTO {
  rankAdministrators?: EntityMembersRank,
  administrators?: string[],
  rankManagers?: EntityMembersRank,
  managers?: string[],
  rankGuests?: EntityMembersRank,
  guests?: string[],
  rankSpectators?: EntityMembersRank,
  spectators?: string[],
  rankParticipants?: EntityMembersRank,
  participants?: string[],
}

export interface EntityMembersResponseDTO {
  rankAdministrators: EntityMembersRank,
  administrators: { [key: string]: UserBasicInfoResponseDTO },
  rankManagers: EntityMembersRank,
  managers: { [key: string]: UserBasicInfoResponseDTO },
  rankGuests: EntityMembersRank,
  guests: { [key: string]: UserBasicInfoResponseDTO },
  rankSpectators: EntityMembersRank,
  spectators: { [key: string]: UserBasicInfoResponseDTO },
  rankParticipants: EntityMembersRank,
  participants: { [key: string]: UserBasicInfoResponseDTO },
}

export interface DocumentUserResponseDTO {
  isOwner: boolean,
  isManager: boolean,
  isSpectator: boolean,
}

export interface DocumentMembersDTO {
  access: EntityAccess,
  managers?: string[],
  spectators?: string[],
}

export interface DocumentMembersResponseDTO {
  access: EntityAccess,
  managers: { [key: string]: UserBasicInfoResponseDTO },
  spectators: { [key: string]: UserBasicInfoResponseDTO },
}
