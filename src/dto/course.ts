import { UserBasicInterface } from '../types/users';
import { CourseBaseDocument, CourseState } from '../types/course';
import { EntityMembersDTO, EntityMembersResponseDTO } from './entity';
import { WorkSheetStatusContent } from './status';

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
  state: CourseState,
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

export interface PostCourseDTO extends CourseBaseDocument {
  state: CourseState,
  members: EntityMembersDTO,
}

export interface PutCourseDTO extends PostCourseDTO {
}
