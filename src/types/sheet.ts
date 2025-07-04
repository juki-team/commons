import { CodeLanguage } from './commons';
import { Judge, SubmissionRunStatus } from './judge';

export enum WorksheetType {
  JK_MD = 'JK_MD',
  CODE_EDITOR = 'CODE_EDITOR',
  LIST = 'LIST',
  GRAPH = 'GRAPH',
  QUIZ_PROBLEM = 'QUIZ_PROBLEM',
  QUIZ_TEXT = 'QUIZ_TEXT',
  QUIZ_OPTIONS = 'QUIZ_OPTIONS',
  NEW_PAGE = 'NEW_PAGE',
}

export type BasicWorksheetType = {
  id: string,
  type: WorksheetType,
  title: string,
  points: number,
}

export type JkmdSheetType = BasicWorksheetType & {
  type: WorksheetType.JK_MD,
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
  messageTimestamp: number,
}

export type CodeEditorTestCasesType = { [key: string]: CodeEditorTestCaseType };

export type SourceCodeType = { [key in CodeLanguage]: string };

export type CodeEditorSheetType = BasicWorksheetType & {
  type: WorksheetType.CODE_EDITOR,
  sourceCode: SourceCodeType,
  testCases: CodeEditorTestCasesType,
  languages: CodeLanguage[],
  height: number,
}

export type GraphSheetType = BasicWorksheetType & {
  type: WorksheetType.GRAPH,
  dots: string[],
}

export type QuizProblemSheetType = BasicWorksheetType & {
  type: WorksheetType.QUIZ_PROBLEM;
  problemJudge: Judge,
  problemKey: string,
  languages: CodeLanguage[];
  height: number;
};

export type QuizTextSheetType = BasicWorksheetType & {
  type: WorksheetType.QUIZ_TEXT;
  description: string,
  answer: string;
  inputType: 'text' | 'number' | 'textarea';
};

export type QuizOptionsSheetType = BasicWorksheetType & {
  type: WorksheetType.QUIZ_OPTIONS;
  description: string,
  options: { label: string, correct: boolean, id: string }[],
  multiple: boolean,
  scoringMode: 'TOTAL' | 'PARTIAL',
};

export type ListSheetType = BasicWorksheetType & {
  type: WorksheetType.LIST,
  header: string,
  content: (JkmdSheetType | CodeEditorSheetType | GraphSheetType | QuizProblemSheetType | QuizTextSheetType | QuizOptionsSheetType)[],
  children: ListSheetType[],
}

export type NewPageSheetType = BasicWorksheetType & {
  type: WorksheetType.NEW_PAGE,
}

export type BodyWorksheetType =
  JkmdSheetType
  | CodeEditorSheetType
  | ListSheetType
  | GraphSheetType
  | QuizProblemSheetType
  | QuizTextSheetType
  | QuizOptionsSheetType
  | NewPageSheetType;
