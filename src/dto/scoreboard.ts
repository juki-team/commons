import { UserSummaryListResponseDTO } from './user';

export type ScoreboardProblemType = {
  attempts: number,
  points: number,
  success: boolean,
  penalty: number,
  isFirstAccepted: boolean,
  indexAccepted: number,
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

export type ScoreboardTimelineEventResponseDTO = {
  timestamp: number,
  userKey: string,
  problemKey: string,
  attempts: number,
  points: number,
  success: boolean,
  indexAccepted: boolean,
  penalty: number,
}

export interface ScoreboardHistoryResponseDTO {
  contestKey: string,
  userProblemTimelineRefs: Record<string, number[]>,
  timelineEvents: ScoreboardTimelineEventResponseDTO[],
  participants: Record<string, UserSummaryListResponseDTO>,
}
