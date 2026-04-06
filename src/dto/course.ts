import type { CourseBaseDocument } from '../types';
import type { EntityMembersDTO, EntityMembersResponseDTO } from './entity';
import type { UserCompanyBasicInfoResponseDTO } from './user';
import type { WorksheetSummaryListResponseDTO } from './worksheet';

export type CourseUserResponseDTO = {
  isOwner: boolean;
  isManager: boolean;
  isSpectator: boolean;
  isParticipant: boolean;
  isGuest: boolean;
};

export interface CourseSummaryListResponseDTO {
  key: string;
  title: string;
  abstract: string;
  description: string;
  coverImageUrl: string;
  owner: UserCompanyBasicInfoResponseDTO;
  user: CourseUserResponseDTO;
}

export interface CourseLessonsWorksheetDataResponseDTO
  extends Pick<WorksheetSummaryListResponseDTO, 'key' | 'name' | 'content'> {}

export interface CourseDataResponseDTO extends CourseSummaryListResponseDTO {
  lessons: {
    worksheet: CourseLessonsWorksheetDataResponseDTO;
  }[];
  members: EntityMembersResponseDTO;
}

export interface UpsertCourseDTO extends Omit<CourseBaseDocument, 'members' | 'key' | 'lessons' | 'state'> {
  lessons: {
    worksheetKey: string;
  }[];
  members: EntityMembersDTO;
}
