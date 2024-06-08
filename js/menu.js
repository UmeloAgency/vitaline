(() => {
  const openMenuBtn = document.querySelector('[data-menu-toggle]');
  const elMenu = document.querySelector('#menu-item');
  const toggleBtn = document.querySelector('#burger');
  const menu = document.querySelector('[data-menu]');

  openMenuBtn.addEventListener('click', toggleMenu);

  elMenu.addEventListener('click', closeMenu);

  function toggleMenu() {
    menu.classList.toggle('is-open');
  }

  function closeMenu(e) {
    menu.classList.remove('is-open');
    toggleBtn.checked = false;
  }
})();
