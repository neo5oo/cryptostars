import {getContractorTemplate} from './get-contractor-template.js';
import {addMap} from './map.js';

class Contractors {
  constructor(contractors) {
    this._contractorsElement = document.querySelector('.contractors');
    if (!this._contractorsElement) {
      return null;
    }
    this._contractors = contractors;
    this._currentContractors = this._contractors;
    this._map = null;

    this._checkboxElement = this._contractorsElement.querySelector('#checked-users');
    this._tbodyElement = this._contractorsElement.querySelector('.users-list__table-body');
    this._listOpenerElement = this._contractorsElement.querySelector('[data-open="list"]');
    this._mapOpenerElement = this._contractorsElement.querySelector('[data-open="map"]');
    this._contentElements = this._contractorsElement.querySelectorAll('[data-content]');
    this._openerElements = [this._listOpenerElement, this._mapOpenerElement];
    this._buyButton = this._contractorsElement.querySelector('[data-open="buy"]');
    this._saleButton = this._contractorsElement.querySelector('[data-open="sale"]');
    this._buttons = [this._buyButton, this._saleButton];

    this._openerElements.forEach((openerElement) => {
      openerElement.addEventListener('click', (event) => {
        this._handleClickOpener(openerElement, event);
      });
    });
    this._checkboxElement.addEventListener('change', this._onChange.bind(this));

    this._initSwitchBuySale();
    this.render();
  }

  get _sallers() {
    return this._contractors.filter(({status}) => status === 'seller');
  }

  get _buyers() {
    return this._contractors.filter(({status}) => status === 'buyer');
  }

  _onChange() {
    this.render();
  }

  _handleClickOpener(openerElement, event) {
    this._contentElements.forEach((itemElement) => {
      itemElement.hidden = true;
    });
    this._openerElements.forEach((itemElement) => {
      itemElement.classList.remove('is-active');
    });
    const contentElement = this._contractorsElement.querySelector(`[data-content="${openerElement.dataset.open}"]`);
    contentElement.hidden = false;
    if (openerElement === this._mapOpenerElement && !this._map) {
      this._map = addMap(
        this._contractors.filter(({coords, paymentMethods, status}) => {
          const hasRub = paymentMethods && paymentMethods.some(({currency}) => currency === 'RUB');
          return status === 'seller' && coords && hasRub;
        })
      );
    }
    this._map.closePopup();
    event.currentTarget.classList.add('is-active');
  }

  _initSwitchBuySale() {
    this._buttons.forEach((element) => {
      element.addEventListener('click', (event) => {
        this._buttons.forEach((itemElement) => {
          itemElement.classList.remove('is-active');
        });
        event.currentTarget.classList.add('is-active');
        this._currentContractors = event.currentTarget === this._saleButton ? this._buyers : this._sallers;
        this.render();
      });
    });
  }

  render() {
    const verifiedUsers = this._currentContractors.filter(({isVerified}) => isVerified);
    const users = this._checkboxElement.checked ? verifiedUsers : this._currentContractors;
    this._tbodyElement.innerHTML = users.map(getContractorTemplate).join('');

    // Как модули взаимодействуют между собой не понял
    // const verifiedUsersMap = new Map();
    // verifiedUsersMap.render(this._currentContractors);
  }
}

const initContractors = (contractors) => new Contractors(contractors);

export {Contractors, initContractors};
