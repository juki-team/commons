import type { AspectRatio, CodeLanguage, QuizScoringMode, SubmissionRunStatus, Theme, WorksheetType } from '../enums/index.js';
import type { EntityMembers } from './entity.js';

export type BasicWorksheet = {
  id: string;
  type: WorksheetType;
  title: string;
  points: number;
};

export type JkmdSheet = BasicWorksheet & {
  type: typeof WorksheetType.JK_MD;
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
  active: boolean;
};

export type CodeEditorFiles<T> = { [key: string]: CodeEditorFile<T> };

export type CodeEditorTestCases = { [key: string]: CodeEditorTestCase };

export type CodeEditorSheet = BasicWorksheet & {
  type: typeof WorksheetType.CODE_EDITOR;
  files: CodeEditorFiles<CodeLanguage>;
  testCases: CodeEditorTestCases;
  languages: CodeLanguage[];
  height: number;
};

export type GraphSheet = BasicWorksheet & {
  type: typeof WorksheetType.GRAPH;
  dots: string[];
};

export type QuizProblemSheet = BasicWorksheet & {
  type: typeof WorksheetType.QUIZ_PROBLEM;
  problemKey: string;
  languages: CodeLanguage[];
  height: number;
};

export type QuizTextSheet = BasicWorksheet & {
  type: typeof WorksheetType.QUIZ_TEXT;
  description: string;
  answer: string;
  inputType: 'text' | 'number' | 'textarea';
};

export type QuizOptionsSheet = BasicWorksheet & {
  type: typeof WorksheetType.QUIZ_OPTIONS;
  description: string;
  options: { label: string; correct: boolean; id: string }[];
  multiple: boolean;
  scoringMode: QuizScoringMode;
};

export type ListSheet = BasicWorksheet & {
  type: typeof WorksheetType.LIST;
  header: string;
  content: (JkmdSheet | CodeEditorSheet | GraphSheet | QuizProblemSheet | QuizTextSheet | QuizOptionsSheet)[];
  children: ListSheet[];
};

export type NewPageSheet = BasicWorksheet & {
  type: typeof WorksheetType.NEW_PAGE;
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

export interface WorksheetBaseDocument {
  key: string;
  folderId: string;
  name: string;
  description: string;
  content: BodyWorksheet[];
  members: EntityMembers;
  quiz: {
    enable: boolean;
    automaticFeedback: boolean;
  };
  slides: {
    enable: boolean;
    titleBackgroundImage: string;
    backgroundImage: string;
    fontSize: number;
    theme: Theme;
    colorTextHighlight: string;
    aspectRatio: AspectRatio;
  };
}

export type WorksheetsInPages = { header: NewPageSheet; content: BodyWorksheet[] }[];

export type SummaryWorksheetsInPages = { header: NewPageSheet; content: BasicWorksheet[] }[];
