import {
  JkmdSheetType,
  ProblemVerdict,
  QuizOptionsSheetType,
  QuizProblemSheetType,
  SourceCodeType,
  UserBasicInterface,
} from '../types';

export type WorksheetResponseBasicInfoProcessedType = {
  submittedAt: number,
  points: number,
  isResolved: boolean,
}

export interface QuizProblemSubmissionDTO extends Pick<QuizProblemSheetType, 'id' | 'type' | 'testCases'> {
  sourceCode: SourceCodeType;
}

export interface QuizProblemSubmissionResponseDTO extends WorksheetResponseBasicInfoProcessedType, QuizProblemSubmissionDTO {
  sampleTestCasesMerged: {
    verdict: ProblemVerdict,
    timeUsed: number,
    memoryUsed: number,
    exitCode: number,
  },
}

export interface JkmdSubmissionDTO extends Pick<JkmdSheetType, 'id' | 'type'> {
  read: boolean;
}

export interface JkmdSubmissionResponseDTO extends WorksheetResponseBasicInfoProcessedType, JkmdSubmissionDTO {
}

export interface QuizOptionsSubmissionDTO extends Pick<QuizOptionsSheetType, 'id' | 'type'> {
  checkedOptions: number[],
}

export interface QuizOptionsSubmissionResponseDTO extends WorksheetResponseBasicInfoProcessedType, QuizOptionsSubmissionDTO {
}

export type WorkSheetSubmissions = {
  [key: string]: JkmdSubmissionResponseDTO[] | QuizProblemSubmissionResponseDTO[] | QuizOptionsSubmissionResponseDTO[],
}

export interface WorksheetSubmissionsResponseDTO {
  [key: string]: {
    worksheetId: string,
    submissions: WorkSheetSubmissions,
    user: UserBasicInterface
  };
}
