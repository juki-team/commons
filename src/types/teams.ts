import { MemberRole, AssignmentType, TeamStatus, UserTeamStatus } from './prisma';
import { UserBasicInterface, UserProfileInterface } from './users';

export interface TeamMemberInterface {
  user: UserProfileInterface,
  role: MemberRole,
  status: UserTeamStatus,
}

export interface AssignmentInterface {
  id: number,
  createdAt: Date,
  updatedAt: Date,
  users: [],
  // data
  name: string,
  type: AssignmentType,
  content: string,
}

export interface CommentInterface {
  id: number,
  createdAt: Date,
  updatedAt: Date,
  // data
  comment: string,
}

export interface TaskInterface {
  id: number,
  createdAt: Date,
  updatedAt: Date,
  comments: CommentInterface[],
  assigned: UserBasicInterface  [],
  subtasks: [],
  // data
  title: string,
  description: string,
  dueDate: Date,
}

export interface TrainingInterface {
  id: number,
  tasks: TaskInterface[],
  // data
  name: string,
  startDate: Date,
  endDate: Date,
}

export interface TeamInterface {
  id: number
  createdAt: Date,
  // data
  name: string,
  aboutTeam: string,
  country: string,
  city: string,
  institution: string,
  imageUrl: string,
  status: TeamStatus,
  members: TeamMemberInterface[],
  training: TrainingInterface[],
}

export interface TrainingBasicInterface {
  id: number,
  numberOfTasks: number,
  // data
  name: string,
  startDate: Date,
  endDate: Date,
}

export interface TeamBasicInterface {
  id: number
  createdAt: Date,
  // data
  name: string,
  aboutTeam: string,
  country: string,
  city: string,
  institution: string,
  imageUrl: string,
  status: TeamStatus,
  members: TeamMemberInterface[],
  training: TrainingInterface[],
}
