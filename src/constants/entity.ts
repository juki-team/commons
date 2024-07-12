import { DocumentMembersResponseDTO, EntityMembersResponseDTO } from '../dto';
import { EntityAccess, EntityMembersRank } from '../types';

export const EMPTY_DOCUMENT_MEMBERS = (): DocumentMembersResponseDTO => ({
  access: EntityAccess.PRIVATE,
  managers: {},
  spectators: {},
});

export const EMPTY_ENTITY_MEMBERS = (): EntityMembersResponseDTO => ({
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
