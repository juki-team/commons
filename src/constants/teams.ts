import { MemberRole, TeamRole } from '../types';

export const MEMBER_ROLE: { [key in MemberRole]: { value: MemberRole, label: string } } = {
  [MemberRole.COACH]: { value: MemberRole.COACH, label: 'coach' },
  [MemberRole.CO_COACH]: { value: MemberRole.CO_COACH, label: 'co-coach' },
  [MemberRole.STAFF]: { value: MemberRole.STAFF, label: 'staff' },
  [MemberRole.ATTENDEE]: { value: MemberRole.ATTENDEE, label: 'attendee' },
  [MemberRole.RESERVE]: { value: MemberRole.RESERVE, label: 'reserve' },
  [MemberRole.CONTESTANT]: { value: MemberRole.CONTESTANT, label: 'contestant' },
};

export const TEAM_ROLE: { [key in TeamRole]: { value: TeamRole, label: string, level: number } } = {
  [TeamRole.RESTRICTED]: { value: TeamRole.RESTRICTED, label: 'restricted', level: 5 },
  [TeamRole.GUEST]: { value: TeamRole.GUEST, label: 'guest', level: 4 },
  [TeamRole.REGULAR]: { value: TeamRole.REGULAR, label: 'regular', level: 3 },
  [TeamRole.MANAGER]: { value: TeamRole.MANAGER, label: 'manager', level: 2 },
  [TeamRole.ADMIN]: { value: TeamRole.ADMIN, label: 'admin', level: 1 },
  [TeamRole.SUPER_ADMIN]: { value: TeamRole.SUPER_ADMIN, label: 'super admin', level: 0 },
};
