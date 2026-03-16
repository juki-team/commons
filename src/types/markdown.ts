import { CodeEditorFiles, CodeLanguage, EntityMembers } from '../types';

export interface MarkdownBaseDocument {
  key: string;
  name: string;
  folderPath: string;
  tags: string[];
  members: EntityMembers;
  files: CodeEditorFiles<CodeLanguage.MARKDOWN>;
}
