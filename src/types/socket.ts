import type { WebSocketResponseEvent } from '../enums/index.js';
import type { RecordId } from './id.js';

export type ClientId = `${RecordId}|${string}`;

export type WebSocketResponseEventKey = `${WebSocketResponseEvent}-${ClientId}-${string}`;
