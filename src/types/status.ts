import { JkmdSheetType, QuizProblemSheetType } from './sheet';

export type QuizProblemSheetStatusType = Omit<QuizProblemSheetType, 'height' | 'languages' | 'title' | 'description' | 'solutionSourceCode' | 'points' | 'scoringMode'>;

export type JkmdSheetStatusType = Omit<JkmdSheetType, 'content' | 'title'> & { read: boolean };
