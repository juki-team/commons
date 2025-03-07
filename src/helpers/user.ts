export const getUserKey = (userNickname: string, userCompanyKey: string) => {
  return userNickname + '|' + userCompanyKey;
};

export const getParamsOfUserKey = (userKey: string) => {
  const [ userNickname, userCompanyKey ] = userKey.split('|');
  return { userNickname, userCompanyKey };
};
