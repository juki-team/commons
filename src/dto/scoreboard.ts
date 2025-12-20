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

export type ScoreboardTimelineEventType = {
  timestamp: number,
  userId: string,
  problemId: string,
  attempts: number,
  points: number,
  success: boolean,
  isFirstAccepted: boolean,
  penalty: number,
}

export interface ScoreboardHistoryResponseDTO {
  contestId: string,
  userProblemTimelineRefs: Record<string, number[]>,
  timelineEvents: ScoreboardTimelineEventType[],
}
