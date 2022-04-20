import { ProblemVerdict } from './judge';

export type DataLogType = {
  timeUsed: number,
  memoryUsed: number,
  exitCode: number,
}

export type RunResult = DataLogType & {
  log: string,
  err: string,
  out: string
}

export type CompilationRunResultType = RunResult & {
  success: boolean,
};

export type TestCaseRunResultType = Omit<RunResult, 'out'> & {
  verdict: ProblemVerdict,
  group: number,
  points: number, // Used by PARTIAL mode problems
}

export type TestCaseRunResultByGroupType = TestCaseRunResultType;
