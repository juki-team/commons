import { EntityMembers, EntityState } from './entity';

export enum GroupState {
  RELEASED = EntityState.RELEASED,
  ARCHIVED = EntityState.ARCHIVED,
}

export enum GroupType {
  CLASS = 'CLASS',
  TEAM = 'TEAM',
}

export interface GroupBaseDocument {
  name: string,
  description: string,
  state: GroupState,
  types: GroupType,
  members: EntityMembers,
  /*
  administrators > CLASS:teacher, TEAM:coach
  managers > CLASS:co-teacher, TEAM:co-coach
  guests > invite users
  spectators > -
  participants > accepted users
  */
}
