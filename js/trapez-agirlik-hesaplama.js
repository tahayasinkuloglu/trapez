const firstPick = document.getElementById("firstPick");
const secondPick = document.getElementById("secondPick");
const thirdPick = document.getElementById("thirdPick");
const fourthPick = document.getElementById("fourthPick");
const inputA = document.getElementById("input_adet");
const inputM = document.getElementById("input_metre");
const inputArea = document.getElementById("input_alan");
const formImg = document.getElementById("form-img");

window.addEventListener("keyup", () => {
  inputM.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  });
  inputA.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  });
  inputArea.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  });

  if (inputArea.value > 0) {
    inputA.setAttribute("disabled", "disabled");
    inputM.setAttribute("disabled", "disabled");
  } else {
    inputA.removeAttribute("disabled");
    inputM.removeAttribute("disabled");
  }

  if (inputA.value > 0 || inputM.value > 0) {
    inputArea.setAttribute("disabled", "disabled");
  } else {
    inputArea.removeAttribute("disabled");
  }

  let x = parseInt(inputA.value);
  let y = parseInt(inputM.value);
  let z = parseInt(inputArea.value);
});
const trapezTip = {
  "27-200-80cm": "27 / 200 - 80cm (Kapatma Alanı)",
  "27-200-100cm": "27 / 200 - 100cm (Kapatma Alanı)",
  "35-151-91cm": "38 / 151 - 91cm (Kapatma Alanı)",
  "38-151-76cm": "38 / 151 - 76cm (Kapatma Alanı)",
};

const betonTrapezTip = {
  "38-151-75cm-beton": "38 / 151 - 75cm (Kapatma Alanı)",
  "38-151-91cm-beton": "38 / 151 - 91cm (Kapatma Alanı)",
  "60-940-94cm-beton": "60 / 940 - 94cm (Kapatma Alanı)",
  "75-750-75cm-beton": "75 / 750 - 75cm (Kapatma Alanı)",
};

firstPick.addEventListener("change", () => {
  const pick = firstPick.value;

  secondPick.innerHTML = "";
  thirdPick.innerHTML = "";
  fourthPick.innerHTML = "";
  inputM.innerHTML = "";
  inputA.innerHTML = "";
  secondPick.removeAttribute("disabled");
  thirdPick.removeAttribute("disabled");
  fourthPick.removeAttribute("disabled");
  inputM.removeAttribute("disabled");
  inputA.removeAttribute("disabled");
  inputArea.removeAttribute("disabled");

  if (pick === "catiVeCepheTrapezSac") {
    const trapezTur = ["Boyalı", "Galvanizli"];

    const secim = document.createElement("option");
    secim.value = "";
    secim.text = "ÜRÜN TİPİ SEÇ";
    secim.disabled = true;
    secim.selected = true;
    secondPick.appendChild(secim);

    const sacKalinlik = [
      "0.40mm",
      "0.45mm",
      "0.50mm",
      "0.60mm",
      "0.70mm",
      "0.80mm",
      "0.90mm",
      "1.00mm",
      "1.20mm",
    ];

    for (const key in trapezTip) {
      const option = document.createElement("option");
      option.value = key;
      option.text = trapezTip[key];
      secondPick.appendChild(option);
    }

    trapezTur.forEach((secenek) => {
      const option = document.createElement("option");
      option.value = secenek.replace(/\s/g, "").toLocaleLowerCase();
      option.text = secenek;
      thirdPick.appendChild(option);
    });

    sacKalinlik.forEach((secenek) => {
      const option = document.createElement("option");
      option.value = secenek.replace(/\s/g, "").toLocaleLowerCase();
      option.text = secenek;
      fourthPick.appendChild(option);
    });
  } else if (pick === "betonAltiTrapezSac") {
    const betonTrapezTur = ["Beton Altı Galvanizli"];

    const secim = document.createElement("option");
    secim.value = "";
    secim.text = "ÜRÜN TİPİ SEÇ";
    secim.disabled = true;
    secim.selected = true;
    secondPick.appendChild(secim);

    const betonSacKalinlik = [
      "0.60mm",
      "0.70mm",
      "0.80mm",
      "0.90mm",
      "1.00mm",
      "1.20mm",
    ];

    for (const key in betonTrapezTip) {
      const option = document.createElement("option");
      option.value = key;
      option.text = betonTrapezTip[key];
      secondPick.appendChild(option);
    }

    betonTrapezTur.forEach((secenek) => {
      const option = document.createElement("option");
      option.value = secenek.replace(/\s/g, "").toLocaleLowerCase();
      option.text = secenek;
      thirdPick.appendChild(option);
    });

    betonSacKalinlik.forEach((secenek) => {
      const option = document.createElement("option");
      option.value = secenek.replace(/\s/g, "").toLocaleLowerCase();
      option.text = secenek;
      fourthPick.appendChild(option);
    });
  }
});

secondPick.addEventListener("change", () => {
  const secondPickChange = secondPick.value;
  formImg.innerHTML = "";

  if (secondPickChange) {
    const image = document.createElement("img");
    image.src = "../assets/" + secondPickChange + ".jpeg";
    formImg.appendChild(image);
  }
});
