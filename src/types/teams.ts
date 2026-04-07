import type { UserBasic, UserProfile } from './users.js';

export enum TeamStatus {
  ACTIVE = 'ACTIVE',
  REPORTED = 'REPORTED',
  ARCHIVED = 'ARCHIVED',
}

export enum UserTeamStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

export enum AssignmentType {
  READING_PDF = 'READING_PDF',
  READING_WEB = 'READING_WEB',
  SOLVE_JUKI_JUDGE_PROBLEM = 'SOLVE_JUKI_JUDGE_PROBLEM',
  SOLVE_CODEFORCES_JUDGE_PROBLEM = 'SOLVE_CODEFORCES_JUDGE_PROBLEM',
}

export enum MemberRole {
  COACH = 'COACH',
  CO_COACH = 'CO_COACH',
  CONTESTANT = 'CONTESTANT',
  ATTENDEE = 'ATTENDEE',
  RESERVE = 'RESERVE',
  STAFF = 'STAFF',
}

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
