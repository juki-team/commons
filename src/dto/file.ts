import { FileAccess, FileContentType, FileState, SummaryFileContentType, UserBasicInterface } from '../types';

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

export type FileUserResponseType = {
  isEditor: boolean,
  isViewer: boolean,
  isOwner: boolean,
}

export interface FileSummaryListResponseDTO extends FileBasic {
  key: string,
  updatedAt: Date,
  ownerUserNickname: string,
  content: SummaryFileContentType,
  user: FileUserResponseType,
}

export interface FileResponseDTO extends FileSummaryListResponseDTO {
  content: FileContentType,
}

export type FolderMembersResponseType = {
  editors: { [key: string]: UserBasicInterface },
  viewers: { [key: string]: UserBasicInterface },
  owner: UserBasicInterface,
}

export interface FolderDataResponseDTO extends FileBasic {
  members: FolderMembersResponseType,
  user: FileUserResponseType,
  parentFolders: { name: string, key: string }[],
}
