import { ProgrammingLanguage } from '../commons';
import { Judge, ProblemVerdict } from '../judge';
import { RunResult } from '../submission';

export type CaseResultType = Omit<RunResult, 'out'> & {
  verdict: ProblemVerdict,
  caseKey: string,
  groups: number,
  points: number,
}

export type CaseResultGroupType = Omit<RunResult, 'out'> & {
  verdict: ProblemVerdict,
  groups: number,
  points: number,
}

export type CompilationRunResultType = RunResult & {
  success: boolean,
};

export interface SubmitBaseDocument {
  userId: string,
  problemId: string,
  judge: Judge,
  timestamp: number,
  source: string,
  language: ProgrammingLanguage,
  message: string,
  compilationRunResult: CompilationRunResultType,
  evaluatorCompilationRunResult: CompilationRunResultType,
  sampleCaseResults: CaseResultType[],
  testCaseResults: CaseResultType[],
  sampleCasesSuccess: boolean,
  // contest data:
  contestId?: string,
}
