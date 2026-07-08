import type { WebSocketResponseEvent } from '../enums/index.js';
import type { RecordId } from './id.js';

export type ClientId = `${RecordId}|${string}`;

export type WebSocketResponseEventKey = `${WebSocketResponseEvent}-${ClientId}-${string}`;

export type InfoLogCaseStatus = { inputKey: string; out: string; err: string; log: string };

export type TestInfo = {
  sampleCase: boolean;
  caseResultsExecuted: number;
  caseResultsTotal: number;
};
