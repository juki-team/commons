
import { v4 } from 'uuid';
import { NewPageSheetType, SheetType } from '../types';

export const NEW_PAGE_SHEET = (): NewPageSheetType => ({
  id: v4(),
  type: SheetType.NEW_PAGE,
  title: '',
  points: 0,
});
