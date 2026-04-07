import type { JudgingFile } from '../types/index.js';

export interface CodeRunDTO {
  runId: string;
  timeLimit: number;
  memoryLimit: number;
  connectionId: string;
  files: (JudgingFile & { source: string; isInput: boolean; isEntryPoint: boolean; toCompile: boolean })[];
}
