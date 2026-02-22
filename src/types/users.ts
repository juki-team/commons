import { ProfileSetting } from './account';
import { CourseRole, Language, SystemRole, TeamRole, Theme, UserRole } from './prisma';

export interface UserBasicInfo {
  nickname: string,
  imageUrl: string,
}

export interface UserBasic extends UserBasicInfo {
  givenName: string,
  familyName: string,
  email: string,
}

export interface UserProfile extends UserBasic {
  aboutMe: string,
  country: string,
  city: string,
  institution: string,
  telegramUsername: string,
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
  [ProfileSetting.LANGUAGE]: Language,
  [ProfileSetting.THEME]: Theme,
  [ProfileSetting.DATA_VIEW_MODE]: DataViewMode,
  [ProfileSetting.MENU_VIEW_MODE]: MenuViewMode,
  [ProfileSetting.NEWSLETTER_SUBSCRIPTION]: boolean,
  [ProfileSetting.TIME_ZONE]: string,
  [ProfileSetting.FONT_SIZE]: number,
}

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

export type ProblemRole =
  Role.RESTRICTED
  | Role.GUEST
  | Role.REGULAR
  | Role.CREATOR
  | Role.MANAGER
  | Role.MASTER
  | Role.ADMIN
  | Role.SUPER_ADMIN;

export type ContestRole =
  Role.RESTRICTED
  | Role.GUEST
  | Role.REGULAR
  | Role.CREATOR
  | Role.MANAGER
  | Role.MASTER
  | Role.ADMIN
  | Role.SUPER_ADMIN;

export type UserRoles = {
  systemRole: SystemRole,
  userRole: UserRole;
  contestRole: ContestRole;
  problemRole: ProblemRole;
  teamRole: TeamRole;
  courseRole: CourseRole;
}
