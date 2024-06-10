import { NEW_PAGE_SHEET } from '../constants';
import { BodyNoteSheetType, NewPageSheetType, SheetType, WorksheetsInPages } from '../types';

export const getWorksheetsInPages = (initialSheets: BodyNoteSheetType[]) => {
  const sheets = [ ...initialSheets ];
  if (sheets[0]?.type !== SheetType.NEW_PAGE) {
    sheets.unshift(NEW_PAGE_SHEET());
  }
  let newPage: NewPageSheetType = sheets[0] as NewPageSheetType;
  let content: BodyNoteSheetType[] = [];
  const sheetsByPages: WorksheetsInPages = [];
  for (let i = 1; i < sheets.length; i++) {
    const sheet = sheets[i];
    if (sheet.type === SheetType.NEW_PAGE) {
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
