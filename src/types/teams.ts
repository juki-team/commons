import type { AssignmentType, MemberRole, TeamStatus, UserTeamStatus } from '../enums/index.js';
import type { UserBasic, UserProfile } from './user.js';

export interface TeamMember {
  user: UserProfile;
  role: MemberRole;
  status: UserTeamStatus;
}

export interface Assignment {
  id: number;
  createdAt: number;
  updatedAt: number;
  users: [];
  // data
  name: string;
  type: AssignmentType;
  content: string;
}

export interface Comment {
  id: number;
  createdAt: number;
  updatedAt: number;
  // data
  comment: string;
}

export interface Task {
  id: number;
  createdAt: number;
  updatedAt: number;
  comments: Comment[];
  assigned: UserBasic[];
  subtasks: [];
  // data
  title: string;
  description: string;
  dueDate: Date;
}

export interface Training {
  id: number;
  tasks: Task[];
  // data
  name: string;
  startDate: Date;
  endDate: Date;
}

export interface Team {
  id: number;
  createdAt: number;
  // data
  name: string;
  aboutTeam: string;
  country: string;
  city: string;
  institution: string;
  imageUrl: string;
  status: TeamStatus;
  members: TeamMember[];
  training: Training[];
}

export interface TrainingBasic {
  id: number;
  numberOfTasks: number;
  // data
  name: string;
  startDate: Date;
  endDate: Date;
}

export interface TeamBasic {
  id: number;
  createdAt: number;
  // data
  name: string;
  aboutTeam: string;
  country: string;
  city: string;
  institution: string;
  imageUrl: string;
  status: TeamStatus;
  members: TeamMember[];
  training: Training[];
}
