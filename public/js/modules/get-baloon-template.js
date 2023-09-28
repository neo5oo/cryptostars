import {splitNumber} from '../utils/split-number.js';

function getBaloonTemplate(contractor) {
  return html` <div class="user-card">
    <span class="user-card__user-name">
      <!-- Обратите внимание, что "звёздочка только" у верифицированных пользователей -->
      <svg width="20" height="20" aria-hidden="true">
        <use xlink:href="#icon-star"></use>
      </svg>
      <span>${contractor.userName}</span>
    </span>
    <p class="user-card__cash-item">
      <span class="user-card__cash-label">Валюта</span>
      <span class="user-card__cash-data">${contractor.balance.currency}</span>
    </p>
    <p class="user-card__cash-item">
      <span class="user-card__cash-label">Курс</span>
      <span class="user-card__cash-data">${splitNumber(contractor.exchangeRate)} ₽</span>
    </p>
    <p class="user-card__cash-item">
      <span class="user-card__cash-label">Лимит</span>
      <span class="user-card__cash-data">${splitNumber(contractor.minAmount)} ₽ - ${splitNumber(contractor.balance.amount)} ₽</span>
    </p>
    <ul class="user-card__badges-list">
      <li class="user-card__badges-item badge">BitTransfer</li>
      <li class="user-card__badges-item badge">CryptoEx</li>
      <li class="user-card__badges-item badge">Первый криптобанк</li>
    </ul>
    <button class="btn btn--green user-card__change-btn" type="button">Обменять</button>
  </div>`;
}

export {getBaloonTemplate};
