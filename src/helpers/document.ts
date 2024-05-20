import { EntityAccess, EntityMembers, EntityMembersRank } from '../types';

export const getDocumentAccess = (document: { members: EntityMembers }): EntityAccess => {
  switch (true) {
    case document.members?.rankAdministrators === EntityMembersRank.NONE
    && document.members?.rankManagers === EntityMembersRank.OPEN
    && document.members?.rankGuests === EntityMembersRank.NONE
    && document.members?.rankSpectators === EntityMembersRank.OPEN
    && document.members?.rankParticipants === EntityMembersRank.NONE:
      return EntityAccess.EXPOSED;
    case document.members?.rankAdministrators === EntityMembersRank.NONE
    && document.members?.rankManagers === EntityMembersRank.CLOSE
    && document.members?.rankGuests === EntityMembersRank.NONE
    && document.members?.rankSpectators === EntityMembersRank.OPEN
    && document.members?.rankParticipants === EntityMembersRank.NONE:
      return EntityAccess.PUBLIC;
    case document.members?.rankAdministrators === EntityMembersRank.NONE
    && document.members?.rankManagers === EntityMembersRank.CLOSE
    && document.members?.rankGuests === EntityMembersRank.NONE
    && document.members?.rankSpectators === EntityMembersRank.CLOSE
    && document.members?.rankParticipants === EntityMembersRank.NONE:
      return EntityAccess.RESTRICTED;
    case document.members?.rankAdministrators === EntityMembersRank.NONE
    && document.members?.rankManagers === EntityMembersRank.NONE
    && document.members?.rankGuests === EntityMembersRank.NONE
    && document.members?.rankSpectators === EntityMembersRank.NONE
    && document.members?.rankParticipants === EntityMembersRank.NONE:
      return EntityAccess.PRIVATE;
    default:
      return EntityAccess.PRIVATE;
  }
};
