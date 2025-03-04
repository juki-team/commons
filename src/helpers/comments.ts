export const getAssignmentCommentKey = (assignmentKey: string) => `assignment:${assignmentKey}`;
export const getAssignmentUserCommentKey = (assignmentKey: string, userNickname: string, userCompany: string) => `assignment:${assignmentKey}|user_nickname:${userNickname}|user_company:${userCompany}`;
export const getProblemCommentKey = (problemKey: string) => `problem:${problemKey}`;
export const getContestCommentKey = (contestKey: string) => `contest:${contestKey}`;
