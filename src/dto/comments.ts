import type { UserOrganizationBasicInfoResponseDto } from './user.js';

export type ReactionUserResponseDto = {
  key: string;
  user: UserOrganizationBasicInfoResponseDto;
  createdAt: number;
  updatedAt: number;
};

export interface CommentDataResponseDto {
  id: string;
  content: string;
  user: UserOrganizationBasicInfoResponseDto;
  hidden: boolean;
  reactions: {
    [key: string /*emoji*/]: {
      [key: string /*userId*/]: ReactionUserResponseDto;
    };
  };
  replies: CommentDataResponseDto[];
  createdAt: number;
  updatedAt: number;
}
