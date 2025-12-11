import { Language } from './prisma';

export enum CodeLanguage {
  C_11 = 'c11',
  CPP_11 = 'cpp11',
  CPP_20 = 'cpp20',
  JAVA_21 = 'java21',
  PYTHON_3 = 'python3',
  PYTHON_PYPY_3 = 'pypy3',
  JAVASCRIPT_NODE_JS_22 = 'nodejs22',
  // DEPRECATED
  PYTHON_2 = 'python2',
  PYTHON_PYPY_2 = 'pypy2',
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
  DIFF = 'DIFF',
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

export type SplitTime = {
  remaining: number,
  label: string,
  milliseconds: number,
  abbreviatedLabel: string,
  digits: number
};

export type ObjectIdType = `${string & { length: 24 }}`;

export type DeviceType = { label: string, isMobile: boolean, isBrowser: boolean, type: string, osLabel: string };
