import { EntityState, EntityStateDocument, UserBasicInterface } from '../types';
import { CourseType } from '../types/prisma';
import { EntityMembersDTO, EntityMembersResponseDTO } from './entity';
import { WorkSheetStatusContent } from './status';

export interface CourseBaseDocument {
  key: string,
  title: string,
  abstract: string,
  description: string,
  coverImageUrl: string,
  type: CourseType,
  lessons: {
    worksheetId: string,
  }[],
}

export type CourseUserType = {
  isOwner: boolean,
  isEditor: boolean,
  isEnrolled: boolean,
  isGuest: boolean,
};

export interface CourseSummaryListResponseDTO {
  key: string,
  title: string,
  abstract: string,
  description: string,
  coverImageUrl: string,
  type: CourseType,
  state: EntityState,
  ownerUser: UserBasicInterface,
  user: CourseUserType,
}

export interface CourseResponseDTO extends CourseSummaryListResponseDTO {
  lessons: {
    worksheetId: string,
    userProgress: {
      content: WorkSheetStatusContent,
      progress: number,
    }
  }[],
  members: EntityMembersResponseDTO,
}

export interface PostCourseDTO extends CourseBaseDocument, EntityStateDocument {
  members: EntityMembersDTO,
}

export interface PutCourseDTO extends PostCourseDTO {
}
