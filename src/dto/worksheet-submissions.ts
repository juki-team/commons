import {
  CodeEditorSheetType,
  CodeLanguage,
  JkmdSheetType,
  QuizOptionsSheetType,
  QuizProblemSheetType,
  QuizTextSheetType,
  UserBasicInterface,
  WorksheetType,
} from '../types';
import { SubmissionSummaryListResponseDTO } from './submission';
import { UserCompanyBasicInfoResponseDTO } from './user';

export type WorksheetResponseBasicInfoProcessedType = {
  submittedAt: number,
  points: number,
  isCompleted: boolean,
}

export interface QuizProblemSubmissionDTO extends Pick<QuizProblemSheetType, 'id' | 'type'> {
  language: CodeLanguage,
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

export interface CodeEditorSubmissionDTO extends Pick<CodeEditorSheetType, 'id' | 'type' | 'files' | 'testCases'> {
}

export interface CodeEditorSubmissionResponseDTO extends WorksheetResponseBasicInfoProcessedType, CodeEditorSubmissionDTO {
}

export interface QuizOptionsSubmissionDTO extends Pick<QuizOptionsSheetType, 'id' | 'type'> {
  checkedOptions: string[],
}

export interface QuizOptionsSubmissionResponseDTO extends WorksheetResponseBasicInfoProcessedType, QuizOptionsSubmissionDTO {
}

export interface QuizTextSubmissionDTO extends Pick<QuizTextSheetType, 'id' | 'type'> {
  response: string,
}

export interface QuizTextSubmissionResponseDTO extends WorksheetResponseBasicInfoProcessedType, QuizTextSubmissionDTO {
}

export type WorkSheetSubmissions = {
  [WorksheetType.JK_MD]: {
    [key: string]: JkmdSubmissionResponseDTO[],
  },
  [WorksheetType.CODE_EDITOR]: {
    [key: string]: CodeEditorSubmissionResponseDTO[],
  },
  [WorksheetType.QUIZ_PROBLEM]: {
    [key: string]: QuizProblemSubmissionResponseDTO[],
  },
  [WorksheetType.QUIZ_OPTIONS]: {
    [key: string]: QuizOptionsSubmissionResponseDTO[],
  }
  [WorksheetType.QUIZ_TEXT]: {
    [key: string]: QuizTextSubmissionResponseDTO[],
  }
}

export interface WorksheetSubmissionsResponseDTO {
  [key: string]: {
    submissions: WorkSheetSubmissions,
    user: UserBasicInterface,
  };
}

export interface WorksheetSubmissionsUsersResponseDTO {
  [key: string]: UserCompanyBasicInfoResponseDTO,
}

export interface WorksheetUserSubmissionsResponseDTO {
  submissions: WorkSheetSubmissions,
  user: UserBasicInterface,
}
