export async function enviarPregunta(pregunta, contexto, preguntasModulo) {
  const res = await fetch("/emprende-api/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pregunta,
      contexto,
      preguntasModulo,
    }),
  });

  const data = await res.json();
  return data.respuesta;
}
