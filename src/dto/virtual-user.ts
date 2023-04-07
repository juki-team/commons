import { WorkingIn } from '../types';

export interface VirtualUserResponseDTO {
  email: string,
  user: string,
  password: string,
  submitId: string,
  attempts: number,
  workingIn: WorkingIn,
  updatedAt: Date,
}
