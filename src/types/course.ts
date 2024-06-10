import { EntityMembers, EntityState } from './entity';

export enum CourseState {
  RELEASED = EntityState.RELEASED,
  IN_REVIEW = EntityState.IN_REVIEW,
  IN_DRAFT = EntityState.IN_DRAFT,
  ARCHIVED = EntityState.ARCHIVED,
}

export interface CourseBaseDocument {
  key: string,
  title: string,
  abstract: string,
  description: string,
  coverImageUrl: string,
  state: CourseState,
  lessons: {
    worksheetKey: string,
  }[],
  members: EntityMembers,
}
