export const EntityCollection = {
  COMPANY: 'COMPANY',
  PROBLEM: 'PROBLEM',
  CONTEST: 'CONTEST',
  JUDGE: 'JUDGE',
  USER: 'USER',
  SUBMISSION: 'SUBMISSION',
} as const;

export type EntityCollection = (typeof EntityCollection)[keyof typeof EntityCollection];
