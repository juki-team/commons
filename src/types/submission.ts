import { ProblemVerdict } from './judge';

export type VerdictByGroupType = {
  timeUsed: number,
  memoryUsed: number,
  points: number,
  verdict: ProblemVerdict,
  err: string,
  log: string,
}
