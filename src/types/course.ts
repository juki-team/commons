import { EntityMembers, EntityState } from './entity';

export interface CourseBaseDocument {
  key: string,
  title: string,
  abstract: string,
  description: string,
  coverImageUrl: string,
  state: EntityState,
  lessons: {
    worksheetId: string,
  }[],
  members: EntityMembers,
}
