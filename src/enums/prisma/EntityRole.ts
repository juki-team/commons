export const EntityRole = {
  ADMINISTRATOR: 'ADMINISTRATOR',
  MANAGER: 'MANAGER',
  PARTICIPANT: 'PARTICIPANT',
  SPECTATOR: 'SPECTATOR',
  GUEST: 'GUEST',
} as const;

export type EntityRole = (typeof EntityRole)[keyof typeof EntityRole];
