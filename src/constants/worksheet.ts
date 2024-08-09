import { v4 } from 'uuid';
import { NewPageSheetType, WorksheetType } from '../types';

export const NEW_PAGE_SHEET = (): NewPageSheetType => ({
  id: v4(),
  type: WorksheetType.NEW_PAGE,
  title: '',
  points: 0,
});
