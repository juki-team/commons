import type { CodeEditorFiles, CodeLanguage, EntityMembers } from '../types';

export interface MermaidBaseDocument {
  key: string;
  name: string;
  tags: string[];
  members: EntityMembers;
  files: CodeEditorFiles<CodeLanguage.MERMAID>;
}
