export const getAssignmentCommentKey = (classKey: string, sessionKey: string, assignmentKey: string) => `class:${classKey}|session:${sessionKey}|assignment:${assignmentKey}`;
export const getAssignmentUserCommentKey = (classKey: string, sessionKey: string, assignmentKey: string, userNickname: string, userCompany: string) => `class:${classKey}|session:${sessionKey}|assignment:${assignmentKey}|user_nickname:${userNickname}|user_company:${userCompany}`;
export const getProblemCommentKey = (problemKey: string) => `problem:${problemKey}`;
export const getContestCommentKey = (contestKey: string) => `contest:${contestKey}`;
