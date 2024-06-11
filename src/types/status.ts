import { ProblemVerdict } from './judge';
import { JkmdSheetType, QuizProblemSheetType, SourceCodeType } from './sheet';

export type WorksheetResponseBasicInfoType = {
  createdAt: number,
  updatedAt: number,
}

export type QuizProblemSheetStatusType =
  WorksheetResponseBasicInfoType
  & Omit<QuizProblemSheetType, 'height' | 'languages' | 'title' | 'description' | 'solutionSourceCode' | 'points' | 'scoringMode'>
  & { sourceCode: SourceCodeType };

export type QuizProblemSheetStatusProcessedType = QuizProblemSheetStatusType & {
  sampleTestCasesMerged: {
    verdict: ProblemVerdict,
    timeUsed: number,
    memoryUsed: number,
    exitCode: number,
  },
  points: number,
};

export type JkmdSheetStatusType = WorksheetResponseBasicInfoType
  & Omit<JkmdSheetType, 'content' | 'title'>
  & { read: boolean };
