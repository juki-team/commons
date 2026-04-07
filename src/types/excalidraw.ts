import type { EntityMembers } from './entity.js';

export interface ExcalidrawBaseDocument {
  key: string;
  name: string;
  elements: unknown;
  appState: unknown;
  members: EntityMembers;
  tags: string[];
}
