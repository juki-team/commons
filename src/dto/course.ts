import { CourseBaseDocument, CourseState } from '../types/course';
import { UserBasicInfoInterface } from '../types/users';
import { DocumentMembersDTO, DocumentMembersResponseDTO } from './entity';
import { WorkSheetStatusContent } from './status';
import { UserBasicInfoResponseDTO } from './user';

export type CourseUserResponseDTO = {
  isOwner: boolean,
  isManager: boolean,
  isParticipant: boolean,
  isGuest: boolean,
};

export interface CourseSummaryListResponseDTO {
  key: string,
  title: string,
  abstract: string,
  description: string,
  coverImageUrl: string,
  state: CourseState,
  owner: UserBasicInfoInterface,
  user: CourseUserResponseDTO,
}

export interface CourseDataResponseDTO extends CourseSummaryListResponseDTO {
  lessons: {
    worksheetId: string,
    usersProgress: {
      [key: string]: {
        user: UserBasicInfoResponseDTO,
        content: WorkSheetStatusContent,
        progress: number,
      }
    }
  }[],
  members: DocumentMembersResponseDTO,
}

export interface UpsertCourseDTO extends Omit<CourseBaseDocument, 'members' | 'key'> {
  members: DocumentMembersDTO,
}
