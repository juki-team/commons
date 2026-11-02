import { UserOrganizationBasicInfoResponseDto } from './user';

export type ReactionUserResponseData = {
  key: string,
  user: UserOrganizationBasicInfoResponseDto
  createdAt: number;
  updatedAt: number;
}

export interface CommentDataResponseDto {
  id: string,
  content: string,
  user: UserOrganizationBasicInfoResponseDto,
  hidden: boolean,
  reactions: {
    [key: string /*emoji*/]: {
      [key: string /*userId*/]: ReactionUserResponseData
    },
  }
  replies: CommentDataResponseDto[];
  createdAt: number;
  updatedAt: number;
}
