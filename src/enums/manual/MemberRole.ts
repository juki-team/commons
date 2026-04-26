export const MemberRole = {
  COACH: 'COACH',
  CO_COACH: 'CO_COACH',
  CONTESTANT: 'CONTESTANT',
  ATTENDEE: 'ATTENDEE',
  RESERVE: 'RESERVE',
  STAFF: 'STAFF',
} as const;

export type MemberRole = (typeof MemberRole)[keyof typeof MemberRole];
