import { SubmissionRunStatus } from '../types';

export type InfoLogCaseStatus = { inputKey: string, out: string, err: string, log: string };

export interface SocketEventRunResponseDTO {
  runId: string,
  messageTimestamp: number,
  status: SubmissionRunStatus,
  log: InfoLogCaseStatus
}
