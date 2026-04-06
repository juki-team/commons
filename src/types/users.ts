import type { ContestRole, CourseRole, ProblemRole, SystemRole, TeamRole, UserRole } from '../prisma/enums';
import { ProfileSetting } from './account';
import type { Language, Theme } from './prisma';

export interface UserBasicInfo {
  nickname: string;
  imageUrl: string;
}

export interface UserBasic extends UserBasicInfo {
  givenName: string;
  familyName: string;
  email: string;
}

export interface UserProfile extends UserBasic {
  aboutMe: string;
  country: string;
  city: string;
  institution: string;
  telegramUsername: string;
}

export type UserHandles = { [key: string]: string };

export enum DataViewMode {
  CARDS = 'CARDS',
  ROWS = 'ROWS',
}

export enum MenuViewMode {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL',
}

export type UserSettings = {
  [ProfileSetting.LANGUAGE]: Language;
  [ProfileSetting.THEME]: Theme;
  [ProfileSetting.DATA_VIEW_MODE]: DataViewMode;
  [ProfileSetting.MENU_VIEW_MODE]: MenuViewMode;
  [ProfileSetting.NEWSLETTER_SUBSCRIPTION]: boolean;
  [ProfileSetting.TIME_ZONE]: string;
  [ProfileSetting.FONT_SIZE]: number;
};

export enum Role {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  MASTER = 'MASTER',
  MANAGER = 'MANAGER',
  CREATOR = 'CREATOR',
  REGULAR = 'REGULAR',
  LIMITED = 'LIMITED',
  GUEST = 'GUEST',
  RESTRICTED = 'RESTRICTED',
}

export type UserRoles = {
  systemRole: SystemRole;
  userRole: UserRole;
  contestRole: ContestRole;
  problemRole: ProblemRole;
  teamRole: TeamRole;
  courseRole: CourseRole;
};
