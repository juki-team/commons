import { CodeEditorFiles, CodeLanguage, EntityMembers } from '../types';

export interface MermaidBaseDocument {
  key: string,
  name: string,
  members: EntityMembers,
  files: CodeEditorFiles<CodeLanguage.MERMAID>
}
