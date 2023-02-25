import { FileContentType, FileStatus, SummaryFileContentType } from '../types';

export interface CreateFileDTO {
  name: string,
  description: string,
  status: FileStatus,
  folderId: string,
  content: FileContentType
}

export interface FileSummaryListResponseDTO {
  status: FileStatus,
  key: string,
  updatedAt: Date,
  name: string,
  description: string,
  ownerUserNickname: string,
  content: SummaryFileContentType,
  user: {
    isEditor: boolean,
    isViewer: boolean,
  },
}

export interface FileResponseDTO extends FileSummaryListResponseDTO {
  content: FileContentType,
}