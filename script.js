// Função Exibir/Ocultar do botão Formulário.
var btn = document.querySelector("#esconder-mostrar");
var form = document.querySelector("#profileForm");

btn.addEventListener("click", () => {
  if (form.style.display === "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
});
// ------------------------------------
