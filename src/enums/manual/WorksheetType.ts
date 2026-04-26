export const WorksheetType = {
  JK_MD: 'JK_MD',
  CODE_EDITOR: 'CODE_EDITOR',
  LIST: 'LIST',
  GRAPH: 'GRAPH',
  QUIZ_PROBLEM: 'QUIZ_PROBLEM',
  QUIZ_TEXT: 'QUIZ_TEXT',
  QUIZ_OPTIONS: 'QUIZ_OPTIONS',
  NEW_PAGE: 'NEW_PAGE',
} as const;

export type WorksheetType = (typeof WorksheetType)[keyof typeof WorksheetType];
