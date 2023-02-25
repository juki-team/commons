import { EntityStatus } from '../types/commons';

export enum FileStatus {
  PUBLIC = EntityStatus.PUBLIC,
  RESERVED = EntityStatus.RESERVED,
  PRIVATE = EntityStatus.PRIVATE,
  ARCHIVED = EntityStatus.ARCHIVED,
}

export enum FileRole {
  RESTRICTED = 'RESTRICTED',
  GUEST = 'GUEST',
  REGULAR = 'REGULAR',
  MASTER = 'MASTER',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN'
}
