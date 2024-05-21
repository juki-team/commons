import { EntityMembers } from './entity';
import { FileState } from './file';
import { BodyNoteSheetType } from './sheet';

export interface WorksheetBaseDocument {
  folderId: string,
  name: string,
  description: string,
  content: BodyNoteSheetType[],
  isSolvable: boolean,
  state: FileState,
  members: EntityMembers,
}
