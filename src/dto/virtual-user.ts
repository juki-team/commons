import { Judge, WorkingIn } from '../types';

export declare type CookieSameSite = 'Strict' | 'Lax' | 'None';

export declare type CookiePriority = 'Low' | 'Medium' | 'High';

export declare interface CookiePartitionKey {
  sourceOrigin: string;
  hasCrossSiteAncestor?: boolean;
}

export declare interface Cookie {
  name: string;
  value: string;
  domain: string;
  path: string;
  expires: number;
  size: number;
  httpOnly: boolean;
  secure: boolean;
  session: boolean;
  sameSite?: CookieSameSite;
  priority?: CookiePriority;
  sameParty?: boolean;
  // sourceScheme?: CookieSourceScheme;
  partitionKey?: CookiePartitionKey | string;
  partitionKeyOpaque?: boolean;
}

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
  session: { cookies: Cookie[] }
}
