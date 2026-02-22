import { ClientId, ObjectId } from '../types';

export const getUserKey = (userNickname: string, userCompanyKey: string) => {
  return userNickname + '|' + userCompanyKey;
};

export const getParamsOfUserKey = (userKey: string) => {
  const [ userNickname, userCompanyKey ] = userKey.split('|');
  return { userNickname, userCompanyKey };
};

export const getClientId = (sessionId: ObjectId, uiId: string): ClientId => {
  return `${sessionId}|${uiId}`;
};

export const getParamsOfClientId = (clientId: ClientId) => {
  const [ sessionId, uiId ] = clientId.split('|');
  return { sessionId, uiId } as { sessionId: ObjectId, uiId: string };
};
