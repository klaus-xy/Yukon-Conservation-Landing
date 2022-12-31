const nav = document.getElementById("nav");
const hero = document.getElementById("hero");
const logo = document.getElementById("logo");
const open_nav_btn = document.getElementById("menu-open");
const close_nav_btn = document.getElementById("menu-close");

open_nav_btn.addEventListener("click", () => {
  openNav();
});
close_nav_btn.addEventListener("click", () => {
  closeNav();
});

function openNav() {
  nav.style.transform = "translateX(0)";
  logo.style.opacity = "0";
  hero.style.opacity = "0";
  open_nav_btn.style.display = "none";
  close_nav_btn.style.display = "block";
  console.log("nav visible");
}
function closeNav() {
  nav.style.transform = "translateX(1000px)";
  logo.style.opacity = "1";
  hero.style.opacity = "1";
  open_nav_btn.style.display = "block";
  close_nav_btn.style.display = "none";
  console.log("nav not visible");
}
