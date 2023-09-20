function showErrorMessage() {
  const container = document.querySelectorAll('.container');
  for (let i = 0; i < container.length; i++) {
    container[i].style.display = 'none';
  }

  document.querySelector('header').style.padding = '0';
  document.querySelector('footer').style.padding = '0';

  const errorMessage = document.querySelector('#message-error');
  errorMessage.style.display = '';
}

export {showErrorMessage};
