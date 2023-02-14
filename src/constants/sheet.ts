import { SheetRole } from '../types';

export const SHEET_ROLE: { [key in SheetRole]: { value: SheetRole, label: string, level: number } } = {
  [SheetRole.RESTRICTED]: { value: SheetRole.RESTRICTED, label: 'restricted', level: 4 },
  [SheetRole.GUEST]: { value: SheetRole.GUEST, label: 'guest', level: 3 },
  [SheetRole.REGULAR]: { value: SheetRole.REGULAR, label: 'regular', level: 2 },
  [SheetRole.MANAGER]: { value: SheetRole.MANAGER, label: 'manager', level: 1 },
  [SheetRole.SUPER_ADMIN]: { value: SheetRole.SUPER_ADMIN, label: 'super admin', level: 0 },
};
