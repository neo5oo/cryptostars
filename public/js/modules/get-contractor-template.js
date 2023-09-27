import {html} from '../utils/html.js';
import {splitNumber} from '../utils/split-number.js';

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
  const emptyTemplate = html`<span class="icon"></span>`;
  const svgTemplate = html`<svg class="icon" width="20" height="20" aria-hidden="true">
    <use xlink:href="#icon-star"></use>
  </svg>`;

  return html`<tr class="users-list__table-row">
    <td class="users-list__table-cell users-list__table-name">
      ${contractor.isVerified ? svgTemplate : emptyTemplate}
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
      <button class="btn btn--greenborder" type="button">Обменять</button>
    </td>
  </tr>`;

  console.log(contractor);
}

export {getContractorTemplate};
