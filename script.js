document.getElementById("salusForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const endpoint = "https://script.google.com/macros/s/AKfycbzY5j7Jxxz_LOwPWr7gjEFqdY-4o11jha3Bb30UAUt4Yo6qHxe1Q_XMLXjpTzCnqav4YQ/exec"; // <- la cambiás cuando actives el script

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
