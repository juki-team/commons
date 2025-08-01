import { CodeLanguage, TextLanguageType } from './commons';
import { EntityMembers } from './entity';
import { ProblemTestCaseType } from './services';

export interface TestCase {
  id: string,
  group: number,
  input: boolean,
  output: boolean,
}

export enum TypeTestCase {
  INPUT = 'INPUT',
  OUTPUT = 'OUTPUT'
}

export enum ProblemInput {
  STANDARD = 'STANDARD',
  INTERACTIVE = 'INTERACTIVE'
}

export enum ProblemOutput {
  STANDARD = 'STANDARD',
  DYNAMIC = 'DYNAMIC',
  INTERACTIVE = 'INTERACTIVE'
}

export enum ProblemType {
  STANDARD = 'STANDARD', // The output is evaluated by the judge // Supported
  DYNAMIC = 'DYNAMIC', // The output is evaluated other file // Supported
  INTERACTIVE = 'INTERACTIVE', // The input interact with the output of other file // TODO
}

export enum ProblemScoringMode {
  SUBTASK = 'SUBTASK', // by groups // Supported
  TOTAL = 'TOTAL', // one group // Supported
  PARTIAL = 'PARTIAL', // each testcase +0.1 points // Supported
}

export type ProblemSettingsPointsByGroupsType = {
  [key: number]: { points: number, partial: number, group: number, description: TextLanguageType, }
};

export type ProblemSettingsByProgrammingLanguageType = {
  [key: string]: { language: CodeLanguage, timeLimit: number, memoryLimit: number }
};

export type ProblemSampleCasesType = { input: string, output: string }[];

export type ProblemStatementType = {
  description: TextLanguageType,
  input: TextLanguageType,
  output: TextLanguageType,
  sampleCases: ProblemSampleCasesType,
  note: TextLanguageType,
  html: TextLanguageType,
  pdfUrl: TextLanguageType,
};

export type ProblemSettingsType = {
  timeLimit: number,
  memoryLimit: number,
  withPE: boolean,
  type: ProblemType,
  scoringMode: ProblemScoringMode,
  byProgrammingLanguage: ProblemSettingsByProgrammingLanguageType,
  evaluatorSource: string,
  pointsByGroups: ProblemSettingsPointsByGroupsType,
}

export type ProblemUserType = {
  isOwner: boolean,
  isManager: boolean,
  isSpectator: boolean,
  solved: boolean,
  tried: boolean,
}

export interface ProblemBaseDocument {
  name: string,
  shortname: string,
  author: string,
  settings: ProblemSettingsType,
  tags: string[],
  statement: ProblemStatementType,
  editorial: TextLanguageType,
  judgeId: string,
  key: string,
  testCases: ProblemTestCaseType[],
  testCasesUpdatedAtTimestamp: number,
  members: EntityMembers,
  costs: {
    unlockEditorial: number,
    unlockHint: number,
    viewTestCases: number,
  },
  rewardJukiCoins: {
    forSolving: number,
    forSolvingFirstTry: number,
    forSolvingInAnExtraLanguage: number,
  }
}
