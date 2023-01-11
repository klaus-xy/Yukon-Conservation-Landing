const nav = document.getElementById("nav");
const hero = document.getElementById("hero");
const logo = document.getElementById("logo");
const footer = document.getElementById("footer");
const open_nav_btn = document.getElementById("menu-open");
const close_nav_btn = document.getElementById("menu-close");
const nav_items = document.querySelectorAll(".nav-item");
let _item_id;

const item1 = document.getElementById(1);

//OPENING NAV BAR MOBILE
open_nav_btn.addEventListener("click", () => {
  openNav();
});

//CLOSING NAV BAR M0BILE
close_nav_btn.addEventListener("click", () => {
  closeNav();
});

//HIGHLIGHTING EACH NAV ELEMENT
// for (let i = 0; i < nav_item.length; i++) {
//   nav_item[i].addEventListener("click", () => {
//     nav_item[i].classList.add("selected");
//     console.log("clicked nav item " + (i + 1) + "!");
//   });
// }

nav_items.forEach((nav_item) => {
  //add event listener to all nav elements
  nav_item.addEventListener("click", () => {
    //remove underline on all elements
    nav_items.forEach((nav_item) => {
      nav_item.classList.remove("selected");
    });
    //adds underline to selected element
    nav_item.classList.add("selected");
  });
});

//UNDERLINE LENGHT FOR EACH NAV ELEMENTS BY ID

//FUNCTIONS
function openNav() {
  nav.style.transform = "translateX(0)";
  logo.style.opacity = "0";
  hero.style.opacity = "0";
  footer.style.opacity = "0";
  open_nav_btn.style.display = "none";
  close_nav_btn.style.display = "block";
  console.log("nav visible");
}
function closeNav() {
  nav.style.transform = "translateX(1000px)";
  logo.style.opacity = "1";
  hero.style.opacity = "1";
  footer.style.opacity = "1";
  open_nav_btn.style.display = "block";
  close_nav_btn.style.display = "none";
  console.log("nav not visible");
}

function click_reply(item_id) {
  _item_id = item_id;
  console.log("item_id: " + _item_id);
}
