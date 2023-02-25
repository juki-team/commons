import { EntityStatus } from '../types/commons';

export enum FolderStatus {
  PUBLIC = EntityStatus.PUBLIC,
  PRIVATE = EntityStatus.PRIVATE,
  ARCHIVED = EntityStatus.ARCHIVED,
}
