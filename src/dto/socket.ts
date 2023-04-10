import { ProblemVerdict, SubmissionRunStatus } from '../types';

export type InfoLogCaseStatus = { inputKey: string, out: string, err: string, log: string };

export interface SocketEventRunResponseDTO {
  runId: string,
  messageTimestamp: number,
  status: SubmissionRunStatus,
  log: InfoLogCaseStatus
}

export type TestInfoType = {
  sampleCase: boolean,
  caseResultsExecuted: number,
  caseResultsTotal: number,
}

export interface SocketEventSubmissionResponseDTO {
  submitId: string,
  messageTimestamp: number,
  status: SubmissionRunStatus,
  verdict: ProblemVerdict,
  points: number,
  testInfo?: TestInfoType,
}
