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
  allAdministrators: boolean,
  administrators: { [key: string]: UserBasicInfoResponseDTO },
  allManagers: boolean,
  managers: { [key: string]: UserBasicInfoResponseDTO },
  allGuests: boolean,
  guests: { [key: string]: UserBasicInfoResponseDTO },
  allSpectators: boolean,
  spectators: { [key: string]: UserBasicInfoResponseDTO },
  allParticipants: boolean,
  participants: { [key: string]: UserBasicInfoResponseDTO },
}
