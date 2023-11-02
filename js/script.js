const navLinks = document.querySelectorAll(".navbar-link");
const openBtn = document.getElementById("open-menu");
const closeBtn = document.getElementById("close-menu");
const quantityBtn = document.getElementById("btn-quantity");
const areaBtn = document.getElementById("btn-area");
const container = document.getElementsByClassName("responsive-container")[0];
const quantityContainer = document.getElementById("order-quantity-contianer");
const areaContainer = document.getElementById("order-area-contianer");
const navBar2 = document.getElementsByClassName("navbar")[0];
let scroll = window.scrollY;

openBtn.addEventListener("click", () => {
  container.style.bottom = "0px";
  container.style.visibility = "visible";
});

closeBtn.addEventListener("click", () => {
  container.style.bottom = "1000px";
  container.style.visibility = "hidden";
});

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

quantityBtn.addEventListener("click", () => {
  quantityContainer.style.display = "block";
  quantityBtn.style.background = "#032D78";
  quantityBtn.style.color = "#FFF";
  areaContainer.style.display = "none";
  areaBtn.style.background = "transparent";
  areaBtn.style.color = "#000";
});

areaBtn.addEventListener("click", () => {
  areaContainer.style.display = "block";
  areaBtn.style.background = "#032D78";
  areaBtn.style.color = "#FFF";
  quantityContainer.style.display = "none";
  quantityBtn.style.background = "transparent";
  quantityBtn.style.color = "#000";
});
