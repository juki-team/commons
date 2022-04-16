/**
 * Model Course
 *
 */
export type Course = {
  id: number
  createdAt: Date
  updatedAt: Date
  key: string
  title: string
  abstract: string
  description: string
  goals: string
  coverImageUrl: string
  status: CourseStatus
  type: CourseType
}

/**
 * Model UsersCourses
 *
 */
export type UsersCourses = {
  createdAt: Date
  updatedAt: Date
  userId: number
  courseId: number
  invited: boolean
  editor: boolean
  owner: boolean
  reviewer: boolean
  admin: boolean
  enrolled: boolean
  unlocked: boolean
}

/**
 * Model Task
 *
 */
export type Task = {
  id: number
  createdAt: Date
  updatedAt: Date
  trainingId: number
  name: string
  description: string
  dueDate: Date
}

/**
 * Model TaskComment
 *
 */
export type TaskComment = {
  id: number
  createdAt: Date
  updatedAt: Date
  taskId: number
  userId: number
  content: string
}

/**
 * Model Assignment
 *
 */
export type Assignment = {
  id: number
  createdAt: Date
  updatedAt: Date
  taskId: number
  description: string
  type: AssignmentType
  content: string
}

/**
 * Model UsersAssignment
 *
 */
export type UsersAssignment = {
  createdAt: Date
  updatedAt: Date
  userId: number
  subtaskId: number
  status: AssignmentState
}

/**
 * Model Team
 *
 */
export type Team = {
  id: number
  createdAt: Date
  updatedAt: Date
  createdByUserId: number
  code: string
  codeEnabled: boolean
  name: string
  aboutTeam: string
  country: string
  city: string
  institution: string
  imageUrl: string
  status: TeamStatus
}

/**
 * Model UsersTeams
 *
 */
export type UsersTeams = {
  createdAt: Date
  updatedAt: Date
  userId: number
  teamId: number
  role: MemberRole
  status: UserTeamStatus
}

/**
 * Model Training
 *
 */
export type Training = {
  id: number
  createdAt: Date
  updatedAt: Date
  teamId: number
  name: string
  startDate: Date
  endDate: Date
}

/**
 * Model User
 *
 */
export type User = {
  id: number
  createdAt: Date
  updatedAt: Date
  givenName: string
  familyName: string
  nickname: string
  imageUrl: string
  aboutMe: string
  country: string
  city: string
  institution: string
  email: string
  telegramUsername: string
  codeforcesHandle: string
  topcoderHandle: string
  atCoderHandle: string
  codeChefHandle: string
  preferredLanguage: Language
  preferredTheme: Theme
  emailSubscription: EmailSubscription
  emailValidationState: EmailValidationState
  emailValidationToken: string
  emailValidationTimestamp: Date
  passwordResetToken: string | null
  passwordResetTimestamp: Date | null
  status: UserStatus
  userRole: UserRole
  teamRole: TeamRole
  courseRole: CourseRole
  password: string
  salt: string
}

/**
 * Enums
 */
  
  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const CourseStatus: {
    RELEASED: 'RELEASED',
    IN_DRAFT: 'IN_DRAFT',
    IN_REVIEW: 'IN_REVIEW',
    ARCHIVED: 'ARCHIVED'
  } = {
    RELEASED: 'RELEASED',
    IN_DRAFT: 'IN_DRAFT',
    IN_REVIEW: 'IN_REVIEW',
    ARCHIVED: 'ARCHIVED',
  };

export type CourseStatus = (typeof CourseStatus)[keyof typeof CourseStatus]

export const CourseType: {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
  CLOSED: 'CLOSED'
} = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
  CLOSED: 'CLOSED',
};

export type CourseType = (typeof CourseType)[keyof typeof CourseType]

export const AssignmentType: {
  READING_PDF: 'READING_PDF',
  READING_WEB: 'READING_WEB',
  SOLVE_JUKI_JUDGE_PROBLEM: 'SOLVE_JUKI_JUDGE_PROBLEM',
  SOLVE_CODEFORCES_JUDGE_PROBLEM: 'SOLVE_CODEFORCES_JUDGE_PROBLEM'
} = {
  READING_PDF: 'READING_PDF',
  READING_WEB: 'READING_WEB',
  SOLVE_JUKI_JUDGE_PROBLEM: 'SOLVE_JUKI_JUDGE_PROBLEM',
  SOLVE_CODEFORCES_JUDGE_PROBLEM: 'SOLVE_CODEFORCES_JUDGE_PROBLEM',
};

export type AssignmentType = (typeof AssignmentType)[keyof typeof AssignmentType]

