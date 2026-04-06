import type { EntityState, FileContent, FileMemberRole, SummaryFileContent, UserBasic } from '../types';
import type { DocumentMembersResponseDTO, DocumentUserResponseDTO } from './entity';

export interface FileBasic {
  name: string;
  description: string;
  state: EntityState;
}

export interface CreateFileDTO extends FileBasic {
  folderId: string;
  content: FileContent;
  members: FileMembersDTO;
}

export interface FileSummaryListResponseDTO extends FileBasic {
  key: string;
  updatedAt: Date;
  content: SummaryFileContent;
  user: DocumentUserResponseDTO;
  owner: UserBasic;
}

export interface FileDataResponseDTO extends FileSummaryListResponseDTO {
  content: FileContent;
  members: DocumentMembersResponseDTO;
  parentFolders: {
    name: string;
    key: string;
    isInOwnerFolder: boolean;
    isInEditorFolder: boolean;
    isInViewerFolder: boolean;
    isInArchivedFolder: boolean;
  }[];
}

export interface FileMembersDTO {
  [key: string]: FileMemberRole;
}
