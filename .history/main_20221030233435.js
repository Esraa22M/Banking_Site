/* navigation */
let navToggle = document.querySelector(".humberger__button_toggle--container");
let button__open = document.querySelector(".button__open");
let primary__navigation = document.querySelector(".primary__navigation");
let button__close = document.querySelector(".button__close");
let primary__header = document.querySelector(".primary__header");
navToggle.addEventListener("click", () => {
  if (!primary__navigation.hasAttribute("data-visible")) {
    primary__navigation.setAttribute("data-visible", "");
    navToggle.toggleAttribute("aria-expanded", true);
    button__open.toggleAttribute("aria-hidden", false);
    button__close.toggleAttribute("aria-hidden", true);
    primary__header.toggleAttribute("overlay", "");
  }
});
