export type ReactionUser = {
  key: string;
  userId: string;
  createdAt: number;
  updatedAt: number;
};

export interface CommentBaseDocument {
  key: string;
  parentId: string | null;
  content: string;
  hidden: boolean;
  reactions: {
    [key: string /*emoji*/]: {
      [key: string /*userId*/]: ReactionUser;
    };
  };
}
