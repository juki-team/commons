import { UserBasicInfoResponseDTO } from './user';

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

export type EntityMembersResponseDTO = {
  administrators: { [key: string]: UserBasicInfoResponseDTO },
  managers: { [key: string]: UserBasicInfoResponseDTO },
  guests: { [key: string]: UserBasicInfoResponseDTO },
  spectators: { [key: string]: UserBasicInfoResponseDTO },
  participants: { [key: string]: UserBasicInfoResponseDTO },
}
