import { Judge, WorkingIn } from '../types';

export interface VirtualUserResponseDTO {
  id: string,
  judge: Judge,
  email: string,
  username: string,
  password: string,
  submitId: string,
  attempts: number,
  workingIn: WorkingIn,
  updatedAt: Date,
  judgeSubmissionId: string,
}
