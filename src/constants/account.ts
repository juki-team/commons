import { UserStatus } from '../types';

export const USER_STATUS: { [key in UserStatus]: { value: UserStatus, print: string } } = {
  [UserStatus.ACTIVE]: { value: UserStatus.ACTIVE, print: 'active' },
  [UserStatus.REPORTED]: { value: UserStatus.REPORTED, print: 'reported' },
  [UserStatus.ARCHIVED]: { value: UserStatus.ARCHIVED, print: 'archived' },
};
