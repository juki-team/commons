import { Judge, ProblemSettingsType, ProblemStatus } from '../types';
import { ContestUserType } from './contest';

export interface ProblemSummaryListResponseDTO {
  judge: Judge,
  key: string,
  name: string,
  tags: string[],
  status: ProblemStatus,
}

export type ProblemUserType = {
  isEditor: boolean,
}

export interface ProblemResponseDTO extends ProblemSummaryListResponseDTO {
  author: string,
  statement: {
    description: string,
    input: string,
    output: string,
  },
  editorial: string,
  settings: Omit<ProblemSettingsType, 'evaluatorSource'>,
  sampleCases: { input: string, output: string }[],
  ownerNickname: string,
  user: ProblemUserType,
}
