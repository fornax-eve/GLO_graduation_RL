const popup_menu = function () {
  const header = document.querySelector('.header')
  const popupDialogMenu = document.querySelector('.popup-dialog-menu')
  const closeMenu = document.querySelector('.close-menu')
  const menuLink = document.querySelectorAll('.menu-link')
  let opened = false;

  // динамическое отслеживание ширины экрана для реализации выезда меню сверху
  window.addEventListener('resize',function(){
    if (document.body.clientWidth < 576) {
      popupDialogMenu.style.transform = 'translate3d(0, -715px, 0)';
    } else {
      popupDialogMenu.style.transform = 'translate3d(645px, 0, 0)';
    }
    console.log(popupDialogMenu.clientHeight);
  });


  header.addEventListener('click', (e) => {
    if (e.target.closest('.menu')) {
      popupDialogMenu.style.transform = 'translate3d(0, 0, 0)';
      setTimeout(() => {
        opened = true;
      }, 700)
    }
  })

  const animate = (time, top) => {
    let speed = Math.round(+top / +time);
    requestAnimationFrame(function anim() {
      if (document.documentElement.scrollTop < top) {
        document.documentElement.scrollTop = document.documentElement.scrollTop + speed * 25;
        requestAnimationFrame(anim)
      } else {
        document.documentElement.scrollTop = top;
      }
    })
  }

  document.addEventListener('click', (e) => {
    if (opened) {
      e.preventDefault();
      //прячем меню
      if (e.target.contains(closeMenu) || !e.target.closest('.popup-dialog-menu')) {
        opened = false;
        if (document.body.clientWidth < 576) {
          popupDialogMenu.style.transform = 'translate3d(0, -715px, 0)';
        } else {
          popupDialogMenu.style.transform = 'translate3d(645px, 0, 0)';
        }
      }
    //плавный скроллинг
      menuLink.forEach(each => {
        if (each.hash.length > 2) {
          let coords;
          if (e.target.contains(each) && e.target.closest('a')) {
            coords = Math.round(document.querySelector(each.hash).getBoundingClientRect().top + window.pageYOffset);
            opened = false;
            popupDialogMenu.style.transform = 'translate3d(645px, 0, 0)';
            animate(2000, coords);
          }
        }
      })
    }
    //при нажатии кнопки в футере
    if (e.target == document.querySelector('[href="#main"]')) {
      e.preventDefault();
      let req = requestAnimationFrame(function anim() {
        document.documentElement.scrollTop = document.documentElement.scrollTop - 100;
        if (document.documentElement.scrollTop < 100) {
          document.documentElement.scrollTop = 0;
          cancelAnimationFrame(req)
        } else {
          requestAnimationFrame(anim)
        }
      })
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
