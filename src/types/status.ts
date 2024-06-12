import { ProblemVerdict } from './judge';
import { JkmdSheetType, QuizProblemSheetType, SourceCodeType } from './sheet';

export type WorksheetResponseBasicInfoProcessedType = {
  createdAt: number,
  updatedAt: number,
  points: number,
  isResolved: boolean,
}

export type QuizProblemSheetStatusType =
  Omit<QuizProblemSheetType, 'height' | 'languages' | 'title' | 'description' | 'solutionSourceCode' | 'points' | 'scoringMode'>
  & { sourceCode: SourceCodeType };

export type QuizProblemSheetStatusProcessedType =
  WorksheetResponseBasicInfoProcessedType
  & QuizProblemSheetStatusType
  & {
  sampleTestCasesMerged: {
    verdict: ProblemVerdict,
    timeUsed: number,
    memoryUsed: number,
    exitCode: number,
  },
};

export type JkmdSheetStatusType = Omit<JkmdSheetType, 'content' | 'title'> & { read: boolean };

export type JkmdSheetStatusProcessedType = WorksheetResponseBasicInfoProcessedType & JkmdSheetStatusType;
