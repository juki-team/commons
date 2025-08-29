import { EntityAccess, EntityMembersRank } from '../types';
import { UserCompanyBasicInfoResponseDTO } from './user';

export interface EntityMembersDTO {
  rankAdministrators: EntityMembersRank,
  administrators: string[],
  rankManagers: EntityMembersRank,
  managers: string[],
  rankGuests: EntityMembersRank,
  guests: string[],
  rankSpectators: EntityMembersRank,
  spectators: string[],
  rankParticipants: EntityMembersRank,
  participants: string[],
}

export interface EntityMembersResponseDTO {
  rankAdministrators: EntityMembersRank,
  administrators: { [key: string]: DocumentMemberResponseDTO },
  rankManagers: EntityMembersRank,
  managers: { [key: string]: DocumentMemberResponseDTO },
  rankGuests: EntityMembersRank,
  guests: { [key: string]: DocumentMemberResponseDTO },
  rankSpectators: EntityMembersRank,
  spectators: { [key: string]: DocumentMemberResponseDTO },
  rankParticipants: EntityMembersRank,
  participants: { [key: string]: DocumentMemberResponseDTO },
}

export interface DocumentUserResponseDTO {
  isOwner: boolean,
  isManager: boolean,
  isSpectator: boolean,
}

export enum MemberType {
  USER = 'USER',
  TEAM = 'TEAM',
}

export interface DocumentMemberResponseDTO extends UserCompanyBasicInfoResponseDTO {
  type: MemberType;
}

export interface DocumentMemberWithTimestampsResponseDTO extends DocumentMemberResponseDTO {
  type: MemberType,
  lastVisitTimestamp: number,
  joinedAtTimestamp: number,
}

export interface EntityMembersWithTimestampsResponseDTO {
  rankAdministrators: EntityMembersRank,
  administrators: { [key: string]: DocumentMemberWithTimestampsResponseDTO },
  rankManagers: EntityMembersRank,
  managers: { [key: string]: DocumentMemberWithTimestampsResponseDTO },
  rankGuests: EntityMembersRank,
  guests: { [key: string]: DocumentMemberWithTimestampsResponseDTO },
  rankSpectators: EntityMembersRank,
  spectators: { [key: string]: DocumentMemberWithTimestampsResponseDTO },
  rankParticipants: EntityMembersRank,
  participants: { [key: string]: DocumentMemberWithTimestampsResponseDTO },
}

export interface DocumentMembersResponseDTO {
  access: EntityAccess,
  managers: { [key: string]: DocumentMemberResponseDTO },
  spectators: { [key: string]: DocumentMemberResponseDTO },
}

export interface DocumentCreateResponseDTO {
  key: string,
}
