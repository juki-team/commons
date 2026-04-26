export const ScopeData = {
  USER: 'USER',
  PROBLEM: 'PROBLEM',
  CONTEST: 'CONTEST',
  ATTEMPT: 'ATTEMPT',
} as const;

export type ScopeData = (typeof ScopeData)[keyof typeof ScopeData];
