const sliderRepair = () => {
  const buttons = document.querySelectorAll('.repair-types-nav__item')
  const allSliders = document.querySelector('.repair-types-slider')
  const allImagesDiv = document.querySelectorAll('.repair-types-slider__slide')
  const arrowLeft = document.getElementById('repair-types-arrow_left')
  const arrowRight = document.getElementById('repair-types-arrow_right')
  const counterCurrent = document.querySelector('.slider-counter-content__current')
  const counterTotal = document.querySelector('.slider-counter-content__total')
  const mobileArrowRight = document.getElementById('nav-arrow-repair-right_base')
  const mobileArrowLeft = document.getElementById('nav-arrow-repair-left_base')
  const navListRepair = document.querySelector('.nav-list-repair')

  let activeButton = 0;
  let activeImage = 0;

  let currNavLength = navListRepair.offsetWidth / 4;
  let move = 1;
  let lv = 1;

  const mobileSliderChanges = () => {
    move = 1;
    lv = 1;
    currNavLength = navListRepair.offsetWidth / 4
    mobileArrowRight.addEventListener('click', () => {
      move++;
      if (navListRepair.offsetWidth > currNavLength * (move + 2)) {
        navListRepair.style.transform = `translateX(-${currNavLength * move}px)`
        lv--;
      } else {
        move--;
      }
    })

    mobileArrowLeft.addEventListener('click', () => {
      if (move > 1) {

        navListRepair.style.transform = `translateX(${currNavLength * lv}px)`
        lv++
        move--;
      }
    })
  }


  // let myStyle = document.createElement('style');
  // myStyle.innerText = '.no-select { -webkit-user-select: none;\n' +
  //   '-moz-user-select: none;\n' +
  //   '-ms-user-select: none;\n' +
  //   '-o-user-select: none;\n' +
  //   'user-select: none; }';
  // document.head.appendChild(myStyle);
  // document.head.appendChild(myStyle);
  //
  // counterCurrent.classList.add('no-select')
  // counterTotal.classList.add('no-select')
  //
  // allImagesDiv.forEach(ich => {
  //   ich.classList.add('no-select')
  // })

  document.querySelector('.repair-types-tab').classList.add('no-select')

  const startZeroOpacity = () => {
    allImagesDiv.forEach(ich => {
      ich.style.display = 'none'
    })
  }

  const counterChanges = () => {
    counterCurrent.innerText = activeImage + 1;
    counterTotal.innerText = allSliders.children[activeButton].children.length;
  }

  const blockOfImages = () => {
    startZeroOpacity();
    allSliders.children[activeButton].children[activeImage].style.display = 'block'
    buttons[activeButton].classList.add('active');
    counterChanges();
  }

  const changesImagesInsideBlock = () => {
    arrowLeft.addEventListener('click', (e) => {
      // e.preventDefault()
      if (activeImage > 0) {
        activeImage = activeImage - 1;
      } else {
        activeImage = allSliders.children[activeButton].children.length - 1
      }
      blockOfImages()
      counterChanges()
    })
    arrowRight.addEventListener('click', (e) => {
      // e.preventDefault()
      if (activeImage >= (allSliders.children[activeButton].children.length - 1)) {
        activeImage = 0;
      } else {
        activeImage = activeImage + 1
      }
      console.log(activeImage)
      blockOfImages()
      counterChanges()
    })
  }

  buttons.forEach(ich => {
    ich.addEventListener('click', () => {
      if (ich.classList.contains('repair-types-nav__item-1')) {
        buttons[activeButton].classList.remove('active');
        activeButton = 0
        activeImage = 0;
        blockOfImages()
      } else if (ich.classList.contains('repair-types-nav__item-2')) {
        buttons[activeButton].classList.remove('active');
        activeButton = 1
        activeImage = 0;
        blockOfImages()
      } else if (ich.classList.contains('repair-types-nav__item-3')) {
        buttons[activeButton].classList.remove('active');
        activeButton = 2
        activeImage = 0;
        blockOfImages()
      } else if (ich.classList.contains('repair-types-nav__item-4')) {
        buttons[activeButton].classList.remove('active');
        activeButton = 3
        activeImage = 0;
        blockOfImages()
      } else if (ich.classList.contains('repair-types-nav__item-5')) {
        buttons[activeButton].classList.remove('active');
        activeButton = 4
        activeImage = 0;
        blockOfImages()
      }
    })
  })

  window.addEventListener('resize', mobileSliderChanges())

  changesImagesInsideBlock()
  counterChanges()
  mobileSliderChanges()
}

export default sliderRepair;
