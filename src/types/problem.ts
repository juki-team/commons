import type { CodeLanguage, EntityRole, ProblemScoringMode, ProblemType } from '../enums/index.js';
import type { EntityMembers } from './entity.js';
import type { ProblemTestCase } from './services.js';
import type { TextLanguage } from './text.js';

export interface TestCase {
  id: string;
  group: number;
  input: boolean;
  output: boolean;
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

export type ProblemUserDto = {
  role: EntityRole;
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
  testCasesUpdatedAt: number;
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

export type KeyFileType = 'input' | 'output';
