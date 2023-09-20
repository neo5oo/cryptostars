import {getData} from './api.js';

function addContractors() {
  getData('contractors').then((result) => {
    const arr = Array.from(result);
    const thead = document.querySelector('.users-list__table-row');

    arr.forEach((contractor) => {
      const template = `<tr class="users-list__table-row">
      <td class="users-list__table-cell users-list__table-name">
        <svg width="20" height="20" aria-hidden="true">
          <use xlink:href="#icon-star"></use>
        </svg>
        <span>${contractor.userName}</span>
      </td>
      <td class="users-list__table-cell users-list__table-currency">${contractor.balance.currency}</td>
      <td class="users-list__table-cell users-list__table-exchangerate">${contractor.exchangeRate}₽</td>
      <td class="users-list__table-cell users-list__table-cashlimit">
        9 999 999&nbsp;₽&nbsp;-&nbsp;9 999 999 000&nbsp;₽
      </td>
      <td class="users-list__table-cell users-list__table-payments">
        <ul class="users-list__badges-list">
          <li class="users-list__badges-item badge">${contractor.paymentMethods}</li>
          // <li class="users-list__badges-item badge">CryptoEx</li>
          // <li class="users-list__badges-item badge">Первый криптобанк</li>
        </ul>
      </td>
      <td class="users-list__table-cell users-list__table-btn">
        <button class="btn btn--greenborder" type="button">Обменять</button>
      </td>
    </tr>`;

      thead.insertAdjacentHTML('afterBegin', `${template}`);
    });
  });
}

export {addContractors};
