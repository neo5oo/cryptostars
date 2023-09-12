function initUserProfile({userName, cryptoBalance = 0, fiatBalance = 0}) {
  const profileElement = document.querySelector('.user-profile');
  if (!profileElement) {
    return null;
  }

  const userNameElement = profileElement.querySelector('.user-profile__name span');
  userNameElement.textContent = userName;

  const cryptoBalanceElement = profileElement.querySelector('#user-crypto-balance');
  cryptoBalanceElement.textContent = cryptoBalance;

  const fiatBalanceElement = profileElement.querySelector('#user-fiat-balance');
  fiatBalanceElement.textContent = fiatBalance;
}

export {initUserProfile};
