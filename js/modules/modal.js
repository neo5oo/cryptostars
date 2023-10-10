class Modal {
  constructor(modalElement) {
    this._modalElement = modalElement;
    this._btnOpeners = [];
    this._btnClose = this._modalElement.querySelector('.modal__close-btn');
    this._overlay = this._modalElement.querySelector('.modal__overlay');

    this._focusableElements = this._modalElement.querySelectorAll(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    this._firstFocusableElement = this._focusableElements[0];
    this._lastFocusableElement = this._focusableElements[this._focusableElements.length - 1];

    this._handleOpenButtonClick = this._handleOpenButtonClick.bind(this);
    this._handleCloseButtonClick = this._handleCloseButtonClick.bind(this);
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
    this._handleKeydown = this._handleKeydown.bind(this);
  }

  init(openers, openerCallback = () => {}, closerCallback = () => {}) {
    this._btnOpeners = openers;
    this._openerCallback = openerCallback;
    this._closerCallback = closerCallback;

    this._btnOpeners.forEach((opener) => {
      opener.addEventListener('click', this._handleOpenButtonClick);
    });
  }

  destroy() {
    this._btnOpeners = [];
    this._openerCallback = null;
    this._closerCallback = null;
  }

  _openModal(openerElement) {
    this._openerCallback(openerElement, this._modalElement);
    this._modalElement.hidden = false;
    this._firstFocusableElement.focus();
    this._btnClose.addEventListener('click', this._handleCloseButtonClick);
    this._overlay.addEventListener('click', this._handleOverlayClick);
    document.addEventListener('keydown', this._handleKeydown);
  }

  _closeModal() {
    this._closerCallback(this._modalElement);
    this._modalElement.hidden = true;
    this._btnClose.removeEventListener('click', this._handleCloseButtonClick);
    this._overlay.removeEventListener('click', this._handleOverlayClick);
    document.removeEventListener('keydown', this._handleKeydown);
  }

  _handleOpenButtonClick(event) {
    this._openModal(event.currentTarget);
  }

  _handleCloseButtonClick() {
    this._closeModal();
  }

  _handleOverlayClick(event) {
    if (event.target === this._overlay) {
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

const initModal = (openers, openerCallback, closerCallback) => new Modal(openers, openerCallback, closerCallback);

export {initModal};
