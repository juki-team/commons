export type ReactionUser = {
  [key: string]: {
    userId: string,
    createdAt: Date;
    updatedAt: Date;
  }
}

export interface CommentBaseDocument {
  parentId: string | null,
  postKey: string,
  content: string,
  reactions: {
    '✅': ReactionUser,
    '👍': ReactionUser,
    '👏': ReactionUser,
    '💡': ReactionUser,
    '📝': ReactionUser,
    '🤯': ReactionUser,
    '🔥': ReactionUser,
  }
}
