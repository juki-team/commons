import { EntityAccess, EntityLogChanges, EntityMembersRank } from '../types/index.js';
import { UserOrganizationBasicInfoResponseDto } from './user.js';

export interface EntityMembersDto {
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

export interface EntityMembersResponseDto {
  rankAdministrators: EntityMembersRank,
  administrators: { [key: string]: DocumentMemberResponseDto },
  rankManagers: EntityMembersRank,
  managers: { [key: string]: DocumentMemberResponseDto },
  rankGuests: EntityMembersRank,
  guests: { [key: string]: DocumentMemberResponseDto },
  rankSpectators: EntityMembersRank,
  spectators: { [key: string]: DocumentMemberResponseDto },
  rankParticipants: EntityMembersRank,
  participants: { [key: string]: DocumentMemberResponseDto },
}

export interface DocumentUserResponseDto {
  isOwner: boolean,
  isManager: boolean,
  isSpectator: boolean,
}

export enum MemberType {
  USER = 'USER',
  TEAM = 'TEAM',
}

export interface DocumentMemberResponseDto extends UserOrganizationBasicInfoResponseDto {
  type: MemberType;
}

export interface DocumentMemberWithTimestampsResponseDto extends DocumentMemberResponseDto {
  type: MemberType,
  lastVisitedAt: number,
  joinedAt: number,
}

export interface EntityMembersWithTimestampsResponseDto {
  rankAdministrators: EntityMembersRank,
  administrators: { [key: string]: DocumentMemberWithTimestampsResponseDto },
  rankManagers: EntityMembersRank,
  managers: { [key: string]: DocumentMemberWithTimestampsResponseDto },
  rankGuests: EntityMembersRank,
  guests: { [key: string]: DocumentMemberWithTimestampsResponseDto },
  rankSpectators: EntityMembersRank,
  spectators: { [key: string]: DocumentMemberWithTimestampsResponseDto },
  rankParticipants: EntityMembersRank,
  participants: { [key: string]: DocumentMemberWithTimestampsResponseDto },
}

export interface DocumentMembersResponseDto {
  access: EntityAccess,
  managers: { [key: string]: DocumentMemberResponseDto },
  spectators: { [key: string]: DocumentMemberResponseDto },
}

export interface DocumentCreateResponseDto {
  key: string,
}

export interface MetadataResponseDto {
  title: string,
  description: string,
  cover: string,
}

export interface LogDataResponseDto {
  changes: EntityLogChanges[];
  timestamp: number;
  customerUser: UserOrganizationBasicInfoResponseDto;
}
