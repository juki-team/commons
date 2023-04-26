import { FileContentType, FileState, SummaryFileContentType, UserBasicInterface } from '../types';

export interface CreateFileDTO {
  name: string,
  description: string,
  status: FileState,
  folderId: string,
  content: FileContentType
}

export interface FileSummaryListResponseDTO {
  status: FileState,
  key: string,
  updatedAt: Date,
  name: string,
  description: string,
  ownerUserNickname: string,
  content: SummaryFileContentType,
  user: {
    isEditor: boolean,
    isGuest: boolean,
  },
}

export interface FileResponseDTO extends FileSummaryListResponseDTO {
  content: FileContentType,
}

export type FolderMembersResponseType = {
  editors: { [key: string]: UserBasicInterface },
  viewers: { [key: string]: UserBasicInterface },
  owner: UserBasicInterface,
}

export interface FolderDataResponseDTO {
  name: string,
  description: string,
  status: FileState,
  members: FolderMembersResponseType,
  user: {
    isEditor: boolean,
    isGuest: boolean,
  }
  parentFolders: { name: string, key: string }[],
}
