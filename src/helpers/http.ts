export const getPlainText = async (url: string): Promise<string> => {
  return await fetch(url)
    .then((data) => data.text())
    .catch((error) => {
      console.error('ERROR:', error);
      return '';
    });
};
