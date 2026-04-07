import type { SubmissionRunStatus } from '../prisma/enums/index.js';
import type { CodeLanguage } from './commons.js';

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

export type BasicWorksheet = {
  id: string;
  type: WorksheetType;
  title: string;
  points: number;
};

export type JkmdSheet = BasicWorksheet & {
  type: WorksheetType.JK_MD;
  content: string;
};

export type SubmissionTestCase = {
  out: string;
  err: string;
  log: string;
  status: SubmissionRunStatus;
};

export interface CodeEditorTestCase extends SubmissionTestCase {
  key: string;
  in: string;
  testOut: string;
  withPE: boolean;
  sample: boolean;
  hidden: boolean;
  index: number;
  messageTimestamp: number;
}

export type CodeEditorFile<T> = {
  description: string;
  folderPath: string;
  source: string;
  language: T;
  index: number;
  name: string;
  hidden: boolean;
  readonly: boolean;
  protected: boolean;
};

export type CodeEditorFiles<T> = { [key: string /*name*/]: CodeEditorFile<T> };

export type CodeEditorTestCases = { [key: string]: CodeEditorTestCase };

export type CodeEditorSheet = BasicWorksheet & {
  type: WorksheetType.CODE_EDITOR;
  files: CodeEditorFiles<CodeLanguage>;
  testCases: CodeEditorTestCases;
  languages: CodeLanguage[];
  height: number;
};

export type GraphSheet = BasicWorksheet & {
  type: WorksheetType.GRAPH;
  dots: string[];
};

export type QuizProblemSheet = BasicWorksheet & {
  type: WorksheetType.QUIZ_PROBLEM;
  problemKey: string;
  languages: CodeLanguage[];
  height: number;
};

export type QuizTextSheet = BasicWorksheet & {
  type: WorksheetType.QUIZ_TEXT;
  description: string;
  answer: string;
  inputType: 'text' | 'number' | 'textarea';
};

export enum QuizScoringMode {
  TOTAL = 'TOTAL',
  PARTIAL = 'PARTIAL',
}

export type QuizOptionsSheet = BasicWorksheet & {
  type: WorksheetType.QUIZ_OPTIONS;
  description: string;
  options: { label: string; correct: boolean; id: string }[];
  multiple: boolean;
  scoringMode: QuizScoringMode;
};

export type ListSheet = BasicWorksheet & {
  type: WorksheetType.LIST;
  header: string;
  content: (JkmdSheet | CodeEditorSheet | GraphSheet | QuizProblemSheet | QuizTextSheet | QuizOptionsSheet)[];
  children: ListSheet[];
};

export type NewPageSheet = BasicWorksheet & {
  type: WorksheetType.NEW_PAGE;
};

export type BodyWorksheet =
  | JkmdSheet
  | CodeEditorSheet
  | ListSheet
  | GraphSheet
  | QuizProblemSheet
  | QuizTextSheet
  | QuizOptionsSheet
  | NewPageSheet;
