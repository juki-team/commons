import {
  EntityAccess,
  EntityMembers,
  EntityMembersRank,
  EntityTeamsMemberUserData,
  EntityUsersMemberUserData,
} from '../types';

export const getDocumentAccess = (document: { members: EntityMembers } | undefined): EntityAccess => {
  switch (true) {
    case document?.members?.rankAdministrators === EntityMembersRank.NONE
    && document?.members?.rankManagers === EntityMembersRank.OPEN
    && document?.members?.rankGuests === EntityMembersRank.NONE
    && document?.members?.rankSpectators === EntityMembersRank.OPEN
    && document?.members?.rankParticipants === EntityMembersRank.NONE:
      return EntityAccess.EXPOSED;
    case document?.members?.rankAdministrators === EntityMembersRank.NONE
    && document?.members?.rankManagers === EntityMembersRank.CLOSE
    && document?.members?.rankGuests === EntityMembersRank.NONE
    && document?.members?.rankSpectators === EntityMembersRank.OPEN
    && document?.members?.rankParticipants === EntityMembersRank.NONE:
      return EntityAccess.PUBLIC;
    case document?.members?.rankAdministrators === EntityMembersRank.NONE
    && document?.members?.rankManagers === EntityMembersRank.CLOSE
    && document?.members?.rankGuests === EntityMembersRank.NONE
    && document?.members?.rankSpectators === EntityMembersRank.CLOSE
    && document?.members?.rankParticipants === EntityMembersRank.NONE:
      return EntityAccess.RESTRICTED;
    case document?.members?.rankAdministrators === EntityMembersRank.NONE
    && document?.members?.rankManagers === EntityMembersRank.NONE
    && document?.members?.rankGuests === EntityMembersRank.NONE
    && document?.members?.rankSpectators === EntityMembersRank.NONE
    && document?.members?.rankParticipants === EntityMembersRank.NONE:
      return EntityAccess.PRIVATE;
    default:
      return EntityAccess.PRIVATE;
  }
};


export const isUserMember = (member: { userId?: string, teamId?: string }): member is EntityUsersMemberUserData => {
  return typeof member.userId === 'string';
  
};

export const isTeamMember = (member: { userId?: string, teamId?: string }): member is EntityTeamsMemberUserData => {
  return typeof member.teamId === 'string';
};
