const navLinks = document.querySelectorAll(".navbar-link");
const openBtn = document.getElementById("open-menu");
const closeBtn = document.getElementById("close-menu");
const container = document.getElementsByClassName("responsive-container")[0];
const navBar2 = document.getElementsByClassName("navbar")[0];
let scroll = window.scrollY;

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;

  if (scroll > scrollPos) {
    navBar2.style.transform = "translateY(0px)";
    navBar2.style.zIndex = "100";
  } else {
    navBar2.style.transform = "translateY(-150px)";
  }

  scroll = scrollPos;
});

openBtn.addEventListener("click", () => {
  container.style.bottom = "0px";
  container.style.visibility = "visible";
});

closeBtn.addEventListener("click", () => {
  container.style.bottom = "1000px";
  container.style.visibility = "hidden";
});
