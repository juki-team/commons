import type { CodeLanguage, WorksheetType } from '../enums/index.js';
import type {
  CodeEditorSheet,
  JkmdSheet,
  QuizOptionsSheet,
  QuizProblemSheet,
  QuizTextSheet,
  UserBasic,
} from '../types/index.js';
import type { SubmissionSummaryListResponseDto } from './submission.js';
import type { UserOrganizationBasicInfoResponseDto } from './user.js';

export type WorksheetResponseBasicInfoProcessed = {
  submittedAt: number;
  points: number;
  isCompleted: boolean;
};

export interface QuizProblemSubmissionDto extends Pick<QuizProblemSheet, 'id' | 'type'> {
  language: CodeLanguage;
  source: string;
}

export interface QuizProblemSubmissionResponseDto
  extends WorksheetResponseBasicInfoProcessed,
    Omit<QuizProblemSubmissionDto, 'source' | 'language'> {
  submissionResult: SubmissionSummaryListResponseDto;
}

export interface JkmdSubmissionDto extends Pick<JkmdSheet, 'id' | 'type'> {
  read: boolean;
}

export interface JkmdSubmissionResponseDto extends WorksheetResponseBasicInfoProcessed, JkmdSubmissionDto {}

export interface CodeEditorSubmissionDto extends Pick<CodeEditorSheet, 'id' | 'type' | 'files' | 'testCases'> {}

export interface CodeEditorSubmissionResponseDto extends WorksheetResponseBasicInfoProcessed, CodeEditorSubmissionDto {}

export interface QuizOptionsSubmissionDto extends Pick<QuizOptionsSheet, 'id' | 'type'> {
  checkedOptions: string[];
}

export interface QuizOptionsSubmissionResponseDto extends WorksheetResponseBasicInfoProcessed, QuizOptionsSubmissionDto {}

export interface QuizTextSubmissionDto extends Pick<QuizTextSheet, 'id' | 'type'> {
  response: string;
}

export interface QuizTextSubmissionResponseDto extends WorksheetResponseBasicInfoProcessed, QuizTextSubmissionDto {}

export type WorksheetSubmissions = {
  [WorksheetType.JK_MD]: {
    [key: string]: JkmdSubmissionResponseDto[];
  };
  [WorksheetType.CODE_EDITOR]: {
    [key: string]: CodeEditorSubmissionResponseDto[];
  };
  [WorksheetType.QUIZ_PROBLEM]: {
    [key: string]: QuizProblemSubmissionResponseDto[];
  };
  [WorksheetType.QUIZ_OPTIONS]: {
    [key: string]: QuizOptionsSubmissionResponseDto[];
  };
  [WorksheetType.QUIZ_TEXT]: {
    [key: string]: QuizTextSubmissionResponseDto[];
  };
};

export interface WorksheetSubmissionsResponseDto {
  [key: string]: {
    submissions: WorksheetSubmissions;
    user: UserBasic;
  };
}

export interface WorksheetSubmissionsUsersResponseDto {
  [key: string]: UserOrganizationBasicInfoResponseDto;
}

export interface WorksheetUserSubmissionsResponseDto {
  submissions: WorksheetSubmissions;
  user: UserBasic;
}
