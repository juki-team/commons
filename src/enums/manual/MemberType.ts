export const MemberType = {
  USER: 'USER',
  TEAM: 'TEAM',
} as const;

export type MemberType = (typeof MemberType)[keyof typeof MemberType];
