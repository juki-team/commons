import { UserSummaryResponseDTO } from './user';

export type ScoreboardProblemType = {
  attempts: number,
  points: number,
  success: boolean,
  penalty: number,
}

export type ScoreboardProblemsType = {
  [key: string]: ScoreboardProblemType
}

export interface ScoreboardResponseDTO {
  user: UserSummaryResponseDTO,
  totalPenalty: number,
  totalPoints: number,
  position: number,
  problems: ScoreboardProblemsType,
}
