const API_URL = 'https://cryptostar.grading.pages.academy';

function getData(endpoint) {
  return fetch(`${API_URL}/${endpoint}`).then(
    (res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Ошибка получения данных');
    },
    () => {
      throw new Error('Ошибка сервера');
    }
  );
}

export {getData};
