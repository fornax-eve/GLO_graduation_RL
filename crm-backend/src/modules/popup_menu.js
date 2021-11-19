import {cssSearch} from "./helper";

const popup_menu = function () {
  const header = document.querySelector('.header')
  const popupDialogMenu = document.querySelector('.popup-dialog-menu')
  const closeMenu = document.querySelector('.close-menu')
  const menuLink = document.querySelectorAll('.menu-link')
  const popupRepairType = document.querySelector('.popup-repair-types')
  const linkTopopupRepair = document.querySelector('.menu-link.no-overflow')
  const linksToPopUpRepair = document.querySelectorAll('.link-popuprepair')
  const close = document.querySelectorAll('.close')
  const linkPrivacy = document.querySelectorAll('.link-privacy')
  const popupPrivacy = document.querySelector('.popup-privacy')
  const popupFormula = document.querySelectorAll('.formula-item-popup')
  const formulaIcon = document.querySelectorAll('.formula-item__icon')

  let privacy = false;
  let opened = false;


  // динамическое отслеживание ширины экрана для реализации выезда меню сверху
  window.addEventListener('resize', function () {
    if (document.body.clientWidth < 576) {
      popupDialogMenu.style.transform = 'translate3d(0, -715px, 0)';
    } else {
      popupDialogMenu.style.transform = 'translate3d(645px, 0, 0)';
    }
  });


  header.addEventListener('click', (e) => {
    if (e.target.closest('.menu')) {
      popupDialogMenu.style.transform = 'translate3d(0, 0, 0)';
      setTimeout(() => {
        opened = true;
      }, 700)
    }
  })

  document.onkeydown = (e) => {
    if (opened) {
      if (e.key == 'Escape') {
        opened = false;
        popupDialogMenu.style.transform = 'translate3d(645px, 0, 0)';
      }
    }
    if (privacy) {
      if (e.key == 'Escape') {
        privacy = false;
        popupPrivacy.style.visibility = 'hidden';
      }
    }
  }

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
    if (e.target.closest('.menu-link.no-overflow')) {
      popupRepairType.style.visibility = 'visible';
      if (opened) {
        opened = false;
        if (document.body.clientWidth < 576) {
          popupDialogMenu.style.transform = 'translate3d(0, -715px, 0)';
        } else {
          popupDialogMenu.style.transform = 'translate3d(645px, 0, 0)';
        }
      }
    }
  })

  //открываем окно политика конфиденциальности
  linkPrivacy.forEach(each => {
    each.addEventListener('click', () => {
      popupPrivacy.style.visibility = 'visible';
      privacy = true;
    })
  })

  linksToPopUpRepair.forEach(each => {
    each.addEventListener('click', () => {
      popupRepairType.style.visibility = 'visible';
    })
  })

  //Закрываем окна
  close.forEach(each => {
    each.addEventListener('click', () => {
      popupRepairType.style.visibility = 'hidden';
      if (privacy) {
        privacy = false;
        popupPrivacy.style.visibility = 'hidden';
      }
    })
  })

  //подсказка при наведении на кружок с цифрой
  let styleElem = document.createElement("style")
  styleElem.id = 'styleFormula';
  formulaIcon.forEach(ich => {
    ich.addEventListener('mouseover', () => {
      if (ich.closest('.mobile-hide')) {
        let a = ich.getBoundingClientRect().top
        let b = ich.firstElementChild.clientHeight
        let c = ich.clientHeight;
        if (a < b) {
          ich.firstElementChild.style.transform = `translateY(${b + c + 45}px)`
          styleElem.innerText = `.formula-item-popup-${ich.children[2].textContent}:before {transform: rotate(180deg);}`
          document.head.appendChild(styleElem)
        }
        ich.classList.add('active-item')
      }
    })
    ich.addEventListener('mouseout', () => {
      if (ich.closest('.mobile-hide')) {
        ich.classList.remove('active-item')
        ich.firstElementChild.removeAttribute('style');
        const head = document.getElementById('styleFormula');
        if (head) {
          document.head.removeChild(styleElem);
        }
      }

    })
  })

  // cssSearch(".formula-item-popup")
}

export default popup_menu;
