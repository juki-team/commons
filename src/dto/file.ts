import { EntityState, FileContentType, FileMemberRole, SummaryFileContentType, UserBasicInterface } from '../types';
import { DocumentMembersResponseDTO, DocumentUserResponseDTO } from './entity';

export interface FileBasic {
  name: string,
  description: string,
  state: EntityState,
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
  user: DocumentUserResponseDTO,
  owner: UserBasicInterface,
}

export interface FileDataResponseDTO extends FileSummaryListResponseDTO {
  content: FileContentType,
  members: DocumentMembersResponseDTO,
  parentFolders: {
    name: string,
    key: string,
    isInOwnerFolder: boolean,
    isInEditorFolder: boolean,
    isInViewerFolder: boolean,
    isInArchivedFolder: boolean,
  }[]
}

export interface FileMembersDTO {
  [key: string]: FileMemberRole;
}
