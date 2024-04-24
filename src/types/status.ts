import { JkmdSheetType, QuizProblemSheetType, SourceCodeType } from './sheet';

export type QuizProblemSheetStatusType =
  Omit<QuizProblemSheetType, 'height' | 'languages' | 'title' | 'description' | 'solutionSourceCode' | 'points' | 'scoringMode'>
  & {
  sourceCode: SourceCodeType,
};

export type JkmdSheetStatusType = Omit<JkmdSheetType, 'content' | 'title'> & { read: boolean };
