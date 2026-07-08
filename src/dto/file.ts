import type { FileMemberRole } from '../enums/index.js';
import type { FileBasic, FileContent, SummaryFileContent, UserBasic } from '../types/index.js';
import type { EntityAccessMembersResponseDto, EntityUserResponseDto } from './entity.js';

export interface CreateFileDto extends FileBasic {
  folderId: string;
  content: FileContent;
  members: FileMembersDto;
}

export interface FileSummaryListResponseDto extends FileBasic {
  key: string;
  updatedAt: number;
  content: SummaryFileContent;
  user: EntityUserResponseDto;
  owner: UserBasic;
}

export interface FileDataResponseDto extends FileSummaryListResponseDto {
  content: FileContent;
  members: EntityAccessMembersResponseDto;
  parentFolders: {
    name: string;
    key: string;
    isInOwnerFolder: boolean;
    isInEditorFolder: boolean;
    isInViewerFolder: boolean;
    isInArchivedFolder: boolean;
  }[];
}

export interface FileMembersDto {
  [key: string]: FileMemberRole;
}
