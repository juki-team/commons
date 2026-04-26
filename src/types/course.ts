import type { EntityState } from '../enums/index.js';
import type { EntityMembers } from './entity.js';

export interface CourseBaseDocument {
  key: string;
  title: string;
  abstract: string;
  description: string;
  coverImageUrl: string;
  state: EntityState;
  lessons: {
    worksheetId: string;
  }[];
  members: EntityMembers;
}
