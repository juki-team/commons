export const getAssignmentCommentKey = (classKey: string, cycleKey: string, sessionKey: string, assignmentKey: string) => `class:${classKey}|cycle:${cycleKey}|session:${sessionKey}|assignment:${assignmentKey}`;
export const getAssignmentUserCommentKey = (classKey: string, cycleKey: string, sessionKey: string, assignmentKey: string, userNickname: string, userCompany: string) => `class:${classKey}|cycle:${cycleKey}|session:${sessionKey}|assignment:${assignmentKey}|user_nickname:${userNickname}|user_company:${userCompany}`;
export const getProblemCommentKey = (problemKey: string) => `problem:${problemKey}`;
export const getContestCommentKey = (contestKey: string) => `contest:${contestKey}`;
