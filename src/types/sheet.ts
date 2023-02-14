import { EntityStatus, ProgrammingLanguage } from './commons';
import { SubmissionRunStatus } from './judge';

export enum SheetStatus {
  PUBLIC = EntityStatus.PUBLIC,
  PRIVATE = EntityStatus.PRIVATE,
  ARCHIVED = EntityStatus.ARCHIVED,
}

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
}

export type BodySheetType = JkmdSheetType | CodeEditorSheetType;

export enum SheetRole {
  RESTRICTED = 'RESTRICTED',
  GUEST = 'GUEST',
  REGULAR = 'REGULAR',
  MANAGER = 'MANAGER',
  SUPER_ADMIN = 'SUPER_ADMIN'
}
