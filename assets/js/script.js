const burger = document.querySelector("#ham");
const nav = document.querySelector("ul");

burger.addEventListener("click", function () {
  nav.classList.toggle("activeul");
});
