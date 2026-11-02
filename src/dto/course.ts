import { CourseBaseDocument } from '../types';
import { EntityMembersDto, EntityMembersResponseDto } from './entity';
import { UserOrganizationBasicInfoResponseDto } from './user';
import { WorksheetSummaryListResponseDto } from './worksheet';

export type CourseUserResponseDto = {
  isOwner: boolean,
  isManager: boolean,
  isSpectator: boolean,
  isParticipant: boolean,
  isGuest: boolean,
};

export interface CourseSummaryListResponseDto {
  key: string,
  title: string,
  abstract: string,
  description: string,
  coverImageUrl: string,
  owner: UserOrganizationBasicInfoResponseDto,
  user: CourseUserResponseDto,
}

export interface CourseLessonsWorksheetDataResponseDto extends Pick<WorksheetSummaryListResponseDto, 'key' | 'name' | 'content'> {
}

export interface CourseDataResponseDto extends CourseSummaryListResponseDto {
  lessons: {
    worksheet: CourseLessonsWorksheetDataResponseDto,
  }[],
  members: EntityMembersResponseDto,
}

export interface UpsertCourseDto extends Omit<CourseBaseDocument, 'members' | 'key' | 'lessons' | 'state'> {
  lessons: {
    worksheetKey: string,
  }[],
  members: EntityMembersDto,
}
