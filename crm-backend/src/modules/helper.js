const animate = ({timing, draw, duration}) => {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

const cssSearch = (name) => {
  let allSearches = [];
  const sheets = document.styleSheets;
  for (let i in sheets) {
    // console.log(sheets[i])
    try {
      // console.log(sheets[i].cssRules)
      for (let y in sheets[i].cssRules) {
        // console.log(sheets[i].cssRules[y])
        try {
          if (sheets[i].cssRules[y].selectorText.includes(name)) {
            allSearches.push(sheets[i].cssRules[y].cssText)
            console.log(sheets[i].cssRules[y].cssText);
          }
        } catch {
          // console.log(e)
        }
      }
    } catch (e) {
      // console.log(e)
    }
  }
  return allSearches;
}

export {animate, cssSearch}
