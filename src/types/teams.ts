import type { AssignmentType, MemberRole, TeamStatus, UserTeamStatus } from './prisma';
import type { UserBasic, UserProfile } from './users';

export interface TeamMember {
  user: UserProfile;
  role: MemberRole;
  status: UserTeamStatus;
}

export interface Assignment {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  users: [];
  // data
  name: string;
  type: AssignmentType;
  content: string;
}

export interface Comment {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  // data
  comment: string;
}

export interface Task {
  id: number;
  createdAt: Date;
  updatedAt: Date;
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
  createdAt: Date;
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
  createdAt: Date;
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
