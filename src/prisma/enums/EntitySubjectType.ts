export const EntitySubjectType = {
  USER: 'USER',
  GROUP: 'GROUP',
  PUBLIC: 'PUBLIC', // wildcard — anyone. subjectId must be 0
  SHARE_LINK: 'SHARE_LINK',
} as const;

export type EntitySubjectType = (typeof EntitySubjectType)[keyof typeof EntitySubjectType];
