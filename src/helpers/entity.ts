import type { EntityMembersDTO, EntityMembersResponseDTO } from '../dto/index.js';
import type { EntityTeamsMemberUserData, EntityUsersMemberUserData } from '../types/index.js';

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
