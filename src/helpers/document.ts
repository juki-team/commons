import { EntityAccess, type EntityMembers, EntityMembersRank } from '../types/index.js';

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
