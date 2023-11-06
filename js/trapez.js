const areaBtn = document.getElementById("btn-area");
const quantityBtn = document.getElementById("btn-quantity");
const areaContainer = document.getElementById("order-area-contianer");
const quantityContainer = document.getElementById("order-quantity-contianer");
const lengthInput = document.getElementById("product-length");
const pieceInput = document.getElementById("product-piece");
const areaInput = document.getElementById("product-area");

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

lengthInput.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/\D/g, "");
});

pieceInput.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/\D/g, "");
});

areaInput.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/\D/g, "");
});
