import {splitNumber} from '../utils/split-number.js';
import {getVerifiedIconTemplate} from './icon-template.js';

class Form {
  constructor(formElement) {
    this._formElement = formElement;
    this._btnExchangeElements = this._formElement.querySelector('.custom-input__btn');
    this._btnSubmit = this._formElement.querySelector('.modal__submit');
    this._dataUserName = this._formElement.querySelector('[data-user-name]');
    this._dataExchangeRate = this._formElement.querySelector('[data-exchange-rate]');
    this._dataMinAmount = this._formElement.querySelector('[data-min-amount]');
    this._dataAmount = this._formElement.querySelector('[data-amount]');

    // this._btnExchangeElements.addEventListener('click', this._substituteData.bind(this));
    this._btnSubmit.addEventListener('click', this._handleSubmit.bind(this));
  }

  _handleSubmit(event) {
    event.preventDefault();
  }

  changeContent({userName, exchangeRate, minAmount, balance: {amount}, isVerified}) {
    this._dataUserName.innerHTML = `${getVerifiedIconTemplate(isVerified)}${userName}`;
    this._dataExchangeRate.textContent = splitNumber(exchangeRate);
    this._dataMinAmount.textContent = splitNumber(minAmount);
    this._dataAmount.textContent = splitNumber(amount);
  }
}

const initForm = (formElement) => new Form(formElement);

export {initForm, Form};