export const AssignmentState: {
  ASSIGNED: 'ASSIGNED',
  IN_PROGRESS: 'IN_PROGRESS',
  TO_REVIEW: 'TO_REVIEW',
  RESOLVED: 'RESOLVED'
} = {
  ASSIGNED: 'ASSIGNED',
  IN_PROGRESS: 'IN_PROGRESS',
  TO_REVIEW: 'TO_REVIEW',
  RESOLVED: 'RESOLVED',
};

export type AssignmentState = (typeof AssignmentState)[keyof typeof AssignmentState]

export const TeamStatus: {
  ACTIVE: 'ACTIVE',
  REPORTED: 'REPORTED',
  ARCHIVED: 'ARCHIVED'
} = {
  ACTIVE: 'ACTIVE',
  REPORTED: 'REPORTED',
  ARCHIVED: 'ARCHIVED',
};

export type TeamStatus = (typeof TeamStatus)[keyof typeof TeamStatus]

export const MemberRole: {
  COACH: 'COACH',
  CO_COACH: 'CO_COACH',
  CONTESTANT: 'CONTESTANT',
  ATTENDEE: 'ATTENDEE',
  RESERVE: 'RESERVE',
  STAFF: 'STAFF'
} = {
  COACH: 'COACH',
  CO_COACH: 'CO_COACH',
  CONTESTANT: 'CONTESTANT',
  ATTENDEE: 'ATTENDEE',
  RESERVE: 'RESERVE',
  STAFF: 'STAFF',
};

export type MemberRole = (typeof MemberRole)[keyof typeof MemberRole]

export const UserTeamStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
} = {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
};

export type UserTeamStatus = (typeof UserTeamStatus)[keyof typeof UserTeamStatus]

export const Language: {
  ES: 'ES',
  EN: 'EN'
} = {
  ES: 'ES',
  EN: 'EN',
};

export type Language = (typeof Language)[keyof typeof Language]

export const Theme: {
  LIGHT: 'LIGHT',
  DARK: 'DARK'
} = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
};

export type Theme = (typeof Theme)[keyof typeof Theme]

export const EmailSubscription: {
  NONE: 'NONE',
  RANKED_CONTESTS: 'RANKED_CONTESTS',
  WEEKLY_NEWS_SUBSCRIPTION: 'WEEKLY_NEWS_SUBSCRIPTION',
  MONTHLY_NEWS_SUBSCRIPTION: 'MONTHLY_NEWS_SUBSCRIPTION'
} = {
  NONE: 'NONE',
  RANKED_CONTESTS: 'RANKED_CONTESTS',
  WEEKLY_NEWS_SUBSCRIPTION: 'WEEKLY_NEWS_SUBSCRIPTION',
  MONTHLY_NEWS_SUBSCRIPTION: 'MONTHLY_NEWS_SUBSCRIPTION',
};

export type EmailSubscription = (typeof EmailSubscription)[keyof typeof EmailSubscription]

export const EmailValidationState: {
  PENDING: 'PENDING',
  VALIDATED: 'VALIDATED'
} = {
  PENDING: 'PENDING',
  VALIDATED: 'VALIDATED',
};

export type EmailValidationState = (typeof EmailValidationState)[keyof typeof EmailValidationState]

export const UserStatus: {
  ACTIVE: 'ACTIVE',
  REPORTED: 'REPORTED',
  ARCHIVED: 'ARCHIVED'
} = {
  ACTIVE: 'ACTIVE',
  REPORTED: 'REPORTED',
  ARCHIVED: 'ARCHIVED',
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]

export const UserRole: {
  RESTRICTED: 'RESTRICTED',
  GUEST: 'GUEST',
  LIMITED: 'LIMITED',
  REGULAR: 'REGULAR',
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
} = {
  RESTRICTED: 'RESTRICTED',
  GUEST: 'GUEST',
  LIMITED: 'LIMITED',
  REGULAR: 'REGULAR',
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

export const TeamRole: {
  RESTRICTED: 'RESTRICTED',
  GUEST: 'GUEST',
  REGULAR: 'REGULAR',
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
} = {
  RESTRICTED: 'RESTRICTED',
  GUEST: 'GUEST',
  REGULAR: 'REGULAR',
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
};

export type TeamRole = (typeof TeamRole)[keyof typeof TeamRole]

export const CourseRole: {
  RESTRICTED: 'RESTRICTED',
  GUEST: 'GUEST',
  REGULAR: 'REGULAR',
  CREATOR: 'CREATOR',
  SUPER_CREATOR: 'SUPER_CREATOR',
  MANAGER: 'MANAGER',
  MASTER: 'MASTER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
} = {
  RESTRICTED: 'RESTRICTED',
  GUEST: 'GUEST',
  REGULAR: 'REGULAR',
  CREATOR: 'CREATOR',
  SUPER_CREATOR: 'SUPER_CREATOR',
  MANAGER: 'MANAGER',
  MASTER: 'MASTER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
};

export type CourseRole = (typeof CourseRole)[keyof typeof CourseRole]
