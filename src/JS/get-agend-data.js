import dayjs from "dayjs";

export async function getAgendData(date = "") {
  try {
    const response = await fetch("http://localhost:3000/petAgend");
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    const data = await response.json();

    if (date) {
      const dailySchedyules = data.filter((schedule) => {
        console.log(schedule["data-agendamento"]);

        return dayjs(date).isSame(schedule["data-agendamento"], "day");
      });
      console.log(dailySchedyules);
      return dailySchedyules;
    }

    return data;
  } catch (error) {
    console.error("Erro ao obter o agendamento:", error);
  }
}
