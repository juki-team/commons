import { JkmdSheetStatusType, QuizProblemSheetStatusProcessedType, UserBasicInterface } from '../types';

export type WorkSheetStatusContent = {
  [key: string]: QuizProblemSheetStatusProcessedType | JkmdSheetStatusType
}

export interface NoteSheetStatusResponseDTO {
  [key: string]: {
    userId: string,
    worksheetId: string,
    content: WorkSheetStatusContent,
    user: UserBasicInterface
  }
}
