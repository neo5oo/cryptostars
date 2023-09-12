function initUsers() {
  const usersElement = document.querySelector('.users');
  if (!usersElement) {
    return null;
  }

  const listOpenerElement = usersElement.querySelector('[data-open="list"]');
  const mapOpenerElement = usersElement.querySelector('[data-open="map"]');

  const contentElements = usersElement.querySelectorAll('[data-content]');

  [listOpenerElement, mapOpenerElement].forEach((openerElement) => {
    openerElement.addEventListener('click', () => {
      contentElements.forEach((itemElement) => {
        itemElement.hidden = true;
      });
      const contentElement = usersElement.querySelector(`[data-content="${openerElement.dataset.open}"]`);
      contentElement.hidden = false;
    });
  });
}

export {initUsers};
