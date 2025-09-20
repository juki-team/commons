import { v4 } from 'uuid';
import { AspectRatio, NewPageSheetType, WorksheetType } from '../types';

export const NEW_PAGE_SHEET = (): NewPageSheetType => ({
  id: v4(),
  type: WorksheetType.NEW_PAGE,
  title: '',
  points: 0,
});

export const ASPECT_RATIO: {
  [key in AspectRatio]: {
    aspectRatio: AspectRatio,
    width: number,
    height: number,
    decimal: number,
    label: string
  }
} = {
  [AspectRatio.RATIO_21_9]: {
    aspectRatio: AspectRatio.RATIO_21_9,
    width: 2520,
    height: 1080,
    decimal: 21 / 9,
    label: 'ultrawide',
  },
  [AspectRatio.RATIO_20_9]: {
    aspectRatio: AspectRatio.RATIO_20_9,
    width: 2400,
    height: 1080,
    decimal: 20 / 9,
    label: 'mobile wide',
  },
  [AspectRatio.RATIO_16_9]: {
    aspectRatio: AspectRatio.RATIO_16_9,
    width: 1920,
    height: 1080,
    decimal: 16 / 9,
    label: 'widescreen',
  },
  [AspectRatio.RATIO_16_10]: {
    aspectRatio: AspectRatio.RATIO_16_10,
    width: 1920,
    height: 1200,
    decimal: 16 / 10,
    label: 'widescreen tall',
  },
  [AspectRatio.RATIO_3_2]: {
    aspectRatio: AspectRatio.RATIO_3_2,
    width: 1440,
    height: 960,
    decimal: 3 / 2,
    label: 'balanced',
  },
  [AspectRatio.RATIO_4_3]: {
    aspectRatio: AspectRatio.RATIO_4_3,
    width: 1024,
    height: 768,
    decimal: 4 / 3,
    label: 'standard',
  },
  [AspectRatio.RATIO_5_4]: {
    aspectRatio: AspectRatio.RATIO_5_4,
    width: 1280,
    height: 1024,
    decimal: 5 / 4,
    label: 'square old',
  },
  [AspectRatio.RATIO_1_1]: {
    aspectRatio: AspectRatio.RATIO_1_1,
    width: 1000,
    height: 1000,
    decimal: 1,
    label: 'square',
  },
};
