import type { ClientId, RecordId } from '../types/index.js';

export const getUserKey = (userNickname: string, userOrganizationKey: string) => {
  return `${userNickname}|${userOrganizationKey}`;
};

export const getParamsOfUserKey = (userKey: string) => {
  const [userNickname, userOrganizationKey] = userKey.split('|');
  return { userNickname, userOrganizationKey };
};

export const getClientId = (sessionId: RecordId, uiId: string): ClientId => {
  return `${sessionId}|${uiId}`;
};

export const getParamsOfClientId = (clientId: ClientId) => {
  const [sessionId, uiId] = clientId.split('|');
  return { sessionId, uiId } as { sessionId: RecordId; uiId: string };
};
