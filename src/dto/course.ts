import { CourseBaseDocument } from '../types/course';
import { UserBasicInfoInterface } from '../types/users';
import { DocumentMembersDTO, DocumentMembersResponseDTO } from './entity';
import { WorksheetSummaryListResponseDTO } from './worksheet';

export type CourseUserResponseDTO = {
  isOwner: boolean,
  isManager: boolean,
  isSpectator: boolean,
  isParticipant: boolean,
  isGuest: boolean,
};

export interface CourseSummaryListResponseDTO {
  key: string,
  title: string,
  abstract: string,
  description: string,
  coverImageUrl: string,
  owner: UserBasicInfoInterface,
  user: CourseUserResponseDTO,
}

export interface CourseLessonsWorksheetDataResponseDTO extends Omit<WorksheetSummaryListResponseDTO, 'user' | 'owner' | 'updatedAt' | 'state'> {
}

export interface CourseDataResponseDTO extends CourseSummaryListResponseDTO {
  lessons: {
    worksheet: CourseLessonsWorksheetDataResponseDTO,
  }[],
  members: DocumentMembersResponseDTO,
}

export interface UpsertCourseDTO extends Omit<CourseBaseDocument, 'members' | 'key' | 'lessons'> {
  lessons: {
    worksheetKey: string,
  }[],
  members: DocumentMembersDTO,
}
