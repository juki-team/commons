export interface EntityMembersDTO {
  allAdministrators?: boolean,
  administrators?: string[],
  allManagers?: boolean,
  managers?: string[],
  allGuests?: boolean,
  guests?: string[],
  allSpectators?: boolean,
  spectators?: string[],
  allParticipants?: boolean,
  participants?: string[],
}
