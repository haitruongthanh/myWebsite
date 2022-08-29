const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const darkMode = document.querySelector("#darkMode");
const body = document.querySelector("body");
const toggleLinks = document.querySelectorAll("#toggleLink");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
});

toggleLinks.forEach((toggleLink) => {
  toggleLink.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});

darkMode.addEventListener("click", () => {
  moon.classList.toggle("hidden");
  sun.classList.toggle("hidden");
  body.classList.toggle("dark");
});
