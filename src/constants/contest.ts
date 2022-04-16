import { ContestStatus } from '../types';

export const CONTEST_STATUS: { [key in ContestStatus]: { value: ContestStatus, print: string } } = {
  [ContestStatus.ACTIVE]: { value: ContestStatus.ACTIVE, print: 'Active' },
  [ContestStatus.ARCHIVED]: { value: ContestStatus.ARCHIVED, print: 'Archived' }
};
