import { ContestStatus } from '../types';

export const CONTEST_STATUS: { [key in ContestStatus]: { value: ContestStatus, label: string } } = {
  [ContestStatus.PUBLIC]: { value: ContestStatus.PUBLIC, label: 'public' },
  [ContestStatus.RESERVED]: { value: ContestStatus.RESERVED, label: 'reserved' },
  [ContestStatus.ARCHIVED]: { value: ContestStatus.ARCHIVED, label: 'archived' }
};
