import type { EntityMembersDTO, EntityMembersResponseDTO } from '../dto/index.js';
import {
  EntityAccess,
  type EntityMembers,
  EntityMembersRank,
  type EntityTeamsMemberUserData,
  type EntityUsersMemberUserData,
} from '../types/index.js';

export const getDocumentAccess = (
  document:
    | {
        members: Pick<
          EntityMembers,
          'rankAdministrators' | 'rankManagers' | 'rankGuests' | 'rankSpectators' | 'rankParticipants'
        >;
      }
    | undefined,
): EntityAccess => {
  const members = document?.members;
  const adminRank = members?.rankAdministrators;
  const adminClosed = adminRank === EntityMembersRank.NONE || adminRank === EntityMembersRank.CLOSE;
  if (!adminClosed) return EntityAccess.PRIVATE;

  const spectatorsOpen = members?.rankSpectators === EntityMembersRank.OPEN;
  const managersOpen = members?.rankManagers === EntityMembersRank.OPEN;
  const managersClose = members?.rankManagers === EntityMembersRank.CLOSE;

  if (spectatorsOpen && managersOpen) return EntityAccess.EXPOSED;
  if (spectatorsOpen && managersClose) return EntityAccess.PUBLIC;
  if (managersClose) return EntityAccess.RESTRICTED;
  return EntityAccess.PRIVATE;
};

export const isUserMember = (member: { userId?: string; teamId?: string }): member is EntityUsersMemberUserData => {
  return typeof member.userId === 'string';
};

export const isTeamMember = (member: { userId?: string; teamId?: string }): member is EntityTeamsMemberUserData => {
  return typeof member.teamId === 'string';
};

export const toEntityMembersDTO = (members: EntityMembersResponseDTO): EntityMembersDTO => {
  return {
    rankAdministrators: members.rankAdministrators,
    administrators: Object.keys(members.administrators),
    rankManagers: members.rankManagers,
    managers: Object.keys(members.managers),
    rankParticipants: members.rankParticipants,
    participants: Object.keys(members.participants),
    rankGuests: members.rankGuests,
    guests: Object.keys(members.guests),
    rankSpectators: members.rankSpectators,
    spectators: Object.keys(members.spectators),
  };
};
