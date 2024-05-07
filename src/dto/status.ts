import { JkmdSheetStatusType, QuizProblemSheetStatusProcessedType, UserBasicInterface } from '../types';

export type NoteSheetStatusResponseDTO = {
  [key: string]: {
    userId: string,
    worksheetId: string,
    content: { [key: string]: QuizProblemSheetStatusProcessedType | JkmdSheetStatusType },
    user: UserBasicInterface
  }
};
