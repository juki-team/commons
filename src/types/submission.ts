import { ProblemVerdict } from './judge';

export type RunResult = {
  timeUsed: number,
  memoryUsed: number,
  exitCode: number,
  log: string,
  err: string,
  out: string
}
export type CompilationRunResultType = RunResult;

export type TestCaseRunResultType = Omit<RunResult, 'out'> & {
  verdict: ProblemVerdict,
  group: number,
  points: number, // Used by PARTIAL mode problems
}

export type TestCaseRunResultByGroupType = TestCaseRunResultType;
