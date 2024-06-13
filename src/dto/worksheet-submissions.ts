import {
  JkmdSheetType,
  ProgrammingLanguage,
  QuizOptionsSheetType,
  QuizProblemSheetType,
  UserBasicInterface,
} from '../types';
import { SubmitResponseDTO } from './submission';

export type WorksheetResponseBasicInfoProcessedType = {
  submittedAt: number,
  points: number,
  isResolved: boolean,
}

export interface QuizProblemSubmissionDTO extends Pick<QuizProblemSheetType, 'id' | 'type'> {
  language: ProgrammingLanguage,
  source: string,
}

export interface QuizProblemSubmissionResponseDTO extends WorksheetResponseBasicInfoProcessedType, Omit<QuizProblemSubmissionDTO, 'source' | 'language'> {
  submissionResult: SubmitResponseDTO,
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
    submissions: WorkSheetSubmissions,
    user: UserBasicInterface
  };
}
