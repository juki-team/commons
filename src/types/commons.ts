import { Language } from './prisma';

export enum CodeLanguage {
  ICPC_C = 'ICPC_C',
  C = 'C',
  CPP = 'CPP',
  ICPC_CPP = 'ICPC_CPP',
  CPP11 = 'CPP11',
  CPP14 = 'CPP14',
  CPP17 = 'CPP17',
  JAVA = 'JAVA',
  ICPC_PYTHON = 'ICPC_PYTHON',
  PYTHON = 'PYTHON',
  PYTHON2 = 'PYTHON2',
  PYTHON3 = 'PYTHON3',
  JAVASCRIPT = 'JAVASCRIPT',
  PSEUDOCODE_PSEINT = 'PSEUDOCODE_PSEINT',
  LATEX = 'LATEX',
  JSON = 'JSON',
  HTML = 'HTML',
  TEXT = 'TEXT',
  MARKDOWN = 'MARKDOWN',
  ARDUINO = 'ARDUINO',
  DOT = 'DOT',
  MERMAID = 'MERMAID',
}

export enum ScopeData {
  USER = 'USER',
  PROBLEM = 'PROBLEM',
  CONTEST = 'CONTEST',
  ATTEMPT = 'ATTEMPT'
}

export enum Status {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  LOADING = 'LOADING',
  NONE = 'NONE'
}

export enum EntityStatus {
  PUBLIC = 'PUBLIC', // Active for the users
  RESERVED = 'RESERVED', // On preparation
  PRIVATE = 'PRIVATE',
  ARCHIVED = 'ARCHIVED',
}

export enum EntityAccess {
  PRIVATE = 'PRIVATE',
  RESTRICTED = 'RESTRICTED',
  PUBLIC = 'PUBLIC',
  EXPOSED = 'EXPOSED',
}

export type TextLanguageType = { [key in Language]: string };

export type SplitTime = { remaining: number, label: string, milliseconds: number, abbreviatedLabel: string };

export type ObjectIdType = `${string & { length: 24 }}`;
