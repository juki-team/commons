import { SheetRole, SheetStatus } from '../types';

export const SHEET_ROLE: { [key in SheetRole]: { value: SheetRole, label: string, level: number } } = {
  [SheetRole.RESTRICTED]: { value: SheetRole.RESTRICTED, label: 'restricted', level: 4 },
  [SheetRole.GUEST]: { value: SheetRole.GUEST, label: 'guest', level: 3 },
  [SheetRole.REGULAR]: { value: SheetRole.REGULAR, label: 'regular', level: 2 },
  [SheetRole.MANAGER]: { value: SheetRole.MANAGER, label: 'manager', level: 1 },
  [SheetRole.SUPER_ADMIN]: { value: SheetRole.SUPER_ADMIN, label: 'super admin', level: 0 },
};

export const SHEET_STATUS: { [key in SheetStatus]: { value: SheetStatus, label: string, description: string } } = {
  [SheetStatus.ARCHIVED]: {
    value: SheetStatus.ARCHIVED,
    label: 'archived',
    description: 'the sheet will not appear for anyone, contact the administrator to see it again',
  },
  [SheetStatus.PRIVATE]: {
    value: SheetStatus.PRIVATE,
    label: 'reserved',
    description: 'the sheet will appear in the sheet list only for sheet editors and users will have access according to' +
      ' their roles',
  },
  [SheetStatus.PUBLIC]: {
    value: SheetStatus.PUBLIC,
    label: 'public',
    description: 'the sheet will appear in the sheet list and users will be able to check it',
  },
};
