const phoneMask = function () {
  const phoneAll = document.querySelectorAll('[name = phone]')

  phoneAll.forEach(elem => {
    elem.addEventListener('input', () => {
      if (elem.value.length === 16) {elem.blur();}
      if (elem.value.length > 16) {
        elem.value = elem.value.substr(0, 16);
      } else {
        elem.value = elem.value.replace(/[^\d\(\)\-\+]/, "")
      }
      if (elem.value.length > 7) {
        if (!/^[\+][\d][\(][\d][\d][\d][\)]/.test(elem.value)) {
          elem.value = '+7'
        }
      }
    })

    elem.addEventListener('keyup', (e) => {
      console.log(e.key)
      if ((e.key == '(') || (e.key == ')') || (e.key == '-') || (e.key == '+')) {
        elem.value = elem.value.slice(0, -1)
      }
      if (elem.value.length == 5) {
        let ss = elem.value.substr(-3);
          if (/^\d+$/.test(ss)) {
          elem.value = `+7(${ss})`
        } else {
          elem.value = '+7'
        }
      } else if (elem.value.length == 10 && (e.key !== 'Backspace') && (e.key !== 'Delete')) {
        elem.value = `${elem.value}-`
      } else if (elem.value.length == 13 && (e.key !== 'Backspace') && (e.key !== 'Delete')) {
        elem.value = `${elem.value}-`
      }
    })

    elem.addEventListener('focus', () => {
      if (elem.value.length < 2) {
        elem.value = '+7 '
      }
    })

    elem.addEventListener('blur', () => {
      if (elem.value.length < 4) {
        elem.value = ''
      }
    })

  })
}

export default phoneMask;
