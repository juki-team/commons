import { DataViewMode, Language, MenuViewMode, ProfileSetting, Theme, UserRole, UserState, UserStatus } from '../types';

export const USER_STATUS: { [key in UserStatus]: { value: UserStatus, label: string } } = {
  [UserStatus.ACTIVE]: { value: UserStatus.ACTIVE, label: 'active' },
  [UserStatus.REPORTED]: { value: UserStatus.REPORTED, label: 'reported' },
  [UserStatus.ARCHIVED]: { value: UserStatus.ARCHIVED, label: 'archived' },
};

export const USER_ROLE: { [key in UserRole]: { value: UserRole, label: string, level: number } } = {
  [UserRole.RESTRICTED]: { value: UserRole.RESTRICTED, label: 'restricted', level: 6 },
  [UserRole.GUEST]: { value: UserRole.GUEST, label: 'guest', level: 5 },
  [UserRole.LIMITED]: { value: UserRole.LIMITED, label: 'limited', level: 4 },
  [UserRole.REGULAR]: { value: UserRole.REGULAR, label: 'regular', level: 3 },
  [UserRole.MANAGER]: { value: UserRole.MANAGER, label: 'manager', level: 2 },
  [UserRole.ADMIN]: { value: UserRole.ADMIN, label: 'admin', level: 1 },
  [UserRole.SUPER_ADMIN]: { value: UserRole.SUPER_ADMIN, label: 'super admin', level: 0 },
};

export const USER_GUEST: UserState = {
  givenName: 'Guest',
  familyName: 'Guest',
  email: 'GUEST',
  nickname: '',
  status: UserStatus.ACTIVE,
  aboutMe: '',
  imageUrl: 'https://images.juki.pub/c/juki-image-profile.svg',
  city: '',
  country: '',
  institution: '',
  // telegramUsername: '',
  settings: {
    [ProfileSetting.LANGUAGE]: Language.ES,
    [ProfileSetting.THEME]: Theme.LIGHT,
    [ProfileSetting.DATA_VIEW_MODE]: DataViewMode.ROWS,
    [ProfileSetting.MENU_VIEW_MODE]: MenuViewMode.VERTICAL,
  },
  handles: {},
  canCreateUser: false,
  canCreateProblem: false,
  canCreateContest: false,
  canViewSubmissionsManagement: false,
  canViewUsersManagement: false,
  canViewFilesManagement: false,
  canViewJudgersManagement: false,
  canViewEmailManagement: false,
  isLogged: false,
  sessionId: '',
};
