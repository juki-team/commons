import { ContestStatus } from '../types';

export const CONTEST_STATUS: { [key in ContestStatus]: { value: ContestStatus, label: string } } = {
  [ContestStatus.ACTIVE]: { value: ContestStatus.ACTIVE, label: 'active' },
  [ContestStatus.ARCHIVED]: { value: ContestStatus.ARCHIVED, label: 'archived' }
};
