import { PointsByGroupsType, ByProgrammingLanguageType } from '../dto';
import { EntityStatus, ProgrammingLanguage } from './commons';

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

export enum ProblemStatus {
  PUBLIC = EntityStatus.PUBLIC,
  RESERVED = EntityStatus.RESERVED,
  PRIVATE = EntityStatus.PRIVATE,
  ARCHIVED = EntityStatus.ARCHIVED,
}

export enum ProblemType {
  STANDARD = 'STANDARD', // The output is evaluated by the judge // Supported
  DYNAMIC = 'DYNAMIC', // The output is evaluated other file // TODO
  INTERACTIVE = 'INTERACTIVE', // The input interact with the output of other file // TODO
}

export enum ProblemMode {
  SUBTASK = 'SUBTASK', // by groups // Supported
  TOTAL = 'TOTAL', // one group // Supported
  PARTIAL = 'PARTIAL', // each testcase +0.1pnts // TODO
}

export type ProblemSettingsType = {
  timeLimit: number,
  memoryLimit: number,
  withPE: boolean,
  type: ProblemType,
  mode: ProblemMode,
  languages: ProgrammingLanguage[],
  byProgrammingLanguage: ByProgrammingLanguageType,
  evaluatorSource: '',
  pointsByGroups: PointsByGroupsType,
}
