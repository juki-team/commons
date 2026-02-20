import { EntityMembers } from './entity';

export interface ExcalidrawBaseDocument {
  key: string,
  name: string,
  elements: any,
  appState: any,
  members: EntityMembers,
}
