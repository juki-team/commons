import { MemberRole } from '../types';

export const MEMBER_ROLE: { [key in MemberRole]: { value: MemberRole, label: string } } = {
  [MemberRole.COACH]: { value: MemberRole.COACH, label: 'coach' },
  [MemberRole.CO_COACH]: { value: MemberRole.CO_COACH, label: 'co-coach' },
  [MemberRole.STAFF]: { value: MemberRole.STAFF, label: 'staff' },
  [MemberRole.ATTENDEE]: { value: MemberRole.ATTENDEE, label: 'attendee' },
  [MemberRole.RESERVE]: { value: MemberRole.RESERVE, label: 'reserve' },
  [MemberRole.CONTESTANT]: { value: MemberRole.CONTESTANT, label: 'contestant' },
};
