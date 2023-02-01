import { CourseStatus, CourseType } from '../types/prisma';

export interface CreateCourseDTO {
  key: string,
  title: string,
  abstract: string,
  description: string,
  coverImageUrl: string,
  type: CourseType,
}

export interface CourseResponseDTO {
  key: string,
  title: string,
  abstract: string,
  description: string,
  coverImageUrl: string,
  type: CourseType,
  status: CourseStatus,
  ownerUserNickname: string,
}

export interface CourseSummaryListResponseDTO {
  key: string,
  title: string,
  abstract: string,
  description: string,
  coverImageUrl: string,
  type: CourseType,
  status: CourseStatus,
  ownerUserNickname: string,
  user: {
    isEditor: boolean,
  }
}
