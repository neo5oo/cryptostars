import {getContractorTemplate} from './get-contractor-template.js';

function initContractors(contractors) {
  const contractorsElement = document.querySelector('.contractors');
  if (!contractorsElement) {
    return null;
  }

  const tbodyElement = document.querySelector('.users-list__table-body');
  const listOpenerElement = contractorsElement.querySelector('[data-open="list"]');
  const mapOpenerElement = contractorsElement.querySelector('[data-open="map"]');

  const contentElements = contractorsElement.querySelectorAll('[data-content]');
  const openerElements = [listOpenerElement, mapOpenerElement];

  // const buyButton = contractorsElement.querySelector('[data-open="buy"]');
  // const saleButton = contractorsElement.querySelector('[data-open="sale"]');
  // const sallers = contractors.filter(({status}) => status === 'seller');

  const checkbox = contractorsElement.querySelector('#checked-users');
  checkbox.addEventListener('change', showVerifiedContractors);
  const verifiedUsers = contractors.filter(({isVerified}) => isVerified);

  function showVerifiedContractors() {
    renderContractors();
  }

  function renderContractors() {
    const users = checkbox.checked ? verifiedUsers : contractors;
    tbodyElement.innerHTML = users.map(getContractorTemplate).join('');
  }

  openerElements.forEach((openerElement) => {
    openerElement.addEventListener('click', (event) => {
      contentElements.forEach((itemElement) => {
        itemElement.hidden = true;
      });
      openerElements.forEach((itemElement) => {
        itemElement.classList.remove('is-active');
      });
      const contentElement = contractorsElement.querySelector(`[data-content="${openerElement.dataset.open}"]`);
      contentElement.hidden = false;
      event.currentTarget.classList.add('is-active');
    });
  });

  renderContractors();
}

export {initContractors};
