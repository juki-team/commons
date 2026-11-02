import { EntityState, FileBasic, FileContent, FileMemberRole, SummaryFileContent, UserBasic } from '../types/index.js';
import { DocumentMembersResponseDto, DocumentUserResponseDto } from './entity.js';

export interface CreateFileDto extends FileBasic {
  folderId: string,
  content: FileContent,
  members: FileMembersDto,
}

export interface FileSummaryListResponseDto extends FileBasic {
  key: string,
  updatedAt: number,
  content: SummaryFileContent,
  user: DocumentUserResponseDto,
  owner: UserBasic,
}

export interface FileDataResponseDto extends FileSummaryListResponseDto {
  content: FileContent,
  members: DocumentMembersResponseDto,
  parentFolders: {
    name: string,
    key: string,
    isInOwnerFolder: boolean,
    isInEditorFolder: boolean,
    isInViewerFolder: boolean,
    isInArchivedFolder: boolean,
  }[]
}

export interface FileMembersDto {
  [key: string]: FileMemberRole;
}
