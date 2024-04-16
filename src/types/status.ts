import { CodeEditorSheetType, JkmdSheetType } from './sheet';

export type CodeEditorSheetStatusType = Omit<CodeEditorSheetType, 'height' | 'languages'>;

export type JkmdSheetStatusType = Omit<JkmdSheetType, 'content'> & { read: boolean };
