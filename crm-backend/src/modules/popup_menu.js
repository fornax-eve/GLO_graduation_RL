const popup_menu = function () {
  const header = document.querySelector('.header')
  const popupDialogMenu = document.querySelector('.popup-dialog-menu')
  const closeMenu = document.querySelector('.close-menu')
  let opened = false;

  header.addEventListener('click', (e) => {
    if (e.target.closest('.menu')) {
      popupDialogMenu.style.transform = 'translate3d(0, 0, 0)';//'translate3d(645px, 0, 0)';
      setTimeout(() => {
        opened = true;
      }, 700)
    }
  })

  document.addEventListener('click', (e) => {
    if (opened) {
      if (e.target.contains(closeMenu) || !e.target.closest('.popup-dialog-menu')) {
        opened = false;
        popupDialogMenu.style.transform = 'translate3d(645px, 0, 0)';
      }
    }
  })

  document.onkeydown = (e) => {
    if (opened) {
      if (e.key == 'Escape') {
        opened = false;
        popupDialogMenu.style.transform = 'translate3d(645px, 0, 0)';
      }
    }
  }
}

export default popup_menu;
