import { Judge } from '../types';

export interface JudgeResponseDTO {
  key: Judge
  languages: { value: string, label: string, enabled: boolean }[],
}
