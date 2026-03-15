import { CodeEditorFiles, CodeLanguage, EntityMembers } from '../types';

export interface MarkdownBaseDocument {
  key: string,
  name: string,
  tags: string[],
  members: EntityMembers,
  files: CodeEditorFiles<CodeLanguage.MARKDOWN>,
}
