(() => {
  const toggleBtn = document.querySelector('#burger');
  const menu = document.querySelector('[data-menu]');

  toggleBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    menu.classList.toggle('mobile-menu-open');

    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
})();
