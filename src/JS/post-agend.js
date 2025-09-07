export async function postAgend(formData) {
  try {
    const response = await fetch("http://localhost:3000/petAgend", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erro ao enviar o agendamento:", error);
  }
}
