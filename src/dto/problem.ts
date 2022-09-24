import { Judge, ProblemSettingsType, ProblemStatus } from '../types';

export interface ProblemSummaryListResponseDTO {
  judge: Judge,
  key: string,
  name: string,
  tags: string[],
  status: ProblemStatus,
}

export interface ProblemResponseDTO extends ProblemSummaryListResponseDTO {
  author: string,
  statement: {
    description: string,
    input: string,
    output: string,
  },
  settings: Omit<ProblemSettingsType, 'evaluatorSource'>,
  sampleCases: { input: string, output: string }[],
  ownerNickname: string,
}
