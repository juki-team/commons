import type { EntityAccess, EntityMembersRank, EntityRole, MemberType, ShareLinkVisibility } from '../enums/index.js';
import type { UserOrganizationBasicInfoResponseDTO } from './user.js';

export interface EntityMembersDTO {
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

export interface EntityMembersResponseDTO {
  rankAdministrators: EntityMembersRank;
  administrators: { [key: string]: DocumentMemberResponseDTO };
  rankManagers: EntityMembersRank;
  managers: { [key: string]: DocumentMemberResponseDTO };
  rankGuests: EntityMembersRank;
  guests: { [key: string]: DocumentMemberResponseDTO };
  rankSpectators: EntityMembersRank;
  spectators: { [key: string]: DocumentMemberResponseDTO };
  rankParticipants: EntityMembersRank;
  participants: { [key: string]: DocumentMemberResponseDTO };
}

export interface DocumentUserResponseDTO {
  isOwner: boolean;
  isManager: boolean;
  isSpectator: boolean;
}

export interface DocumentMemberResponseDTO extends UserOrganizationBasicInfoResponseDTO {
  type: MemberType;
}

export interface DocumentMemberWithTimestampsResponseDTO extends DocumentMemberResponseDTO {
  type: MemberType;
  lastVisitedAt: number;
  joinedAt: number;
}

export interface EntityMembersWithTimestampsResponseDTO {
  rankAdministrators: EntityMembersRank;
  administrators: { [key: string]: DocumentMemberWithTimestampsResponseDTO };
  rankManagers: EntityMembersRank;
  managers: { [key: string]: DocumentMemberWithTimestampsResponseDTO };
  rankGuests: EntityMembersRank;
  guests: { [key: string]: DocumentMemberWithTimestampsResponseDTO };
  rankSpectators: EntityMembersRank;
  spectators: { [key: string]: DocumentMemberWithTimestampsResponseDTO };
  rankParticipants: EntityMembersRank;
  participants: { [key: string]: DocumentMemberWithTimestampsResponseDTO };
}

export interface DocumentMembersResponseDTO {
  access: EntityAccess;
  managers: { [key: string]: DocumentMemberResponseDTO };
  spectators: { [key: string]: DocumentMemberResponseDTO };
}

export interface DocumentCreateResponseDTO {
  key: string;
}

export interface MetadataResponseDTO {
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
export type EntityGrantSubjectDTO =
  | { type: 'USER'; id: string; user: UserOrganizationBasicInfoResponseDTO }
  | { type: 'PUBLIC' };

/**
 * One ReBAC tuple: (relation, subject) for a single resource.
 * Pure tuple representation — modal renders user lists by filtering on subject.type.
 */
export interface EntityGrantDTO {
  role: EntityRole;
  subject: EntityGrantSubjectDTO;
  joinedAt: number;
  sourceLinkId?: string; // set when this grant was created via a share link
}

/**
 * Summary of a share link, for display in the share modal.
 * Create / revoke / list links use their own endpoints.
 */
export interface EntityShareLinkSummaryDTO {
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
export interface EntitySharingResponseDTO {
  grants: EntityGrantDTO[];
  links: EntityShareLinkSummaryDTO[];
}
