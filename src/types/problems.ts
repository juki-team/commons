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

export enum ProblemInput { // used on JUKI JUDGE v1
  STANDARD = 'STANDARD',
  INTERACTIVE = 'INTERACTIVE'
}

export enum ProblemOutput { // used on JUKI JUDGE v1
  STANDARD = 'STANDARD',
  DYNAMIC = 'DYNAMIC',
  INTERACTIVE = 'INTERACTIVE'
}

export enum ProblemStatus { // used on JUKI JUDGE v1
  ARCHIVED = 'ARCHIVED',
  PRIVATE = 'PRIVATE',
  RESERVED = 'RESERVED',
  PUBLIC = 'PUBLIC',
}

export enum ProblemType { // used on JUKI JUDGE v1
  STANDARD = 'STANDARD', // The output is evaluated by the judge
  DYNAMIC = 'DYNAMIC', // The output is evaluated other file
  INTERACTIVE = 'INTERACTIVE', // The input interact with the output of other file
}

export enum ProblemMode { // used on JUKI JUDGE v1
  SUBTASK = 'SUBTASK', // by groups
  TOTAL = 'TOTAL', // one group
  PARTIAL = 'PARTIAL', // each testcase +0.1pnts
}