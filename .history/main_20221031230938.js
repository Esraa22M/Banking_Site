/* navigation sm screen */
let navToggle = document.querySelector(".humberger__button_toggle--container");
let button__open = document.querySelector(".button__open");
let primary__navigation = document.querySelector(".primary__navigation");
let primary__navigation_list = document.querySelector(
  ".primary__navigation--list"
);
let button__close = document.querySelector(".button__close");
let primary__header = document.querySelector(".primary__header");
navToggle.addEventListener("click", () => {
  if (!primary__navigation.hasAttribute("data-visible")) {
    navToggle.setAttribute("aria-expanded", true);
    button__open.setAttribute("aria-hidden", true);
    button__close.setAttribute("aria-hidden", false);
  } else {
    primary__navigation.removeAttribute("data-visible");
    navToggle.setAttribute("aria-expanded", false);
    button__open.setAttribute("aria-hidden", false);
    button__close.setAttribute("aria-hidden", true);
  }
  primary__navigation.toggleAttribute("data-visible");

  button__open.classList.toggle("hidden-sm");
  button__close.classList.toggle("hidden-sm");
  primary__header.toggleAttribute("overlay");
  primary__navigation_list.classList.toggle("hidden-sm");
});

/* model window handling */
let close_modal = document.querySelector(".modal__close--button");
let open_modal = document.querySelector(".register__button");
