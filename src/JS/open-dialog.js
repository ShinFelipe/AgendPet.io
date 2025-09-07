import dayjs from "dayjs";

const dialog = document.querySelector("dialog");
const newAgend = document.getElementById("new-agend");
const overlay = document.getElementById("overlay");
const dataAgendamento = document.getElementById("data-agendamento");

newAgend.addEventListener("click", () => {
  dialog.showModal();

  dataAgendamento.min = dayjs(new Date()).format("YYYY-MM-DD");
  overlay.classList.add("block");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog.open) {
    dialog.close();
    overlay.classList.remove("block");
  }
});
