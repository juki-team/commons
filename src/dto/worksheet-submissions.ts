import {
  CodeEditorSheet,
  CodeLanguage,
  JkmdSheet,
  QuizOptionsSheet,
  QuizProblemSheet,
  QuizTextSheet,
  UserBasic,
  WorksheetType,
} from '../types';
import { SubmissionSummaryListResponseDTO } from './submission';
import { UserCompanyBasicInfoResponseDTO } from './user';

export type WorksheetResponseBasicInfoProcessed = {
  submittedAt: number,
  points: number,
  isCompleted: boolean,
}

export interface QuizProblemSubmissionDTO extends Pick<QuizProblemSheet, 'id' | 'type'> {
  language: CodeLanguage,
  source: string,
}

export interface QuizProblemSubmissionResponseDTO extends WorksheetResponseBasicInfoProcessed, Omit<QuizProblemSubmissionDTO, 'source' | 'language'> {
  submissionResult: SubmissionSummaryListResponseDTO,
}

export interface JkmdSubmissionDTO extends Pick<JkmdSheet, 'id' | 'type'> {
  read: boolean;
}

export interface JkmdSubmissionResponseDTO extends WorksheetResponseBasicInfoProcessed, JkmdSubmissionDTO {
}

export interface CodeEditorSubmissionDTO extends Pick<CodeEditorSheet, 'id' | 'type' | 'files' | 'testCases'> {
}

export interface CodeEditorSubmissionResponseDTO extends WorksheetResponseBasicInfoProcessed, CodeEditorSubmissionDTO {
}

export interface QuizOptionsSubmissionDTO extends Pick<QuizOptionsSheet, 'id' | 'type'> {
  checkedOptions: string[],
}

export interface QuizOptionsSubmissionResponseDTO extends WorksheetResponseBasicInfoProcessed, QuizOptionsSubmissionDTO {
}

export interface QuizTextSubmissionDTO extends Pick<QuizTextSheet, 'id' | 'type'> {
  response: string,
}

export interface QuizTextSubmissionResponseDTO extends WorksheetResponseBasicInfoProcessed, QuizTextSubmissionDTO {
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
    user: UserBasic,
  };
}

export interface WorksheetSubmissionsUsersResponseDTO {
  [key: string]: UserCompanyBasicInfoResponseDTO,
}

export interface WorksheetUserSubmissionsResponseDTO {
  submissions: WorkSheetSubmissions,
  user: UserBasic,
}
