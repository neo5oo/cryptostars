import {html} from '../utils/html.js';

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
      <svg width="20" height="20" aria-hidden="true">
        <use xlink:href="#icon-star"></use>
      </svg>
      <span>${contractor.userName}</span>
    </td>
    <td class="users-list__table-cell users-list__table-currency">${contractor.balance.currency}</td>
    <td class="users-list__table-cell users-list__table-exchangerate">${contractor.exchangeRate} ₽</td>
    <td class="users-list__table-cell users-list__table-cashlimit">
      9 999 999&nbsp;₽&nbsp;-&nbsp;9 999 999 000&nbsp;₽
    </td>
    <td class="users-list__table-cell users-list__table-payments">
      ${contractor.paymentMethods ? getMethodsTemplate() : ''}
    </td>
    <td class="users-list__table-cell users-list__table-btn">
      <button class="btn btn--greenborder" type="button">Обменять</button>
    </td>
  </tr>`;
}

export {getContractorTemplate};
