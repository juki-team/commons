import { Language } from './prisma';

export enum ProgrammingLanguage {
  C = 'C',
  CPP = 'CPP',
  CPP11 = 'CPP11',
  CPP14 = 'CPP14',
  CPP17 = 'CPP17',
  JAVA = 'JAVA',
  PYTHON = 'PYTHON',
  PYTHON3 = 'PYTHON3',
  JAVASCRIPT = 'JAVASCRIPT',
  JSON = 'JSON',
  TEXT = 'TEXT',
  MARKDOWN = 'MARKDOWN',
  ARDUINO = 'ARDUINO'
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

export enum EntityType {
  PUBLIC = 'PUBLIC', // For all users
  PRIVATE = 'PRIVATE', // For invited users
}

export enum EntityStatus {
  PUBLIC = 'PUBLIC', // Active for the users
  RESERVED = 'RESERVED', // On preparation
  PRIVATE = 'PRIVATE',
  ARCHIVED = 'ARCHIVED',
}

export type TextLanguageType = { [key in Language]: string };
