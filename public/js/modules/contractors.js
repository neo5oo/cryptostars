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

  tbodyElement.innerHTML = contractors.map(getContractorTemplate).join('');
}

export {initContractors};
