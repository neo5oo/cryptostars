import {getContractorTemplate} from './get-contractor-template.js';
import {addMap} from './map.js';

function initContractors(contractors) {
  const contractorsElement = document.querySelector('.contractors');
  if (!contractorsElement) {
    return null;
  }
  let currentContractors = contractors;
  let isMapReady = false;
  const tbodyElement = document.querySelector('.users-list__table-body');
  const listOpenerElement = contractorsElement.querySelector('[data-open="list"]');
  const mapOpenerElement = contractorsElement.querySelector('[data-open="map"]');

  const contentElements = contractorsElement.querySelectorAll('[data-content]');
  const openerElements = [listOpenerElement, mapOpenerElement];

  const checkboxElement = contractorsElement.querySelector('#checked-users');

  checkboxElement.addEventListener('change', () => {
    renderContractors();
  });

  function renderContractors() {
    const verifiedUsers = currentContractors.filter(({isVerified}) => isVerified);
    const users = checkboxElement.checked ? verifiedUsers : currentContractors;
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
      if (openerElement === mapOpenerElement && !isMapReady) {
        addMap(
          contractors.filter(({coords, paymentMethods, status}) => {
            const hasRub = paymentMethods && paymentMethods.some(({currency}) => currency === 'RUB');
            return status === 'seller' && coords && hasRub;
          })
        );
        isMapReady = true;
      }
      event.currentTarget.classList.add('is-active');
    });
  });

  function switchBuySale() {
    const buyButton = contractorsElement.querySelector('[data-open="buy"]');
    const saleButton = contractorsElement.querySelector('[data-open="sale"]');
    const sallers = contractors.filter(({status}) => status === 'seller');
    const buyers = contractors.filter(({status}) => status === 'buyer');

    const elements = [buyButton, saleButton];

    elements.forEach((element) => {
      element.addEventListener('click', (event) => {
        elements.forEach((itemElement) => {
          itemElement.classList.remove('is-active');
        });
        event.currentTarget.classList.add('is-active');
        currentContractors = event.currentTarget === saleButton ? buyers : sallers;
        renderContractors();
      });
    });
  }

  switchBuySale();
  renderContractors();
}

export {initContractors};
