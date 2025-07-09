let items = [];

const formulario = document.getElementById("formulario");
const input = document.getElementById("input-texto");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

const actualizarContador = () => {
  contador.textContent = `Total: ${items.length} tareas`;
};

const guardarLocal = () => {
  localStorage.setItem("tareas", JSON.stringify(items));
};

const mostraLista = () => {
  lista.innerHTML = items
    .map(
      (item, index) =>
        `<div class="tarjeta ${
          item.completada ? "completada" : ""
        }" onclick="toggleCompletado(${index})">
          ${item.texto}
          <button onclick="event.stopPropagation(); eliminarItem(${index})">❌</button>
        </div>`
    )
    .join("");
  actualizarContador();
};

const eliminarItem = (index) => {
  items.splice(index, 1);
  guardarLocal();
  mostraLista();
};

const toggleCompletado = (index) => {
  items[index].completada = !items[index].completada;
  guardarLocal();
  mostraLista();
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const texto = input.value.trim();

  if (texto === "") {
    alert("Por favor, escribí una tarea");
    return;
  }

  items.push({ texto, completada: false });
  input.value = "";
  guardarLocal();
  mostraLista();
});

const datosGuardados = localStorage.getItem("tareas");
if (datosGuardados) {
  items = JSON.parse(datosGuardados);
  mostraLista();
}
