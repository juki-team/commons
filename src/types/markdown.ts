import type { CodeLanguage } from '../enums/index.js';
import type { CodeEditorFiles, EntityMembers } from '../types/index.js';

export interface MarkdownBaseDocument {
  key: string;
  name: string;
  tags: string[];
  members: EntityMembers;
  files: CodeEditorFiles<typeof CodeLanguage.MARKDOWN>;
}
