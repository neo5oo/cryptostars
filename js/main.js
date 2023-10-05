import {initContractors} from './modules/contractors.js';
import {initUserProfile} from './modules/user-profile.js';
import {getData} from './modules/api.js';
import {showErrorMessage} from './modules/error-message.js';
// import {isDev} from './utils/is-dev.js';

getData('contractors')
  .then(initContractors)
  .catch((err) => {
    if (isDev()) {
      console.error(`Ошибка получения контрагентов:\n${err.stack}`);
    }
    showErrorMessage();
  });

getData('user')
  .then((userData) => {
    initUserProfile(userData);
  })
  .catch((err) => {
    if (isDev()) {
      console.error(`Ошибка получения данных пользователя:\n${err.stack}`);
    }
  });
