import { JudgingFileType } from '../types';

export interface CodeRunDTO {
  timeLimit: number,
  memoryLimit: number,
  connectionId: string,
  files: (JudgingFileType & { source: string, isInput: boolean, isEntryPoint: boolean, toCompile: boolean })[],
}
