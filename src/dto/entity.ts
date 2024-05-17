import { EntityMembersRank } from '../types';
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

export type EntityMembersResponseDTO = {
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
