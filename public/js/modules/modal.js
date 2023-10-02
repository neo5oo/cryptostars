class Modal {
  constructor(openers, openerCallback = () => {}) {
    this._modal = document.querySelector('.modal');
    this._btnOpeners = openers;
    this._btnClose = this._modal.querySelector('.modal__close-btn');
    this._btnModalSubmit = this._modal.querySelector('.modal__submit');
    this._overlay = this._modal.querySelector('.modal__overlay');
    this._openerCallback = openerCallback;

    this._focusableElements = this._modal.querySelectorAll(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    this._firstFocusableElement = this._focusableElements[0];
    this._lastFocusableElement = this._focusableElements[this._focusableElements.length - 1];

    this._handleButtonClick = this._handleButtonClick.bind(this);
    this._handleCloseButtonClick = this._handleCloseButtonClick.bind(this);
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
    this._handleKeydown = this._handleKeydown.bind(this);
    this._btnOpeners.forEach((opener) => {
      opener.addEventListener('click', this._handleOpenButtonClick);
    });
  }

  _openModal() {
    this._openerCallback(this._modal);
    this._modal.style.display = '';
    this._firstFocusableElement.focus();
    this._btnClose.addEventListener('click', this._handleCloseButtonClick);
    this._overlay.addEventListener('click', this._handleOverlayClick);
    document.addEventListener('keydown', this._handleKeydown);
  }

  _closeModal() {
    this._modal.style.display = 'none';
    this._btnClose.removeEventListener('click', this._handleCloseButtonClick);
    this._overlay.removeEventListener('click', this._handleOverlayClick);
    document.removeEventListener('keydown', this._handleKeydown);
  }

  _handleOpenButtonClick() {
    this._openModal();
  }

  _handleCloseButtonClick() {
    this._closeModal();
  }

  _handleOverlayClick(event) {
    if (event.target === this.overlay) {
      this._closeModal();
    }
  }

  _handleKeydown(event) {
    if (event.key === 'Escape') {
      this._closeModal();
    }

    if (event.key === 'Tab') {
      if (event.shiftKey) {
        if (document.activeElement === this._firstFocusableElement) {
          event.preventDefault();
          this._lastFocusableElement.focus();
        }
      } else {
        if (document.activeElement === this._lastFocusableElement) {
          event.preventDefault();
          this._firstFocusableElement.focus();
        }
      }
    }
  }
}

const initModal = (openers, openerCallback) => new Modal(openers, openerCallback);

export {initModal};
