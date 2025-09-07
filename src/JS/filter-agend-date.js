import { getAgendData } from "./get-agend-data";
import { renderAgenda } from "./load-agend-data";

document.getElementById("data").addEventListener("change", async (event) => {
  const selectedDate = event.target.value;

  const data = await getAgendData(selectedDate);
  renderAgenda(data);
});
