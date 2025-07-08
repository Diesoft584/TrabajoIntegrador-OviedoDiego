let items = [];

const formulario = document.getElementById("formulario");
const input = document.getElementById("input-texto");
const lista = document.getElementById("lista");

const mostraLista = () => {
  lista.innerHTML = items
    .map((item) => `<div class="tarjet"> ${item}</div>`)
    .join("");
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const texto = input.value.trim();
  if (texto === "") return;

  items.push(texto);
  input.value = "";
  mostraLista();
});
