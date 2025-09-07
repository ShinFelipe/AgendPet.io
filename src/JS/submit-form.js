import { renderAgenda } from "./load-agend-data";
import { postAgend } from "./post-agend";

const form = document.querySelector("form");
const dialog = document.querySelector("dialog");
const overlay = document.getElementById("overlay");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form); // Cria um objeto FormData a partir do formulário ele é um mapa de chave-valor com os dados do formulário: [ nameDoCampo , valorDoCampo ]
  const data = Object.fromEntries(formData); // Converte o FormData em um objeto comum
  await postAgend(data);

  dialog.close();
  overlay.classList.remove("block");
  form.reset();
  renderAgenda();
  console.log("Formulário enviado!");
});
