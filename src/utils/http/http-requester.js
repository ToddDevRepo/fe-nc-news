export const getAsJson = (url) => {
  return fetch(url).then((response) => {
    return response.json();
  });
};
