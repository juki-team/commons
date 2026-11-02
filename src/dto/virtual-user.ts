import { Cookie, Judge, WorkingIn } from '../types';

export interface VirtualUserResponseDto {
  id: string,
  judge: Judge,
  email: string,
  username: string,
  password: string,
  submitId: string,
  attempts: number,
  workingIn: WorkingIn,
  updatedAt: number,
  judgeSubmissionId: string,
  session: { cookies: Cookie[] }
}
