import { WithId } from 'mongodb';
import { CompilationRunResultType, ProgrammingLanguage } from '../types';
import { CaseResultType } from './index';

export interface SubmitBaseDocument {
  userId: string,
  problemId: string,
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
  problemIndex?: string,
}

export interface CreateSubmitDocument extends SubmitBaseDocument {
  createdAt: Date,
}

export type UpdateSubmitDocument = Partial<SubmitBaseDocument>;

export interface SubmitDocument extends WithId<CreateSubmitDocument> {
  updatedAt: Date,
}

// Others
export type SubmitResults = {
  compilationRunResult: CompilationRunResultType,
  evaluatorCompilationRunResult: CompilationRunResultType,
  sampleCaseResults: CaseResultType[],
  sampleCasesSuccess: boolean,
  testCaseResults: CaseResultType[],
  // problemType: ProblemType,
}

export type JudgingGradeBodyType = {
  submitResults: SubmitResults,
  statusId: string,
}

export type CaseType = { caseKey: string, group: number };

export type JudgingTestCaseCompletedBodyType = {
  statusId: string,
  runId: string,
  key: string,
  submitResults: SubmitResults,
  chunkCases: CaseType[],
  sampleCase: boolean,
}

export type JudgingCompiledBodyType = {
  statusId: string,
  sourceFileName: string,
  runId: string,
};
