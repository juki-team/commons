export const getAssignmentCommentKey = (classKey: string, cycleKey: string, sessionKey: string, assignmentKey: string) =>
  `class:${classKey}|cycle:${cycleKey}|session:${sessionKey}|assignment:${assignmentKey}`;
export const getAssignmentUserCommentKey = (
  classKey: string,
  cycleKey: string,
  sessionKey: string,
  assignmentKey: string,
  userNickname: string,
  userOrganization: string,
) =>
  `class:${classKey}|cycle:${cycleKey}|session:${sessionKey}|assignment:${assignmentKey}|user_nickname:${userNickname}|user_organization:${userOrganization}`;
export const getProblemCommentKey = (problemKey: string) => `problem:${problemKey}`;
export const getContestCommentKey = (contestKey: string) => `contest:${contestKey}`;
