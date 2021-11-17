const showSecondTel = function () {
  const headerArrow = document.querySelector('.header-contacts__arrow');
  const secondTelMunber = document.querySelector('.header-contacts__phone-number-accord');
  let tru = false;

  headerArrow.addEventListener('click', function() {
    tru = !tru;
    if (tru) {
      this.style.transform = 'rotate(180deg)';
      secondTelMunber.style.top = '25px';
      secondTelMunber.firstElementChild.style.opacity = 1;
    } else {
      this.style.transform = 'rotate(0deg)';
      secondTelMunber.style.top = '0px';
      secondTelMunber.firstElementChild.style.opacity = 0;
    }

  })

}

export default showSecondTel;
