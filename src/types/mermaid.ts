import type { CodeLanguage } from '../enums/index.js';
import type { CodeEditorFiles, EntityMembers } from '../types/index.js';

export interface MermaidBaseDocument {
  key: string;
  name: string;
  tags: string[];
  members: EntityMembers;
  files: CodeEditorFiles<typeof CodeLanguage.MERMAID>;
}
