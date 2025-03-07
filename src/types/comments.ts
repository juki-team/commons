export type ReactionUser = {
  key: string,
  userId: string,
  createdTimestamp: number;
  updatedTimestamp: number;
}

export interface CommentBaseDocument {
  key: string,
  parentId: string | null,
  content: string,
  reactions: {
    [key: string /*emoji*/]: {
      [key: string /*userId*/]: ReactionUser
    },
  }
}
