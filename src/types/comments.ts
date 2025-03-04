export type ReactionUser = {
  [key: string]: {
    userId: string,
    createdAt: Date;
    updatedAt: Date;
  }
}

export interface CommentBaseDocument {
  key: string,
  parentId: string | null,
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
