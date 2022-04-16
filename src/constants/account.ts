import { UserStatus } from '../types';

export const USER_STATUS: { [key in UserStatus]: { value: UserStatus, label: string } } = {
  [UserStatus.ACTIVE]: { value: UserStatus.ACTIVE, label: 'active' },
  [UserStatus.REPORTED]: { value: UserStatus.REPORTED, label: 'reported' },
  [UserStatus.ARCHIVED]: { value: UserStatus.ARCHIVED, label: 'archived' },
};
