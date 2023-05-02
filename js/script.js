const input = document.querySelector("#input");
const counter = document.querySelector(".counter");
const btnToggle = document.querySelector(".toggle");
const replace = document.querySelector(".replace")

let mode = "characters";

btnToggle.addEventListener("click", () => {
  if(mode === "characters"){
    mode = "words";
    btnToggle.textContent = "Contar Caracteres";
  } else {
    mode = "characters";
    btnToggle.textContent = "Contar Palavras";
  }

  input.dispatchEvent(new Event("input"));
});

input.addEventListener("input", () => {
  let count = 0;

  if (mode === "characters"){
    count = input.value.length;
    counter.textContent = `${count} caractere(s)`;
    replace.textContent = "Contador de Caracteres";

  } else {
    const words = input.value.trim().split(/\s+/);
    count = input.value.trim() === "" ? 0 :  words.length;
    counter.textContent = `${count} palavra(s)`;
    replace.textContent = "Contador de Palavras";
  }
});