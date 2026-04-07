import { NEW_PAGE_SHEET } from '../constants/worksheet.js';
import {
  type BasicWorksheet,
  type BodyWorksheet,
  type CodeEditorSheet,
  type JkmdSheet,
  Judge,
  type NewPageSheet,
  type QuizOptionsSheet,
  type QuizProblemSheet,
  type QuizTextSheet,
  type SummaryWorksheetsInPages,
  type WorksheetsInPages,
  WorksheetType,
} from '../types/index.js';

export const getWorksheetsInPages = (initialSheets: BodyWorksheet[]) => {
  const sheets = [...initialSheets];
  if (sheets[0]?.type !== WorksheetType.NEW_PAGE) {
    sheets.unshift(NEW_PAGE_SHEET());
  }
  let newPage: NewPageSheet = sheets[0] as NewPageSheet;
  let content: BodyWorksheet[] = [];
  const sheetsByPages: WorksheetsInPages = [];
  for (let i = 1; i < sheets.length; i++) {
    const sheet = sheets[i];
    if (sheet.type === WorksheetType.NEW_PAGE) {
      sheetsByPages.push({
        header: newPage,
        content: [...content],
      });
      newPage = sheet;
      content = [];
    } else {
      content.push(sheet);
    }
  }
  sheetsByPages.push({
    header: newPage,
    content: [...content],
  });
  return sheetsByPages;
};

export const getSummaryWorksheetsInPages = (initialSheets: BodyWorksheet[]) => {
  const sheets = [...initialSheets];
  if (sheets[0]?.type !== WorksheetType.NEW_PAGE) {
    sheets.unshift(NEW_PAGE_SHEET());
  }
  let newPage: NewPageSheet = sheets[0] as NewPageSheet;
  let content: BasicWorksheet[] = [];
  const sheetsByPages: SummaryWorksheetsInPages = [];
  for (let i = 1; i < sheets.length; i++) {
    const sheet = sheets[i];
    if (sheet.type === WorksheetType.NEW_PAGE) {
      sheetsByPages.push({
        header: newPage,
        content: content.map((c) => ({
          id: c.id,
          type: c.type,
          title: c.title,
          points: c.points,
        })),
      });
      newPage = sheet;
      content = [];
    } else {
      content.push(sheet);
    }
  }
  sheetsByPages.push({
    header: newPage,
    content: [...content],
  });
  return sheetsByPages;
};

export const getTotalExercisesOfSummaryWorksheetsInPages = (content: SummaryWorksheetsInPages) =>
  content.reduce(
    (sum, { content }) =>
      sum +
      content.reduce(
        (sum, { type }) =>
          sum +
          +(type === WorksheetType.QUIZ_OPTIONS || type === WorksheetType.QUIZ_PROBLEM || type === WorksheetType.QUIZ_TEXT),
        0,
      ),
    0,
  );

export const isBasicWorksheet = (value: unknown): value is BasicWorksheet => {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === 'string' &&
    !!v.id &&
    Object.values(WorksheetType).includes(v.type as WorksheetType) &&
    typeof v.title === 'string' &&
    typeof v.points === 'number'
  );
};

export const isJkmdSheet = (value: unknown): value is JkmdSheet => {
  if (!isBasicWorksheet(value)) return false;
  const v = value as Record<string, unknown>;
  return value.type === WorksheetType.JK_MD && typeof v.content === 'string';
};

export const isCodeEditorSheet = (value: unknown): value is CodeEditorSheet => {
  if (!isBasicWorksheet(value)) return false;
  const v = value as Record<string, unknown>;
  return (
    value.type === WorksheetType.CODE_EDITOR &&
    typeof v.sourceCode === 'object' &&
    v.sourceCode !== null &&
    typeof v.testCases === 'object' &&
    v.testCases !== null &&
    Array.isArray(v.languages) &&
    typeof v.height === 'number'
  );
};

export const isQuizProblemSheet = (value: unknown): value is QuizProblemSheet => {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    (isBasicWorksheet(value) &&
      value.type === WorksheetType.QUIZ_PROBLEM &&
      Object.values(Judge).includes(v.problemJudge as Judge)) ||
    (typeof v.problemJudge === 'string' &&
      typeof v.problemKey === 'string' &&
      Array.isArray(v.languages) &&
      typeof v.height === 'number')
  );
};

export const isQuizOptionsSheet = (value: unknown): value is QuizOptionsSheet => {
  if (!isBasicWorksheet(value)) return false;
  const v = value as Record<string, unknown>;
  return (
    value.type === WorksheetType.QUIZ_OPTIONS &&
    typeof v.description === 'string' &&
    Array.isArray(v.options) &&
    v.options.every((option: unknown) => {
      if (typeof option !== 'object' || option === null) return false;
      const o = option as Record<string, unknown>;
      return typeof o.label === 'string' && typeof o.correct === 'boolean' && typeof o.id === 'string';
    }) &&
    typeof v.multiple === 'boolean' &&
    (v.scoringMode === 'TOTAL' || v.scoringMode === 'PARTIAL')
  );
};

export const isQuizTextSheet = (value: unknown): value is QuizTextSheet => {
  if (!isBasicWorksheet(value)) return false;
  const v = value as Record<string, unknown>;
  return (
    value.type === WorksheetType.QUIZ_TEXT &&
    typeof v.description === 'string' &&
    typeof v.answer === 'string' &&
    (v.inputType === 'text' || v.inputType === 'number' || v.inputType === 'textarea')
  );
};
