import type { UserOrganizationBasicInfoResponseDTO } from './user.js';

export type ReactionUserResponseData = {
  key: string;
  user: UserOrganizationBasicInfoResponseDTO;
  createdAt: number;
  updatedAt: number;
};

export interface CommentDataResponseDTO {
  id: string;
  content: string;
  user: UserOrganizationBasicInfoResponseDTO;
  hidden: boolean;
  reactions: {
    [key: string /*emoji*/]: {
      [key: string /*userId*/]: ReactionUserResponseData;
    };
  };
  replies: CommentDataResponseDTO[];
  createdAt: number;
  updatedAt: number;
}
