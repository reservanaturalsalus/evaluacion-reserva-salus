document.getElementById("salusForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const endpoint = "URL_DE_TU_WEB_APP_AQUÍ"; // <- la cambiás cuando actives el script

  const response = await fetch(endpoint, {
    method: "POST",
    body: data
  });

  const mensaje = document.getElementById("mensaje");

  if (response.ok) {
    mensaje.innerText = "✅ ¡Gracias por tu evaluación!";
    form.reset();
  } else {
    mensaje.innerText = "❌ Algo salió mal, intentá nuevamente.";
  }
});
