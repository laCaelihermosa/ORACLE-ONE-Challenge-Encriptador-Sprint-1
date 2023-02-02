let encrypt = document.getElementById("encrypt");
const encryptBtn = document.querySelector(".encrypt-btn");
const decryptBtn = document.querySelector(".decrypt-btn");
const elements = document.querySelectorAll(".elements");
const copyBtn = document.querySelector(".aside-btn");
let encryptedText = document.querySelector(".encrypted-text");

const hiddenElements = () => {
  elements.forEach((element) => element.classList.add("hidden"));
  copyBtn.classList.remove("hidden");
  encryptedText.classList.remove("hidden");
};

const encryptGadget = () => {
  let text = encrypt.value;
  text = text
    .replaceAll(/e/gi, "enter")
    .replaceAll(/i/gi, "imes")
    .replaceAll(/o/gi, "ober")
    .replaceAll(/a/gi, "ai")
    .replaceAll(/u/gi, "ufat");
  encryptedText.value = text;
};

const decryptGadget = () => {
  let text = encrypt.value;
  text = text
    .replaceAll(/enter/gi, "e")
    .replaceAll(/imes/gi, "i")
    .replaceAll(/ober/gi, "o")
    .replaceAll(/ai/gi, "a")
    .replaceAll(/ufat/gi, "u");
  encryptedText.value = text;
};

const emptySpace = () => {
  if (encrypt.value == "") {
    alert("ingresa una palabra");
    location.reload();
  }
};

encrypt.addEventListener("keyup", (event) => {
  if (event.getModifierState("CapsLock")) {
    alert("Solo se puede escribir en minúscula");
    location.reload();
  }
});

encryptBtn.addEventListener("click", () => {
  emptySpace();
  hiddenElements();
  encryptGadget();
});

function eraseEncrypt() {
  document.getElementById("erase").style.display = "none";
}

decryptBtn.addEventListener("click", () => {
  emptySpace();
  hiddenElements();
  decryptGadget();
});

function eraseDecrypt() {
  document.getElementById("erase").style.display = "none";
}

copyBtn.addEventListener("click", () => {  
  encryptedText.select();
  encryptedText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(encryptedText.value);  
  txtcopiado.classList.remove("hidden");
  setTimeout(() => {
    txtcopiado.classList.add("hidden");
  }, 1000);
});



