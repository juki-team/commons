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
