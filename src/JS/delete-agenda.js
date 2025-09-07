import { renderAgenda } from "./load-agend-data";

export async function deleteAgenda(id) {
  try {
    await fetch(`http://localhost:3000/petAgend/${id}`, {
      method: "DELETE",
    });

    console.log(document.getElementById(id).parentElement);

    document.getElementById(id).parentElement.remove();
  } catch (error) {
    console.error("Erro ao deletar o agendamento:", error);
  }
}

document.addEventListener("click", async (event) => {
  if (
    event.target.tagName === "BUTTON" &&
    event.target.id &&
    event.target.textContent === "Remover agendamento"
  ) {
    const id = event.target.id;
    await deleteAgenda(id);
    renderAgenda();
  }
});
