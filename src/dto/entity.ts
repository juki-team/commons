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

export enum MemberType {
  USER = 'USER',
  TEAM = 'TEAM',
}

export interface DocumentMemberResponseDTO extends UserBasicInfoResponseDTO {
  type: MemberType;
}

export interface DocumentMembersResponseDTO {
  access: EntityAccess,
  administrators: { [key: string]: DocumentMemberResponseDTO },
  managers: { [key: string]: DocumentMemberResponseDTO },
  participants: { [key: string]: DocumentMemberResponseDTO },
  guests: { [key: string]: DocumentMemberResponseDTO },
  spectators: { [key: string]: DocumentMemberResponseDTO },
}

export interface DocumentCreateResponseDTO {
  key: string,
}
