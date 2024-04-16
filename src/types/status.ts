import { CodeEditorSheetType, JkmdSheetType, SheetType } from './sheet';

export type QuizProblemSheetStatusType = Omit<CodeEditorSheetType, 'height' | 'languages' | 'type'> & {
  type: SheetType.QUIZ_PROBLEM
};

export type JkmdSheetStatusType = Omit<JkmdSheetType, 'content'> & { read: boolean };
