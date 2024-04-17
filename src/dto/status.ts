import { JkmdSheetStatusType, QuizProblemSheetStatusType, UserBasicInterface } from '../types';

export type NoteSheetStatusResponseDTO = {
  [key: string]: {
    userId: string,
    worksheetId: string,
    content: { [key: string]: QuizProblemSheetStatusType | JkmdSheetStatusType },
    user: UserBasicInterface
  }
};
