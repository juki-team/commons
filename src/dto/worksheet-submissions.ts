import {
  CodeEditorSheetType,
  CodeEditorTestCasesType,
  JkmdSheetType,
  ProgrammingLanguage,
  QuizOptionsSheetType,
  QuizProblemSheetType,
  SheetType,
  UserBasicInterface,
} from '../types';
import { SubmissionSummaryListResponseDTO } from './submission';

export type WorksheetResponseBasicInfoProcessedType = {
  submittedAt: number,
  points: number,
  isCompleted: boolean,
}

export interface QuizProblemSubmissionDTO extends Pick<QuizProblemSheetType, 'id' | 'type'> {
  language: ProgrammingLanguage,
  source: string,
}

export interface QuizProblemSubmissionResponseDTO extends WorksheetResponseBasicInfoProcessedType, Omit<QuizProblemSubmissionDTO, 'source' | 'language'> {
  submissionResult: SubmissionSummaryListResponseDTO,
}

export interface JkmdSubmissionDTO extends Pick<JkmdSheetType, 'id' | 'type'> {
  read: boolean;
}

export interface JkmdSubmissionResponseDTO extends WorksheetResponseBasicInfoProcessedType, JkmdSubmissionDTO {
}

export interface CodeEditorSubmissionDTO extends Pick<CodeEditorSheetType, 'id' | 'type'> {
  language: ProgrammingLanguage,
  sourceCode: string,
  testCases: CodeEditorTestCasesType,
}

export interface CodeEditorSubmissionResponseDTO extends WorksheetResponseBasicInfoProcessedType, CodeEditorSubmissionDTO {
}

export interface QuizOptionsSubmissionDTO extends Pick<QuizOptionsSheetType, 'id' | 'type'> {
  checkedOptions: number[],
}

export interface QuizOptionsSubmissionResponseDTO extends WorksheetResponseBasicInfoProcessedType, QuizOptionsSubmissionDTO {
}

export type WorkSheetSubmissions = {
  [SheetType.JK_MD]: {
    [key: string]: JkmdSubmissionResponseDTO[],
  },
  [SheetType.CODE_EDITOR]: {
    [key: string]: CodeEditorSubmissionResponseDTO[],
  },
  [SheetType.QUIZ_PROBLEM]: {
    [key: string]: QuizProblemSubmissionResponseDTO[],
  },
  [SheetType.QUIZ_OPTIONS]: {
    [key: string]: QuizOptionsSubmissionResponseDTO[],
  }
}

export interface WorksheetSubmissionsResponseDTO {
  [key: string]: {
    submissions: WorkSheetSubmissions,
    user: UserBasicInterface,
  };
}

export interface WorksheetSubmissionsUsersResponseDTO {
  [key: string]: UserBasicInterface,
}

export interface WorksheetUserSubmissionsResponseDTO {
  submissions: WorkSheetSubmissions,
  user: UserBasicInterface,
}
