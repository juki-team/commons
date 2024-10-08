import { UserSummaryListResponseDTO } from './user';

export type ScoreboardProblemType = {
  attempts: number,
  points: number,
  success: boolean,
  penalty: number,
  isFirstAccepted: boolean,
}

export type ScoreboardProblemsType = {
  [key: string]: ScoreboardProblemType
}

export interface ScoreboardResponseDTO {
  user: UserSummaryListResponseDTO,
  totalPenalty: number,
  totalPoints: number,
  position: number,
  problems: ScoreboardProblemsType,
}
