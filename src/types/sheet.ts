import { ProgrammingLanguage } from './commons';
import { SubmissionRunStatus } from './judge';

export enum SheetType {
  JK_MD = 'JK_MD',
  CODE_EDITOR = 'CODE_EDITOR',
  LIST = 'LIST',
  GRAPH = 'GRAPH',
}

export type JkmdSheetType = {
  type: SheetType.JK_MD,
  content: string,
}

export type SubmissionTestCaseType = {
  out: string,
  err: string,
  log: string,
  status: SubmissionRunStatus,
}

export interface CodeEditorTestCaseType extends SubmissionTestCaseType {
  key: string,
  in: string,
  sample: boolean,
  index: number,
}

export type CodeEditorTestCasesType = { [key: string]: CodeEditorTestCaseType };

export type SourceCodeType = { [key in ProgrammingLanguage]: string };

export type CodeEditorSheetType = {
  type: SheetType.CODE_EDITOR,
  sourceCode: SourceCodeType,
  testCases: CodeEditorTestCasesType,
  languages: ProgrammingLanguage[],
  height: 'auto' | number,
}

export type ListSheetType = {
  type: SheetType.LIST,
  header: string,
  content: (JkmdSheetType | CodeEditorSheetType)[],
  children: ListSheetType[],
}

export type GraphSheetType = {
  type: SheetType.GRAPH,
  dots: string[],
}

export type BodyNoteSheetType = JkmdSheetType | CodeEditorSheetType | ListSheetType | GraphSheetType;
