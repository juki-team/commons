import { Judge, ProblemVerdict, SubmissionRunStatus } from '../judge';
import { CaseResultGroupType } from './submit';

export interface StatusBaseDocument {
  submitId: string,
  problemId: string, // To search
  contestId: string, // To search
  userId: string, // To search
  timestamp: number, // to sort
  verdict: ProblemVerdict,
  memoryUsed: number,
  timeUsed: number,
  points: number,
  manualJudged: boolean,
  verdictByGroups: { [key: number]: CaseResultGroupType },
  status: SubmissionRunStatus,
}
