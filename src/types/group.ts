import type { EntityState, GroupType } from '../enums/index.js';
import type { EntityMembers } from './entity.js';

export interface GroupBaseDocument {
  name: string;
  description: string;
  state: EntityState;
  types: GroupType;
  members: EntityMembers;
  /*
  administrators > CLASS:teacher, TEAM:coach
  managers > CLASS:co-teacher, TEAM:co-coach
  guests > invite users
  spectators > -
  participants > accepted users
  */
}
