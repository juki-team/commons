export const Judge = {
  JUKI_JUDGE: 'JUKI_JUDGE',
  CODEFORCES: 'CODEFORCES',
  CODEFORCES_GYM: 'CODEFORCES_GYM',
  JV_UMSA: 'JV_UMSA',
  UVA_ONLINE_JUDGE: 'UVA_ONLINE_JUDGE',
  AT_CODER: 'AT_CODER',
  CODECHEF: 'CODECHEF',
  TOPCODER: 'TOPCODER',
  LEETCODE: 'LEETCODE',
} as const;

export type Judge = (typeof Judge)[keyof typeof Judge];
