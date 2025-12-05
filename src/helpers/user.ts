export const getUserKey = (userNickname: string, userCompanyKey: string) => {
  return userNickname + '|' + userCompanyKey;
};

export const getParamsOfUserKey = (userKey: string) => {
  const [ userNickname, userCompanyKey ] = userKey.split('|');
  return { userNickname, userCompanyKey };
};

export const getClientId = (sessionId: string, uiId: string) => {
  return sessionId + '|' + uiId;
};

export const getParamsOfClientId = (clientId: string) => {
  const [ sessionId, uiId ] = clientId.split('|');
  return { sessionId, uiId };
};
