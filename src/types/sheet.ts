import { ProgrammingLanguage } from './commons';
import { SubmissionRunStatus } from './judge';

export enum SheetType {
  JK_MD = 'JK_MD',
  CODE_EDITOR = 'CODE_EDITOR',
  LIST = 'LIST',
  GRAPH = 'GRAPH',
  QUIZ_PROBLEM = 'QUIZ_PROBLEM',
  QUIZ_TEXT = 'QUIZ_TEXT',
  QUIZ_OPTIONS = 'QUIZ_OPTIONS',
  NEW_PAGE = 'NEW_PAGE',
}

type BasicSheetType = {
  id: string,
  type: SheetType,
  title: string,
  points: number,
}

export type JkmdSheetType = BasicSheetType & {
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
  testOut: string,
  withPE: boolean,
  sample: boolean,
  hidden: boolean,
  index: number,
}

export type CodeEditorTestCasesType = { [key: string]: CodeEditorTestCaseType };

export type SourceCodeType = { [key in ProgrammingLanguage]: string };

export type CodeEditorSheetType = BasicSheetType & {
  type: SheetType.CODE_EDITOR,
  sourceCode: SourceCodeType,
  testCases: CodeEditorTestCasesType,
  languages: ProgrammingLanguage[],
  height: 'auto' | number,
}

export type GraphSheetType = BasicSheetType & {
  type: SheetType.GRAPH,
  dots: string[],
}

export type QuizProblemSheetType = BasicSheetType & {
  type: SheetType.QUIZ_PROBLEM;
  description: string,
  solutionSourceCode: SourceCodeType;
  testCases: { [key: string]: CodeEditorTestCaseType & { hidden: boolean } };
  languages: ProgrammingLanguage[];
  height: 'auto' | number;
  scoringMode: 'TOTAL' | 'PARTIAL',
};

export type QuizTextSheetType = BasicSheetType & {
  type: SheetType.QUIZ_TEXT;
  description: string,
  answer: string;
  inputType: 'text' | 'number' | 'textarea';
};

export type QuizOptionsSheetType = BasicSheetType & {
  type: SheetType.QUIZ_OPTIONS;
  description: string,
  options: { label: string, correct: boolean }[],
  multiple: boolean,
  scoringMode: 'TOTAL' | 'PARTIAL',
};

export type ListSheetType = BasicSheetType & {
  type: SheetType.LIST,
  header: string,
  content: (JkmdSheetType | CodeEditorSheetType | GraphSheetType | QuizProblemSheetType | QuizTextSheetType | QuizOptionsSheetType)[],
  children: ListSheetType[],
}

export type NewPageSheetType = BasicSheetType & {
  type: SheetType.NEW_PAGE,
}

export type BodyNoteSheetType =
  JkmdSheetType
  | CodeEditorSheetType
  | ListSheetType
  | GraphSheetType
  | QuizProblemSheetType
  | QuizTextSheetType
  | QuizOptionsSheetType
  | NewPageSheetType;
