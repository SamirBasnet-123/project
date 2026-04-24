const menu = document.querySelector(".menu");
const icon = document.querySelector(".menu_icon");

icon.addEventListener("click", () => {
  menu.classList.toggle("active");
});