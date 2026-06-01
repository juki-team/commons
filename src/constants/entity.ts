import type { EntityAccessMembersResponseDto, EntityMembersResponseDto } from '../dto/index.js';
import { EntityAccess, EntityMembersRank } from '../enums/index.js';

export const EMPTY_DOCUMENT_MEMBERS = (): EntityAccessMembersResponseDto => ({
  access: EntityAccess.PRIVATE,
  managers: {},
  spectators: {},
});

export const EMPTY_ENTITY_MEMBERS = (): EntityMembersResponseDto => ({
  rankAdministrators: EntityMembersRank.CLOSE,
  administrators: {},
  rankManagers: EntityMembersRank.CLOSE,
  managers: {},
  rankGuests: EntityMembersRank.CLOSE,
  guests: {},
  rankSpectators: EntityMembersRank.CLOSE,
  spectators: {},
  rankParticipants: EntityMembersRank.CLOSE,
  participants: {},
});
