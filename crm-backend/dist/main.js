(()=>{"use strict";(function(){const e=document.querySelector(".header-contacts__arrow"),t=document.querySelector(".header-contacts__phone-number-accord");let n=!1;e.addEventListener("click",(function(){n=!n,n?(this.style.transform="rotate(180deg)",t.style.top="25px",t.firstElementChild.style.opacity=1):(this.style.transform="rotate(0deg)",t.style.top="0px",t.firstElementChild.style.opacity=0)}))})(),function(){const e=document.querySelector(".header"),t=document.querySelector(".popup-dialog-menu"),n=document.querySelector(".close-menu"),o=document.querySelectorAll(".menu-link");let r=!1;e.addEventListener("click",(e=>{e.target.closest(".menu")&&(t.style.transform="translate3d(0, 0, 0)",setTimeout((()=>{r=!0}),700))})),document.addEventListener("click",(e=>{if(r&&(e.preventDefault(),!e.target.contains(n)&&e.target.closest(".popup-dialog-menu")||(r=!1,t.style.transform="translate3d(645px, 0, 0)"),o.forEach((n=>{if(n.hash.length>2){let o;e.target.contains(n)&&e.target.closest("a")&&(o=Math.round(document.querySelector(n.hash).getBoundingClientRect().top+window.pageYOffset),r=!1,t.style.transform="translate3d(645px, 0, 0)",((e,t)=>{let n=Math.round(+t/2e3);requestAnimationFrame((function e(){document.documentElement.scrollTop<t?(document.documentElement.scrollTop=document.documentElement.scrollTop+25*n,requestAnimationFrame(e)):document.documentElement.scrollTop=t}))})(0,o))}}))),e.target==document.querySelector('[href="#main"]')){e.preventDefault();let t=requestAnimationFrame((function e(){document.documentElement.scrollTop=document.documentElement.scrollTop-100,document.documentElement.scrollTop<100?(document.documentElement.scrollTop=0,cancelAnimationFrame(t)):requestAnimationFrame(e)}))}})),document.onkeydown=e=>{r&&"Escape"==e.key&&(r=!1,t.style.transform="translate3d(645px, 0, 0)")}}()})();