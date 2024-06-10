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
  administrators: string[],
  managers: string[],
  participants: string[],
  guests: string[],
  spectators: string[],
}

export interface DocumentMembersResponseDTO {
  access: EntityAccess,
  administrators: { [key: string]: UserBasicInfoResponseDTO },
  managers: { [key: string]: UserBasicInfoResponseDTO },
  participants: { [key: string]: UserBasicInfoResponseDTO },
  guests: { [key: string]: UserBasicInfoResponseDTO },
  spectators: { [key: string]: UserBasicInfoResponseDTO },
}

export interface DocumentCreateResponseDTO {
  key: string,
}
