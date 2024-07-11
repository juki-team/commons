import { Judge } from '../types';

export interface JudgeResponseDataDTO {
  key: Judge | string,
  label: string,
  languages: { value: string, label: string, enabled: boolean }[],
  problemTags: string[],
}
