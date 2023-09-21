import {splitNumber} from '../utils/split-number.js';

function initUserProfile({userName, balances: [fiatBalance, cryptoBalance]}) {
  const profileElement = document.querySelector('.user-profile');
  if (!profileElement) {
    return null;
  }

  const userNameElement = profileElement.querySelector('.user-profile__name span');
  userNameElement.textContent = userName;

  const cryptoBalanceElement = profileElement.querySelector('#user-crypto-balance');
  cryptoBalanceElement.textContent = splitNumber(cryptoBalance.amount);

  const fiatBalanceElement = profileElement.querySelector('#user-fiat-balance');
  fiatBalanceElement.textContent = splitNumber(fiatBalance.amount);

  profileElement.hidden = false;
}

export {initUserProfile};
