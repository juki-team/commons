import {
  FileAccess,
  FileContentType,
  FileMembersResponseType,
  FileState,
  FileUserResponseType,
  SummaryFileContentType,
} from '../types';

export interface FileBasic {
  name: string,
  description: string,
  state: FileState,
  access: FileAccess,
}

export interface CreateFileDTO extends FileBasic {
  folderId: string,
  content: FileContentType
}

export interface FileSummaryListResponseDTO extends FileBasic {
  key: string,
  updatedAt: Date,
  content: SummaryFileContentType,
  user: FileUserResponseType,
}

export interface FileDataResponseDTO extends FileSummaryListResponseDTO {
  members: FileMembersResponseType,
  content: FileContentType,
  parentFolders: { name: string, key: string }[],
}
