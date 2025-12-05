import { ClientIdType, ObjectIdType } from '../types';

export const getUserKey = (userNickname: string, userCompanyKey: string) => {
  return userNickname + '|' + userCompanyKey;
};

export const getParamsOfUserKey = (userKey: string) => {
  const [ userNickname, userCompanyKey ] = userKey.split('|');
  return { userNickname, userCompanyKey };
};

export const getClientId = (sessionId: ObjectIdType, uiId: string): ClientIdType => {
  return `${sessionId}|${uiId}`;
};

export const getParamsOfClientId = (clientId: ClientIdType) => {
  const [ sessionId, uiId ] = clientId.split('|');
  return { sessionId, uiId } as { sessionId: ObjectIdType, uiId: string };
};
