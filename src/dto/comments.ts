import { UserCompanyBasicInfoResponseDTO } from './user';

export type ReactionUserResponseData = {
  [key: string]: {
    user: UserCompanyBasicInfoResponseDTO
    createdTimestamp: number;
    updatedTimestamp: number;
  }
}

export interface CommentDataResponseDTO {
  id: string,
  content: string,
  user: UserCompanyBasicInfoResponseDTO,
  reactions: {
    '✅': ReactionUserResponseData,
    '👍': ReactionUserResponseData,
    '👏': ReactionUserResponseData,
    '💡': ReactionUserResponseData,
    '📝': ReactionUserResponseData,
    '🤯': ReactionUserResponseData,
    '🔥': ReactionUserResponseData,
  }
  replies: CommentDataResponseDTO[];
  createdTimestamp: number;
  updatedTimestamp: number;
}
