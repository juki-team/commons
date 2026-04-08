import type { UserPermissionsResponseDTO } from '../dto/index.js';
import { UserRole } from '../prisma/enums/index.js';

export const USER_ROLE: { [Key in UserRole]: { value: UserRole; label: string; level: number } } = {
  [UserRole.RESTRICTED]: { value: UserRole.RESTRICTED, label: 'restricted', level: 6 },
  [UserRole.GUEST]: { value: UserRole.GUEST, label: 'guest', level: 5 },
  [UserRole.LIMITED]: { value: UserRole.LIMITED, label: 'limited', level: 4 },
  [UserRole.REGULAR]: { value: UserRole.REGULAR, label: 'regular', level: 3 },
  [UserRole.MANAGER]: { value: UserRole.MANAGER, label: 'manager', level: 2 },
  [UserRole.ADMIN]: { value: UserRole.ADMIN, label: 'admin', level: 1 },
  [UserRole.SUPER_ADMIN]: { value: UserRole.SUPER_ADMIN, label: 'super admin', level: 0 },
};

export const EMPTY_USER_PERMISSIONS: UserPermissionsResponseDTO = {
  users: {
    create: false,
    manage: false,
    administrate: false,
  },
  problems: {
    create: false,
    manage: false,
  },
  submissions: {
    manage: false,
  },
  contests: {
    create: false,
    manage: false,
  },
  company: {
    manage: false,
    administrate: false,
  },
  services: {
    administrate: false,
  },
};
