import type { CodeEditorFiles, CodeLanguage, EntityMembers } from '../types/index.js';

export interface MarkdownBaseDocument {
  key: string;
  name: string;
  tags: string[];
  members: EntityMembers;
  files: CodeEditorFiles<CodeLanguage.MARKDOWN>;
}
