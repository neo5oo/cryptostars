import {splitNumber} from '../utils/split-number.js';
import {getVerifiedIconTemplate} from './icon-template.js';

function getContractorTemplate(contractor) {
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

  return html`<tr class="users-list__table-row">
    <td class="users-list__table-cell users-list__table-name">
      ${getVerifiedIconTemplate(contractor.isVerified)}
      <span>${contractor.userName}</span>
    </td>
    <td class="users-list__table-cell users-list__table-currency">${contractor.balance.currency}</td>
    <td class="users-list__table-cell users-list__table-exchangerate">${splitNumber(contractor.exchangeRate)} ₽</td>
    <td class="users-list__table-cell users-list__table-cashlimit">
      ${splitNumber(contractor.minAmount)} ₽ - ${splitNumber(contractor.balance.amount)} ₽
    </td>
    <td class="users-list__table-cell users-list__table-payments">
      ${contractor.paymentMethods ? getMethodsTemplate() : ''}
    </td>
    <td class="users-list__table-cell users-list__table-btn">
      <button class="btn btn--greenborder" type="button" data-contractor-id="${contractor.id}">Обменять</button>
    </td>
  </tr>`;
}

export {getContractorTemplate};
