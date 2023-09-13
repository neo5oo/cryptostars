import {initContractors} from './modules/contractors.js';
import {initUserProfile} from './modules/user-profile.js';
import {getData} from './modules/api.js';

Promise.all([getData('user'), getData('contractors')])
  .then(([userData, contractorsData]) => {
    initUserProfile(userData);
    initContractors(contractorsData);
  })
  .catch(console.error);
