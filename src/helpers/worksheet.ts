import { NEW_PAGE_SHEET } from '../constants/worksheet';
import {
  BasicWorksheetType,
  BodyWorksheetType,
  CodeEditorSheetType,
  JkmdSheetType,
  Judge,
  NewPageSheetType,
  QuizOptionsSheetType,
  QuizProblemSheetType,
  QuizTextSheetType,
  SummaryWorksheetsInPages,
  WorksheetsInPages,
  WorksheetType,
} from '../types';

export const getWorksheetsInPages = (initialSheets: BodyWorksheetType[]) => {
  const sheets = [ ...initialSheets ];
  if (sheets[0]?.type !== WorksheetType.NEW_PAGE) {
    sheets.unshift(NEW_PAGE_SHEET());
  }
  let newPage: NewPageSheetType = sheets[0] as NewPageSheetType;
  let content: BodyWorksheetType[] = [];
  const sheetsByPages: WorksheetsInPages = [];
  for (let i = 1; i < sheets.length; i++) {
    const sheet = sheets[i];
    if (sheet.type === WorksheetType.NEW_PAGE) {
      sheetsByPages.push({
        header: newPage,
        content: [ ...content ],
      });
      newPage = sheet;
      content = [];
    } else {
      content.push(sheet);
    }
  }
  sheetsByPages.push({
    header: newPage,
    content: [ ...content ],
  });
  return sheetsByPages;
};

export const getSummaryWorksheetsInPages = (initialSheets: BodyWorksheetType[]) => {
  const sheets = [ ...initialSheets ];
  if (sheets[0]?.type !== WorksheetType.NEW_PAGE) {
    sheets.unshift(NEW_PAGE_SHEET());
  }
  let newPage: NewPageSheetType = sheets[0] as NewPageSheetType;
  let content: BasicWorksheetType[] = [];
  const sheetsByPages: SummaryWorksheetsInPages = [];
  for (let i = 1; i < sheets.length; i++) {
    const sheet = sheets[i];
    if (sheet.type === WorksheetType.NEW_PAGE) {
      sheetsByPages.push({
        header: newPage,
        content: content.map(c => ({
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
    content: [ ...content ],
  });
  return sheetsByPages;
};

export const getTotalExercisesOfSummaryWorksheetsInPages = (content: SummaryWorksheetsInPages) => content.reduce((sum, { content }) => sum + content.reduce((sum, { type }) => sum + +(type === WorksheetType.QUIZ_OPTIONS || type === WorksheetType.QUIZ_PROBLEM || type === WorksheetType.QUIZ_TEXT), 0), 0);

export const isBasicWorksheetType = (value: any): value is BasicWorksheetType & any => {
  return typeof value?.id == 'string' && value.id
    && Object.values(WorksheetType).includes(value?.type as WorksheetType)
    && typeof value?.title == 'string'
    && typeof value?.points == 'number';
};

export const isJkmdSheetType = (value: any): value is JkmdSheetType => {
  return isBasicWorksheetType(value)
    && value?.type === WorksheetType.JK_MD
    && typeof value?.content == 'string';
};

export const isCodeEditorSheetType = (value: any): value is CodeEditorSheetType => {
  return isBasicWorksheetType(value)
    && value?.type === WorksheetType.CODE_EDITOR
    && typeof value?.sourceCode === 'object' && value?.sourceCode !== null
    && value?.testCases === 'object' && value?.testCases !== null
    && Array.isArray(value?.languages)
    && typeof value?.height == 'number';
};

export const isQuizProblemSheetType = (value: any): value is QuizProblemSheetType => {
  return isBasicWorksheetType(value)
    && value?.type === WorksheetType.QUIZ_PROBLEM
    && Object.values(Judge).includes(value?.problemJudge as Judge) || typeof value?.problemJudge === 'string'
    && typeof value?.problemKey == 'string'
    && Array.isArray(value?.languages)
    && typeof value?.height == 'number';
};

export const isQuizOptionsSheetType = (value: any): value is QuizOptionsSheetType => {
  return isBasicWorksheetType(value)
    && value?.type === WorksheetType.QUIZ_OPTIONS
    && typeof value?.description == 'string'
    && Array.isArray(value?.options)
    && value?.options.every((option: any) => typeof option?.label == 'string' && typeof option?.correct == 'boolean' && typeof option?.id == 'string')
    && typeof value?.multiple == 'boolean'
    && (value?.scoringMode === 'TOTAL' || value?.scoringMode === 'PARTIAL');
};

export const isQuizTextSheetType = (value: any): value is QuizTextSheetType => {
  return isBasicWorksheetType(value)
    && value?.type === WorksheetType.QUIZ_TEXT
    && typeof value?.description == 'string'
    && typeof value?.answer == 'string'
    && [ 'text', 'number', 'textarea' ].includes(value?.inputType);
};
