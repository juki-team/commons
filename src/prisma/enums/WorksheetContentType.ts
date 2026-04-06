export const WorksheetContentType = {
  JK_MD: 'JK_MD',
  CODE_EDITOR: 'CODE_EDITOR',
  GRAPH: 'GRAPH',
  QUIZ_PROBLEM: 'QUIZ_PROBLEM',
  QUIZ_TEXT: 'QUIZ_TEXT',
  QUIZ_OPTIONS: 'QUIZ_OPTIONS',
  NEW_PAGE: 'NEW_PAGE',
} as const;

export type WorksheetContentType = (typeof WorksheetContentType)[keyof typeof WorksheetContentType];
