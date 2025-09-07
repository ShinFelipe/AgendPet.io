import dayjs from "dayjs";
import { getAgendData } from "./get-agend-data";

const morningBody = document.querySelector("#morning .agenda-body");
const afternoonBody = document.querySelector("#afternoon .agenda-body");
const nightBody = document.querySelector("#night .agenda-body");
const currentData = document.getElementById("data");

document.addEventListener("DOMContentLoaded", async () => {
  await renderAgenda();
});

export async function renderAgenda() {
  // Limpa apenas os agendamentos, mantendo os títulos
  const filterDate = document.getElementById("data").value;
  let data;
  if (filterDate) {
    data = await getAgendData(filterDate);
  } else {
    data = await getAgendData();
  }

  morningBody.innerHTML = "";
  afternoonBody.innerHTML = "";
  nightBody.innerHTML = "";

  const currentDate = dayjs(new Date()).format("YYYY-MM-DD");
  currentData.value = currentDate;
  currentData.min = currentDate;

  data.forEach((item) => {
    const agendaContent = document.createElement("div");
    agendaContent.classList.add("agenda-content");

    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    const petName = document.createElement("span");
    const span = document.createElement("span");
    const removeBtn = document.createElement("button");

    h4.textContent = item["time-agendamento"];
    petName.textContent = item["nome-pet"];
    p.append(petName);
    p.append(`/${item["nome-tutor"]}`);
    span.textContent = item["descricao-servico"];
    removeBtn.textContent = "Remover agendamento";
    removeBtn.setAttribute("id", item.id);

    agendaContent.append(h4, p, span, removeBtn);

    const hours = parseInt(item["time-agendamento"].split(":")[0]);

    if (hours > 6 && hours <= 12) {
      morningBody.append(agendaContent);
    } else if (hours > 12 && hours <= 18) {
      afternoonBody.append(agendaContent);
    } else {
      nightBody.append(agendaContent);
    }
  });
}
