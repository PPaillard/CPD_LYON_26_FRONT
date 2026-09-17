const button = document.querySelector("#menu-button");

const nav = document.querySelector("#main-nav");

button.addEventListener("click", function () {
  nav.classList.toggle("is-open");
});
