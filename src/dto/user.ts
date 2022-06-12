import { UserStatus } from '../types';

export interface UserSummaryListResponseDTO {
  aboutMe: string,
  city: string,
  country: string,
  email: string,
  familyName: string,
  givenName: string,
  imageUrl: string,
  institution: string,
  nickname: string,
  status: UserStatus,
}
