import type { EntityAccess, EntityMembersRank, EntityRole, MemberType, ShareLinkVisibility } from '../enums/index.js';
import type { EntityLogChanges } from '../types/index.js';
import type { UserOrganizationBasicInfoResponseDto } from './user.js';

export interface EntityMembersDto {
  rankAdministrators: EntityMembersRank;
  administrators: string[];
  rankManagers: EntityMembersRank;
  managers: string[];
  rankGuests: EntityMembersRank;
  guests: string[];
  rankSpectators: EntityMembersRank;
  spectators: string[];
  rankParticipants: EntityMembersRank;
  participants: string[];
}

export interface EntityMembersResponseDto {
  rankAdministrators: EntityMembersRank;
  administrators: { [key: string]: EntityMemberResponseDto };
  rankManagers: EntityMembersRank;
  managers: { [key: string]: EntityMemberResponseDto };
  rankGuests: EntityMembersRank;
  guests: { [key: string]: EntityMemberResponseDto };
  rankSpectators: EntityMembersRank;
  spectators: { [key: string]: EntityMemberResponseDto };
  rankParticipants: EntityMembersRank;
  participants: { [key: string]: EntityMemberResponseDto };
}

export interface EntityUserResponseDto {
  isOwner: boolean;
  isManager: boolean;
  isSpectator: boolean;
}

export interface EntityMemberResponseDto extends UserOrganizationBasicInfoResponseDto {
  type: MemberType;
}

export interface EntityMemberWithTimestampsResponseDto extends EntityMemberResponseDto {
  type: MemberType;
  lastVisitedAt: number;
  joinedAt: number;
}

export interface EntityMembersWithTimestampsResponseDto {
  rankAdministrators: EntityMembersRank;
  administrators: { [key: string]: EntityMemberWithTimestampsResponseDto };
  rankManagers: EntityMembersRank;
  managers: { [key: string]: EntityMemberWithTimestampsResponseDto };
  rankGuests: EntityMembersRank;
  guests: { [key: string]: EntityMemberWithTimestampsResponseDto };
  rankSpectators: EntityMembersRank;
  spectators: { [key: string]: EntityMemberWithTimestampsResponseDto };
  rankParticipants: EntityMembersRank;
  participants: { [key: string]: EntityMemberWithTimestampsResponseDto };
}

export interface EntityAccessMembersResponseDto {
  access: EntityAccess;
  managers: { [key: string]: EntityMemberResponseDto };
  spectators: { [key: string]: EntityMemberResponseDto };
}

export interface EntityCreateResponseDto {
  key: string;
}

export interface EntityOrganizationSummaryListResponseDto {
  key: string;
}

export interface EntityOrganizationSystemSummaryListResponseDto extends EntityOrganizationSummaryListResponseDto {
  name: string;
  id: string;
}

export interface EntityOwnerSystemSummaryListResponseDto {
  id: string;
  nickname: string;
  imageUrl: string;
  organization: EntityOrganizationSummaryListResponseDto;
}

export interface MetadataResponseDto {
  title: string;
  description: string;
  cover: string;
}

/**
 * Subject of a ReBAC tuple — discriminated union by subject type.
 * Mirrors the EntitySubjectType enum in the database.
 *
 * - USER:   a specific user (subjectType=USER, subjectId=userId)
 * - PUBLIC: wildcard — represents "everyone" (subjectType=PUBLIC, subjectId=0)
 * - GROUP can be added later when group subjects are surfaced.
 */
export type EntityGrantSubjectDto =
  | { type: 'USER'; id: string; user: UserOrganizationBasicInfoResponseDto }
  | { type: 'PUBLIC' };

/**
 * One ReBAC tuple: (relation, subject) for a single resource.
 * Pure tuple representation — modal renders user lists by filtering on subject.type.
 */
export interface EntityGrantDto {
  role: EntityRole;
  subject: EntityGrantSubjectDto;
  joinedAt: number;
  sourceLinkId?: string; // set when this grant was created via a share link
}

/**
 * Summary of a share link, for display in the share modal.
 * Create / revoke / list links use their own endpoints.
 */
export interface EntityShareLinkSummaryDto {
  id: string;
  token: string;
  role: EntityRole;
  visibility: ShareLinkVisibility;
  allowedUserIds: string[];
  expiresAt: number | null;
  maxUses: number | null;
  useCount: number;
  isActive: boolean;
  createdBy: string;
  createdAt: number;
}

/**
 * Full ReBAC view of a resource — consumed by the share/edit modal.
 * `grants` includes PUBLIC subjects too; the parent `access` field already
 * encodes the same fact as one of PRIVATE/RESTRICTED/PUBLIC/EXPOSED.
 */
export interface EntitySharingResponseDto {
  grants: EntityGrantDto[];
  links: EntityShareLinkSummaryDto[];
}

export interface LogDataResponseDto {
  changes: EntityLogChanges[];
  timestamp: number;
  customerUser: UserOrganizationBasicInfoResponseDto;
}
