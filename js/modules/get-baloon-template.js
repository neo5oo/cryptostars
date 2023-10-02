import {splitNumber} from '../utils/split-number.js';
import {getVerifiedIconTemplate} from './icon-template.js';

function getBaloonTemplate(contractor) {
  function getMethodItemsTemplate() {
    return contractor.paymentMethods
      .map(({provider}) => html`<li class="users-list__badges-item badge">${provider}</li>`)
      .join('');
  }

  function getMethodsTemplate() {
    return html`<ul class="users-list__badges-list">
      ${getMethodItemsTemplate()}
    </ul>`;
  }

  return html`<div class="user-card">
    ${getVerifiedIconTemplate(contractor.isVerified)}
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
      <span class="user-card__cash-data"
        >${splitNumber(contractor.minAmount)} ₽ - ${splitNumber(contractor.balance.amount)} ₽</span
      >
    </p>
    <ul class="user-card__badges-list">
      ${contractor.paymentMethods ? getMethodsTemplate() : ''}
    </ul>
    <button class="btn btn--green user-card__change-btn" type="button">Обменять</button>
  </div>`;
}

export {getBaloonTemplate};
