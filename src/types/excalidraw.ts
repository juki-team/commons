import { EntityMembers } from './entity.js';

export interface ExcalidrawBaseDocument {
  key: string,
  name: string,
  elements: any,
  appState: any,
  members: EntityMembers,
  tags: string[],
}
