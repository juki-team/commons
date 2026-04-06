import type { UserSummaryListResponseDTO } from './user';

export type ScoreboardProblem = {
  attempts: number;
  points: number;
  success: boolean;
  penalty: number;
  isFirstAccepted: boolean;
  indexAccepted: number;
};

export type ScoreboardProblems = {
  [key: string]: ScoreboardProblem;
};

export interface ScoreboardResponseDTO {
  user: UserSummaryListResponseDTO;
  totalPenalty: number;
  totalPoints: number;
  position: number;
  problems: ScoreboardProblems;
}

export type ScoreboardTimelineEventResponseDTO = {
  timestamp: number;
  userKey: string;
  problemKey: string;
  attempts: number;
  points: number;
  success: boolean;
  indexAccepted: number;
  penalty: number;
};

export interface ScoreboardHistoryResponseDTO {
  contestKey: string;
  userProblemTimelineRefs: Record<string, number[]>;
  timelineEvents: ScoreboardTimelineEventResponseDTO[];
  participants: Record<string, UserSummaryListResponseDTO>;
}
