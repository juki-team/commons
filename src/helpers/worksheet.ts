import { NEW_PAGE_SHEET } from '../constants/worksheet';
import {
  BasicWorksheetType,
  BodyWorksheetType,
  NewPageSheetType,
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
