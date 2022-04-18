import { ProblemVerdict } from './judge';

export type VerdictType = {
  timeUsed: number,
  memoryUsed: number,
  log: string,
  err: string,
  verdict: ProblemVerdict,
  group: number,
}

export type VerdictByGroupType = VerdictType & {
  points: number,
}
