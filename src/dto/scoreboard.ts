import type { ScoreboardProblems } from '../types/index.js';
import type { UserSummaryListResponseDto } from './user.js';

export interface ScoreboardResponseDto {
  user: UserSummaryListResponseDto;
  totalPenalty: number;
  totalPoints: number;
  position: number;
  problems: ScoreboardProblems;
}

export type ScoreboardTimelineEventResponseDto = {
  timestamp: number;
  userKey: string;
  problemKey: string;
  attempts: number;
  points: number;
  success: boolean;
  indexAccepted: number;
  penalty: number;
};

export interface ScoreboardHistoryResponseDto {
  contestKey: string;
  userProblemTimelineRefs: Record<string, number[]>;
  timelineEvents: ScoreboardTimelineEventResponseDto[];
  participants: Record<string, UserSummaryListResponseDto>;
}
