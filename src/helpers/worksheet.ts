import { NEW_PAGE_SHEET } from '../constants/worksheet';
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
} from '../types';

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

export const isBasicWorksheet = (value: any): value is BasicWorksheet & any => {
  return (
    typeof value?.id == 'string' &&
    value.id &&
    Object.values(WorksheetType).includes(value?.type as WorksheetType) &&
    typeof value?.title == 'string' &&
    typeof value?.points == 'number'
  );
};

export const isJkmdSheet = (value: any): value is JkmdSheet => {
  return isBasicWorksheet(value) && value?.type === WorksheetType.JK_MD && typeof value?.content == 'string';
};

export const isCodeEditorSheet = (value: any): value is CodeEditorSheet => {
  return (
    isBasicWorksheet(value) &&
    value?.type === WorksheetType.CODE_EDITOR &&
    typeof value?.sourceCode === 'object' &&
    value?.sourceCode !== null &&
    value?.testCases === 'object' &&
    value?.testCases !== null &&
    Array.isArray(value?.languages) &&
    typeof value?.height == 'number'
  );
};

export const isQuizProblemSheet = (value: any): value is QuizProblemSheet => {
  return (
    (isBasicWorksheet(value) &&
      value?.type === WorksheetType.QUIZ_PROBLEM &&
      Object.values(Judge).includes(value?.problemJudge as Judge)) ||
    (typeof value?.problemJudge === 'string' &&
      typeof value?.problemKey == 'string' &&
      Array.isArray(value?.languages) &&
      typeof value?.height == 'number')
  );
};

export const isQuizOptionsSheet = (value: any): value is QuizOptionsSheet => {
  return (
    isBasicWorksheet(value) &&
    value?.type === WorksheetType.QUIZ_OPTIONS &&
    typeof value?.description == 'string' &&
    Array.isArray(value?.options) &&
    value?.options.every(
      (option: any) => typeof option?.label == 'string' && typeof option?.correct == 'boolean' && typeof option?.id == 'string',
    ) &&
    typeof value?.multiple == 'boolean' &&
    (value?.scoringMode === 'TOTAL' || value?.scoringMode === 'PARTIAL')
  );
};

export const isQuizTextSheet = (value: any): value is QuizTextSheet => {
  return (
    isBasicWorksheet(value) &&
    value?.type === WorksheetType.QUIZ_TEXT &&
    typeof value?.description == 'string' &&
    typeof value?.answer == 'string' &&
    ['text', 'number', 'textarea'].includes(value?.inputType)
  );
};
