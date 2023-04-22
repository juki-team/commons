import { WorkingIn } from '../types';

export interface VirtualUserResponseDTO {
  id: string,
  email: string,
  username: string,
  password: string,
  submitId: string,
  attempts: number,
  workingIn: WorkingIn,
  updatedAt: Date,
  judgeSubmissionId: string,
}
