import { ProgrammingLanguage } from './commons';
import { SubmissionRunStatus } from './judge';

export type JkmdSheetType = {
  type: 'jkmd',
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
  type: 'code-editor',
  sourceCode: SourceCodeType,
  testCases: CodeEditorTestCasesType,
  languages: ProgrammingLanguage[],
  height: 'auto' | number,
}

export type ListSheetType = {
  type: 'list',
  title: string,
  description: string,
  content: BodyNoteSheetType,
  children: BodyNoteSheetType[],
}

export type BodyNoteSheetType = JkmdSheetType | CodeEditorSheetType | ListSheetType;
