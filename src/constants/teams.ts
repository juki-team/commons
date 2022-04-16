import { MemberRole } from '../types';

export const MEMBER_ROLE: { [key in MemberRole]: { value: MemberRole, print: string } } = {
  [MemberRole.COACH]: { value: MemberRole.COACH, print: 'coach' },
  [MemberRole.CO_COACH]: { value: MemberRole.CO_COACH, print: 'co-coach' },
  [MemberRole.STAFF]: { value: MemberRole.STAFF, print: 'staff' },
  [MemberRole.ATTENDEE]: { value: MemberRole.ATTENDEE, print: 'attendee' },
  [MemberRole.RESERVE]: { value: MemberRole.RESERVE, print: 'reserve' },
  [MemberRole.CONTESTANT]: { value: MemberRole.CONTESTANT, print: 'contestant' },
};
