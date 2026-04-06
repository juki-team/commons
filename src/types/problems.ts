import type { ProblemScoringMode, ProblemType } from '../prisma/enums';
import type { CodeLanguage, TextLanguage } from './commons';
import type { EntityMembers } from './entity';
import type { ProblemTestCase } from './services';

export interface TestCase {
  id: string;
  group: number;
  input: boolean;
  output: boolean;
}

export enum TypeTestCase {
  INPUT = 'INPUT',
  OUTPUT = 'OUTPUT',
}

export enum ProblemInput {
  STANDARD = 'STANDARD',
  INTERACTIVE = 'INTERACTIVE',
}

export enum ProblemOutput {
  STANDARD = 'STANDARD',
  DYNAMIC = 'DYNAMIC',
  INTERACTIVE = 'INTERACTIVE',
}

export type ProblemSettingsPointsByGroups = {
  [key: number]: { points: number; partial: number; group: number; description: TextLanguage };
};

export type ProblemSettingsByProgrammingLanguage = {
  [key: string]: { language: CodeLanguage; timeLimit: number; memoryLimit: number };
};

export type ProblemSampleCases = { input: string; output: string }[];

export type ProblemStatement = {
  description: TextLanguage;
  input: TextLanguage;
  output: TextLanguage;
  sampleCases: ProblemSampleCases;
  note: TextLanguage;
  html: TextLanguage;
  pdfUrl: TextLanguage;
};

export type ProblemSettings = {
  timeLimit: number;
  memoryLimit: number;
  withPE: boolean;
  type: ProblemType;
  scoringMode: ProblemScoringMode;
  byProgrammingLanguage: ProblemSettingsByProgrammingLanguage;
  evaluatorSource: string;
  pointsByGroups: ProblemSettingsPointsByGroups;
};

export type ProblemUser = {
  isOwner: boolean;
  isAdministrator: boolean;
  isManager: boolean;
  isSpectator: boolean;
  solved: boolean;
  tried: boolean;
};

export interface ProblemBaseDocument {
  name: string;
  shortname: string;
  author: string;
  settings: ProblemSettings;
  tags: string[];
  statement: ProblemStatement;
  editorial: TextLanguage;
  judgeId: string;
  key: string;
  testCases: ProblemTestCase[];
  testCasesUpdatedAtTimestamp: number;
  members: EntityMembers;
  costs: {
    unlockEditorial: number;
    unlockHint: number;
    viewTestCases: number;
  };
  rewardJukiCoins: {
    forSolving: number;
    forSolvingFirstTry: number;
    forSolvingInAnExtraLanguage: number;
  };
}
