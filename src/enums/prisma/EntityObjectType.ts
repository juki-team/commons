export const EntityObjectType = {
  PROBLEM: 'PROBLEM',
  CONTEST: 'CONTEST',
  COURSE: 'COURSE',
  CLASS: 'CLASS',
  GROUP: 'GROUP',
  WORKSHEET: 'WORKSHEET',
  FILE: 'FILE',
  EXCALIDRAW: 'EXCALIDRAW',
  MARKDOWN: 'MARKDOWN',
  MERMAID: 'MERMAID',
} as const;

export type EntityObjectType = (typeof EntityObjectType)[keyof typeof EntityObjectType];
