export const MenuViewMode = {
  HORIZONTAL: 'HORIZONTAL',
  VERTICAL: 'VERTICAL',
} as const;

export type MenuViewMode = (typeof MenuViewMode)[keyof typeof MenuViewMode];
