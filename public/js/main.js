import {initContractors} from './modules/contractors.js';
import {initUserProfile} from './modules/user-profile.js';
import {getData} from './modules/api.js';
import {showErrorMessage} from './modules/error-message.js';
import {addContractors} from './modules/add-contractors.js';

Promise.all([getData('user'), getData('contractors')])
  .then(([userData, contractorsData]) => {
    initUserProfile(userData);
    initContractors(contractorsData);
  })
  .catch((err) => {
    if (location.hostname === 'localhost') {
      console.error(err.message);
    }
    showErrorMessage();
  });

addContractors();
