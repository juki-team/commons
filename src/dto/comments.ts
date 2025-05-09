import { UserCompanyBasicInfoResponseDTO } from './user';

export type ReactionUserResponseData = {
  key: string,
  user: UserCompanyBasicInfoResponseDTO
  createdTimestamp: number;
  updatedTimestamp: number;
}

export interface CommentDataResponseDTO {
  id: string,
  content: string,
  user: UserCompanyBasicInfoResponseDTO,
  hidden: boolean,
  reactions: {
    [key: string /*emoji*/]: {
      [key: string /*userId*/]: ReactionUserResponseData
    },
  }
  replies: CommentDataResponseDTO[];
  createdTimestamp: number;
  updatedTimestamp: number;
}
