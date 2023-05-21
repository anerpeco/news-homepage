const menuBtnEl = document.querySelector(".hamburger");
const menuOpenEl = document.querySelector(".menu_icon_open");
const menuCloseEl = document.querySelector(".menu_icon_close");
const navMenuEl = document.querySelector(".nav");
const bodyEl = document.querySelector(".body");

menuBtnEl.addEventListener("click", function () {
  menuOpenEl.classList.toggle("disabled");
  menuCloseEl.classList.toggle("disabled");
  navMenuEl.classList.toggle("disabled");
  bodyEl.classList.toggle("fade_in");
});
