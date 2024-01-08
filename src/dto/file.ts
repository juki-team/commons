import {
  FileAccess,
  FileContentType,
  FileMemberRole,
  FileMembersResponseType,
  FileState,
  FileUserResponseType,
  SummaryFileContentType,
  UserBasicInterface,
} from '../types';

export interface FileBasic {
  name: string,
  description: string,
  state: FileState,
  access: FileAccess,
}

export interface CreateFileDTO extends FileBasic {
  folderId: string,
  content: FileContentType,
  members: FileMembersDTO,
}

export interface FileSummaryListResponseDTO extends FileBasic {
  key: string,
  updatedAt: Date,
  content: SummaryFileContentType,
  user: FileUserResponseType,
  owner: UserBasicInterface,
}

export interface FileDataResponseDTO extends FileSummaryListResponseDTO {
  members: FileMembersResponseType,
  content: FileContentType,
  parentFolders: {
    name: string,
    key: string,
    isOwner: boolean,
    isViewer: boolean,
    isEditor: boolean,
  }[]
}

export interface FileMembersDTO {
  [key: string]: FileMemberRole;
}
