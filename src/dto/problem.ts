import { ProblemStatus } from '../types';

export interface ProblemSummaryListResponseDTO {
  key: string,
  name: string,
  tags: string[],
  status: ProblemStatus,
}
